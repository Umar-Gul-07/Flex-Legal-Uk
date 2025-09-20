# Flex-Legal-Uk AWS Deployment Guide

## Prerequisites

Before deploying, make sure you have:

1. **EC2 Instance** running Ubuntu 20.04+ or Amazon Linux 2
2. **Security Group** configured with these ports:
   - Port 22 (SSH)
   - Port 80 (HTTP)
   - Port 443 (HTTPS) - optional
   - Port 5000 (Backend API) - optional for direct access
3. **MongoDB Atlas** account and cluster (recommended for production)
4. **Stripe** account with API keys
5. **Email** service credentials (Gmail, SendGrid, etc.)

## Quick Deployment

### Step 1: Connect to Your EC2 Instance

```bash
# Replace with your actual key file and IP
ssh -i "your-key.pem" ubuntu@13.60.230.203
```

### Step 2: Upload Your Code

```bash
# Option 1: Using SCP (from your local machine)
scp -i "your-key.pem" -r . ubuntu@13.60.230.203:/home/ubuntu/flex-legal-uk

# Option 2: Using Git (if your code is in a repository)
git clone https://github.com/yourusername/flex-legal-uk.git
cd flex-legal-uk
```

### Step 3: Configure Environment Variables

```bash
# Copy the example environment file
cp env.example .env

# Edit the environment file with your actual values
nano .env
```

**Required Environment Variables:**
```bash
# Database (MongoDB Atlas recommended)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/flex-legal-uk

# JWT Secret (generate a strong secret)
JWT_SECRET=your-super-secret-jwt-key-here

# Stripe Keys
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Step 4: Deploy the Application

```bash
# Make the deployment script executable
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

### Step 5: Access Your Application

After deployment, your application will be available at:
- **Frontend**: `http://YOUR_EC2_IP`
- **Backend API**: `http://YOUR_EC2_IP:5000`

## Manual Deployment Steps

If you prefer to deploy manually:

### 1. Install Docker and Docker Compose

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Logout and login again to apply docker group changes
```

### 2. Build and Start Containers

```bash
# Build and start all services
docker-compose up -d

# Check if services are running
docker-compose ps

# View logs
docker-compose logs -f
```

## Managing Your Application

### View Logs
```bash
# View all logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f backend
docker-compose logs -f frontend
```

### Restart Services
```bash
# Restart all services
docker-compose restart

# Restart specific service
docker-compose restart backend
```

### Update Application
```bash
# Run the update script
./update.sh

# Or manually
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Stop Application
```bash
docker-compose down
```

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Check what's using the port
   sudo netstat -tulpn | grep :80
   sudo netstat -tulpn | grep :5000
   
   # Kill the process
   sudo kill -9 PID
   ```

2. **Permission Denied**
   ```bash
   # Fix file permissions
   sudo chown -R $USER:$USER .
   chmod +x deploy.sh update.sh
   ```

3. **Docker Permission Issues**
   ```bash
   # Add user to docker group
   sudo usermod -aG docker $USER
   # Logout and login again
   ```

4. **Database Connection Issues**
   - Check your MongoDB Atlas connection string
   - Ensure your IP is whitelisted in MongoDB Atlas
   - Verify network security group allows outbound connections

### Check Service Status
```bash
# Check if containers are running
docker-compose ps

# Check system resources
htop
df -h
free -h
```

## Security Considerations

1. **Change Default Passwords**: Update all default credentials
2. **Use Strong JWT Secrets**: Generate cryptographically strong secrets
3. **Enable HTTPS**: Consider using Let's Encrypt for SSL certificates
4. **Regular Updates**: Keep your system and dependencies updated
5. **Firewall**: Configure proper security group rules

## Monitoring

### Basic Monitoring Commands
```bash
# Check container status
docker-compose ps

# Monitor resource usage
docker stats

# Check disk space
df -h

# Check memory usage
free -h

# Check running processes
htop
```

## Backup

### Database Backup
```bash
# If using MongoDB on the instance (not recommended for production)
mongodump --uri="your-mongodb-connection-string" --out=backup/
```

### Application Backup
```bash
# Backup your application files
tar -czf flex-legal-backup-$(date +%Y%m%d).tar.gz .
```

## Support

If you encounter any issues:
1. Check the logs: `docker-compose logs -f`
2. Verify environment variables are set correctly
3. Ensure all required ports are open in security groups
4. Check MongoDB Atlas connection and IP whitelisting
