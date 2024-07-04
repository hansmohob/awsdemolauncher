# Use Node.js version 14 as the base image
FROM node:14

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory in the container
COPY . .

# Build React app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
