# Use an official Node.js runtime as a parent image
FROM node:20

# Set environment variables (provided by ECS task definition at runtime)
ENV TF_STATE_BUCKET_NAME=""
ENV TF_STATE_BUCKET_KEY=""
ENV TF_STATE_DYNAMODB_TABLE=""
ENV AWS_REGION=""

# Install Terraform [https://developer.hashicorp.com/terraform/install]
RUN apt-get update && \
    apt-get install -y \
    gnupg \
    lsb-release \
    wget \
    && rm -rf /var/lib/apt/lists/*

RUN wget -qO- https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg \
    && echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/hashicorp.list \
    && apt-get update \
    && apt-get install -y terraform \
    && terraform --version \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory to Terraform
WORKDIR /terraform

# Initialize Terraform with environment variables
RUN terraform init -input=false \
    -backend-config="bucket=${TF_STATE_BUCKET_NAME}" \
    -backend-config="key=${TF_STATE_BUCKET_KEY}" \
    -backend-config="region=${AWS_REGION}" \
    -backend-config="encrypt=true" \
    -backend-config="dynamodb_table=${TF_STATE_DYNAMODB_TABLE}"

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY server.js ./
COPY build ./build

# Expose the port on which the application runs
EXPOSE 3000

# Command to run the server
CMD ["node", "server.js"]
