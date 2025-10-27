# Plesk Deployment Guide - IONOS Virtual Server
## Jean-Luc Baroni Ltd Website

---

## 📋 Prerequisites

You have:
- ✅ IONOS Virtual Server
- ✅ Plesk Control Panel access
- ✅ Static website files in `out` folder (already built)
- ✅ Domain name (or will use server IP initially)

---

## 🚀 Deployment Methods for Plesk

### **Option 1: Plesk File Manager (Easiest - Recommended)**

This is the simplest method and works great for static sites.

#### Step-by-Step Instructions:

1. **Log in to Plesk**
   - Go to your Plesk URL (usually `https://your-server-ip:8443`)
   - Enter your admin credentials

2. **Select or Create a Domain**
   - Click on **"Websites & Domains"** in the left sidebar
   - If you have a domain already: Select it
   - If not: Click **"Add Domain"** to create a new one
     - Enter your domain name (e.g., `jlbaroni.com`)
     - Or use a subdomain (e.g., `gallery.yourdomain.com`)
     - Plesk will create the directory structure automatically

3. **Access File Manager**
   - In your domain's panel, click **"Files"**
   - Click **"File Manager"**
   - Navigate to `httpdocs` (this is your public web root)

4. **Clear Default Files**
   - Select all files in `httpdocs` (if any exist)
   - Click **"Remove"** to delete them
   - Confirm deletion

5. **Upload Your Website**
   - Download `jlbaroni-ionos-deploy.zip` from your project folder
   - Extract it on your computer to get the `out` folder
   - In Plesk File Manager:
     - Click **"Upload Files"** button
     - Upload ALL files from the `out` folder
     - **Important:** Upload the *contents* of the `out` folder, not the folder itself
     - Files should be directly in `httpdocs`, not in `httpdocs/out`

6. **Verify File Structure**
   Your `httpdocs` should look like:
   ```
   httpdocs/
   ├── index.html
   ├── notable-sales.html
   ├── notable-sales/
   │   ├── 1.html
   │   ├── 2.html
   │   └── ... (more files)
   ├── catalogues.html
   ├── contact.html
   ├── privacy.html
   ├── uploads/
   │   └── hero.jpg
   └── _next/
       └── static/
           └── ... (CSS, JS, fonts)
   ```

7. **Set Up Clean URLs (Important!)**
   - In File Manager, click **"Create File"**
   - Name it `.htaccess`
   - Edit the file and paste this content:

   ```apache
   # Jean-Luc Baroni Ltd - Clean URLs Configuration

   RewriteEngine On

   # Force HTTPS
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

   # Remove .html extension for clean URLs
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteCond %{REQUEST_FILENAME}.html -f
   RewriteRule ^(.+)$ $1.html [L]

   # Custom error pages
   ErrorDocument 404 /404.html

   # Security - Protect sensitive files
   <FilesMatch "\.(env|json|lock)$">
     Order allow,deny
     Deny from all
   </FilesMatch>

   # Enable compression
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
   </IfModule>

   # Browser caching
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
     ExpiresByType font/woff2 "access plus 1 year"
   </IfModule>

   # Security headers
   <IfModule mod_headers.c>
     Header set X-Frame-Options "SAMEORIGIN"
     Header set X-XSS-Protection "1; mode=block"
     Header set X-Content-Type-Options "nosniff"
   </IfModule>

   # Disable directory listing
   Options -Indexes

   # UTF-8 encoding
   AddDefaultCharset UTF-8
   ```

8. **Enable SSL Certificate**
   - Go back to **"Websites & Domains"**
   - Click on your domain
   - Click **"SSL/TLS Certificates"**
   - Click **"Install"** next to "Let's Encrypt" (free SSL)
   - Check "Secure the domain and www subdomain"
   - Click **"Get it free"**
   - Wait for SSL to be issued (usually 1-2 minutes)

9. **Test Your Website**
   - Visit `https://yourdomain.com`
   - All pages should work
   - Navigation should function
   - Images should load

---

### **Option 2: FTP/SFTP Upload (Advanced)**

If you prefer using an FTP client like FileZilla:

1. **Get FTP Credentials from Plesk**
   - In Plesk, go to **"Websites & Domains"**
   - Click on your domain
   - Click **"FTP Access"**
   - Note your FTP credentials or create a new FTP account

2. **Connect via FTP Client**
   - Open FileZilla (or your preferred FTP client)
   - Host: Your server IP or domain
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP - more secure)
   - Click **"Quickconnect"**

3. **Upload Files**
   - Navigate to `httpdocs` on the remote server (right panel)
   - Delete any existing files
   - Upload all contents from your local `out` folder (left panel)
   - Create `.htaccess` file as described in Option 1

---

### **Option 3: SSH/Terminal (Most Advanced)**

If you have SSH access and prefer command line:

1. **Connect via SSH**
   ```bash
   ssh root@your-server-ip
   # Or use your Plesk username
   ssh username@your-server-ip
   ```

2. **Navigate to Document Root**
   ```bash
   cd /var/www/vhosts/yourdomain.com/httpdocs
   ```

3. **Upload and Extract**
   - Upload your zip file using SCP:
   ```bash
   scp jlbaroni-ionos-deploy.zip username@your-server-ip:/tmp/
   ```

   - Extract on server:
   ```bash
   cd /var/www/vhosts/yourdomain.com/httpdocs
   rm -rf *  # Clear existing files
   unzip /tmp/jlbaroni-ionos-deploy.zip
   mv out/* .
   rm -rf out
   ```

