#!/bin/bash

# Flex-Legal-Uk Update Script
echo "🔄 Updating Flex-Legal-Uk..."

# Pull latest changes (if using git)
# git pull origin main

# Stop containers
echo "🛑 Stopping containers..."
docker-compose down

# Rebuild containers
echo "🔨 Rebuilding containers..."
docker-compose build --no-cache

# Start containers
echo "🚀 Starting containers..."
docker-compose up -d

# Wait for services to start
echo "⏳ Waiting for services to start..."
sleep 20

# Check status
echo "🔍 Checking service status..."
docker-compose ps

echo "✅ Update completed!"
echo "🌐 Application is running at: http://$(curl -s ifconfig.me)"
