# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build React app
RUN npm run build

# Expose the port on which the application runs
EXPOSE 3000

# Command to run the server
CMD ["node", "server.js"]
