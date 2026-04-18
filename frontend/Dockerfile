# Use Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port Express runs on
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]