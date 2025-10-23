#!/bin/bash
# Deployment script for Incentino
# This script ensures clean builds without Docker cache issues

set -e

echo "🚀 Starting deployment process..."

# Stop and remove old containers
echo "📦 Cleaning up old containers..."
docker-compose down 2>/dev/null || true

# Remove old images to force fresh build
echo "🗑️  Removing old images..."
docker rmi incentino:latest 2>/dev/null || true

# Build with no cache to ensure fresh build
echo "🔨 Building Docker image (no cache)..."
docker build --no-cache -t incentino:latest .

# Alternative: Use docker-compose with no-cache
# docker-compose build --no-cache

echo "✅ Build complete!"
echo ""
echo "To deploy, run:"
echo "  docker-compose up -d"
echo ""
echo "Or if using Dockploy, push this commit and trigger a rebuild in Dockploy dashboard"