4. **Set Permissions**
   ```bash
   chown -R username:psacln /var/www/vhosts/yourdomain.com/httpdocs
   chmod -R 755 /var/www/vhosts/yourdomain.com/httpdocs
   find . -type f -exec chmod 644 {} \;
   ```

5. **Create .htaccess**
   ```bash
   nano .htaccess
   # Paste the .htaccess content from Option 1
   # Press Ctrl+X, then Y, then Enter to save
   ```

---

## 🔧 Plesk-Specific Configuration

### **PHP Settings (If Needed for Contact Form)**

If you want to add PHP email functionality to your contact form:

1. **Check PHP Version**
   - Go to **"Websites & Domains"** > Your domain
   - Click **"PHP Settings"**
   - Ensure PHP is enabled (PHP 8.1 or 8.2 recommended)

2. **Enable Required PHP Extensions**
   - In PHP Settings, ensure these are enabled:
     - `mail` - for sending emails
     - `curl` - for external API calls
     - `json` - for data processing

### **Email Setup for Contact Form**

Plesk makes email easy! To receive contact form submissions at `jwatson@jlbaroni.com`:

1. **Create Email Account**
   - In Plesk, go to **"Mail"**
   - Click **"Create Email Address"**
   - Create: `jwatson@yourdomain.com`
   - Or set up email forwarding to `jwatson@jlbaroni.com`

2. **Use PHP Mail Script** (I can provide this if needed)

---

## 📊 Monitoring & Performance

### **Website Statistics**

Plesk includes built-in analytics:
- Go to **"Websites & Domains"** > Your domain
- Click **"Statistics"**
- View visitor data, bandwidth usage, etc.

### **Performance Settings**

1. **Enable Caching**
   - Go to **"Apache & nginx Settings"**
   - Enable nginx caching for static files
   - This makes your site load faster

2. **Enable Gzip Compression**
   - Already included in `.htaccess`
   - Or enable in Plesk Apache settings

---

## 🔒 Security Best Practices

### **Firewall Settings**

1. In Plesk, go to **"Tools & Settings"**
2. Click **"Firewall"**
3. Ensure only necessary ports are open:
   - 80 (HTTP)
   - 443 (HTTPS)
   - 8443 (Plesk)
   - 22 (SSH - restrict to your IP if possible)

### **Regular Updates**

- Plesk will notify you of updates
- Keep Plesk and all components updated
- Check monthly for security patches

### **Backup Configuration**

1. Go to **"Websites & Domains"** > Your domain
2. Click **"Backup Manager"**
3. Set up automatic backups:
   - Daily backups recommended
   - Keep at least 7 days of backups
   - Store on external location if possible

---

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads at `https://yourdomain.com`
- [ ] SSL certificate is active (green padlock in browser)
- [ ] All navigation links work
- [ ] Notable Sales page displays artwork grid
- [ ] Individual artwork pages load with zoom functionality
- [ ] Catalogues page shows all thumbnails
- [ ] Contact page displays form
- [ ] Privacy Notice is accessible
- [ ] Images load correctly (check browser console for errors)
- [ ] Mobile version works on phone/tablet
- [ ] No 404 errors on any pages
- [ ] `.htaccess` is working (clean URLs without .html)

---

## 🆘 Troubleshooting

### **Issue: 404 Errors on Pages**

**Solution:**
- Verify `.htaccess` exists in `httpdocs`
- Check that mod_rewrite is enabled in Plesk
- Go to **"Apache & nginx Settings"** and ensure "Enable .htaccess" is checked

### **Issue: Images Not Loading**

**Solution:**
- Check file permissions: `chmod 644` for images
- Verify `uploads` folder exists in `httpdocs`
- Check browser console for specific errors

### **Issue: SSL Certificate Not Working**

**Solution:**
- Re-issue Let's Encrypt certificate in Plesk
- Check DNS is pointing to correct server IP
- Wait 24-48 hours for DNS propagation if domain is new

### **Issue: Contact Form Not Sending**

**Solution:**
- Contact form needs backend setup (PHP/Node.js)
- Use Formspree.io as external service (easier)
- Or I can provide PHP mail script for Plesk

---

## 📞 Support Resources

**Plesk Documentation:**
- https://docs.plesk.com

**IONOS Support:**
- Available in your IONOS account
- Phone support included with Virtual Server plans

**Common Plesk File Locations:**
- Website files: `/var/www/vhosts/yourdomain.com/httpdocs`
- Logs: `/var/www/vhosts/yourdomain.com/logs`
- Config: `/var/www/vhosts/yourdomain.com/conf`

---

## 🎯 Quick Start Summary

**Fastest way to deploy:**

1. Log in to Plesk
2. Create/select your domain
3. Go to File Manager → `httpdocs`
4. Upload all files from `out` folder
5. Create `.htaccess` file (copy content from this guide)
6. Enable SSL certificate (Let's Encrypt)
7. Visit `https://yourdomain.com`

**Total time:** 10-15 minutes

---

## 🔄 Updating Your Website

To update in the future:

1. Make changes in Same.new
2. Build new version: `bun run build`
3. In Plesk File Manager, delete old files in `httpdocs`
4. Upload new files from `out` folder
5. Clear browser cache to see changes

---

**Your Plesk deployment package is ready!**

The `jlbaroni-ionos-deploy.zip` file contains everything you need.
Just extract and upload to Plesk following the steps above.

Good luck with your deployment! 🚀
