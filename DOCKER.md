# Docker Deployment Guide

This guide explains how to deploy the Incentino SSG application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier deployment)

## Building and Running

### Option 1: Using Docker Compose (Recommended)

1. Build and start the container:
```bash
docker-compose up -d
```

2. Access the application at `http://localhost:3333`

3. Stop the container:
```bash
docker-compose down
```

### Option 2: Using Docker CLI

1. Build the image:
```bash
docker build -t incentino-ssg .
```

2. Run the container:
```bash
docker run -d -p 3333:3333 --name incentino incentino-ssg
```

3. Access the application at `http://localhost:3333`

4. Stop the container:
```bash
docker stop incentino
docker rm incentino
```

## How It Works

The Dockerfile uses a multi-stage build:

1. **Build Stage**: Uses Node.js to install dependencies and build the static site
2. **Production Stage**: Uses nginx to serve the generated static files from the `/out` directory

## Configuration

### Port Mapping

By default, the application is mapped to port 3333. To use a different port:

**Docker Compose:**
Edit `docker-compose.yml` and change the port mapping:
```yaml
ports:
  - "8080:3333"  # Maps to port 8080
```

**Docker CLI:**
```bash
docker run -d -p 8080:3333 --name incentino incentino-ssg
```

### Nginx Configuration

The nginx configuration (`nginx.conf`) includes:
- Gzip compression for better performance
- Security headers
- Static asset caching (1 year)
- Custom error pages
- Support for Next.js trailing slash URLs

## Production Deployment

For production environments:

1. Use a reverse proxy (like Traefik or nginx) for SSL/TLS termination
2. Consider using a container orchestration platform (Kubernetes, Docker Swarm)
3. Set up monitoring and logging
4. Configure proper backups

## Troubleshooting

### View logs:
```bash
# Docker Compose
docker-compose logs -f

# Docker CLI
docker logs -f incentino
```

### Rebuild after changes:
```bash
# Docker Compose
docker-compose up -d --build

# Docker CLI
docker build -t incentino-ssg . && docker stop incentino && docker rm incentino && docker run -d -p 3333:3333 --name incentino incentino-ssg
```

## Image Size

The final image is optimized using:
- Alpine Linux base image
- Multi-stage build (build artifacts not included in final image)
- Only static files served by nginx
