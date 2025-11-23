# Base OS (Debian-based linux with Node.js LTS preinstalled)
FROM node:20-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# Install TypeScript globally
RUN npm install -g typescript ts-node

# Copy package files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Default command (you can change this)
CMD ["bash"]