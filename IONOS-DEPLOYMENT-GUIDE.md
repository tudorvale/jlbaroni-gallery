# IONOS Deployment Guide for Jean-Luc Baroni Ltd Website

## 📦 Deployment Package

Your website has been successfully built and packaged for IONOS deployment!

**Deployment file:** `jlbaroni-ionos-deploy.zip` (located in the `jlbaroni-gallery` folder)

---

## 🚀 Deployment Options for IONOS

IONOS offers several hosting solutions. Choose the one that matches your hosting plan:

### Option 1: IONOS MyWebsite (Recommended for Beginners)
1. Log in to your IONOS account
2. Navigate to **Websites & Shops**
3. Click **Upload Website**
4. Upload the contents of the `out` folder
5. Set your domain settings

### Option 2: IONOS Web Hosting (Most Common)
This is the recommended approach for static websites.

#### Step-by-Step Instructions:

1. **Log in to IONOS Control Panel**
   - Go to https://www.ionos.com
   - Click **Login** and enter your credentials

2. **Access File Manager or FTP**
   - Navigate to **Hosting** → **Manage**
   - Choose either:
     - **File Manager** (browser-based, easier)
     - **FTP Access** (more control)

3. **Upload Your Website Files**

   **Using File Manager:**
   - Download the `jlbaroni-ionos-deploy.zip` file
   - Extract the zip file on your computer
   - In IONOS File Manager, navigate to your website root directory (usually `/html` or `/public_html`)
   - Upload ALL files from the `out` folder
   - Make sure to maintain the folder structure

   **Using FTP (e.g., FileZilla):**
   - Get your FTP credentials from IONOS Control Panel
   - Connect using an FTP client
   - Navigate to `/html` or `/public_html`
   - Upload all contents from the `out` folder
   - Preserve directory structure

4. **Configure Domain Settings**
   - In IONOS Control Panel, go to **Domains & SSL**
   - Ensure your domain points to the correct directory
   - Enable SSL/HTTPS (highly recommended for security)

5. **Set Up .htaccess for Clean URLs (Important!)**

   Create a `.htaccess` file in your root directory with this content:

   ```apache
   # Enable RewriteEngine
   RewriteEngine On

   # Redirect to HTTPS
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

   # Handle clean URLs
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteCond %{REQUEST_FILENAME}.html -f
   RewriteRule ^(.+)$ $1.html [L]

   # 404 handling
   ErrorDocument 404 /404.html

   # Protect sensitive files
   <FilesMatch "\.(env|json|config\.js)$">
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
     ExpiresByType image/gif "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

6. **Test Your Website**
   - Visit your domain (e.g., https://jlbaroni.com)
   - Test all pages:
     - Homepage (/)
     - Notable Sales (/notable-sales)
     - Individual artworks (/notable-sales/1, /notable-sales/2, etc.)
     - Catalogues (/catalogues)
     - Contact (/contact)
     - Privacy Notice (/privacy)
   - Check mobile responsiveness
   - Verify images load correctly
   - Test the contact form

### Option 3: IONOS WordPress Hosting

If you have WordPress hosting, you can:
1. Create a custom page template
2. Embed the static site in a custom theme
3. Or use a plugin like "Insert Headers and Footers" to add the HTML

**Note:** This is more complex and not recommended unless you specifically need WordPress integration.

---

## ✅ Post-Deployment Checklist

After deployment, verify these items:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Hero image displays properly
- [ ] Notable Sales grid shows all artworks
- [ ] Individual artwork pages load with zoom functionality
- [ ] Catalogues page displays correctly
- [ ] Contact form appears (note: form submission needs backend setup)
- [ ] Privacy Notice is accessible
- [ ] Mobile version works on phone/tablet
- [ ] HTTPS is enabled (green padlock in browser)
- [ ] All images load (check browser console for errors)
- [ ] Right-click protection works on artwork images
- [ ] Google Analytics tracking (if configured)

---

## 🔧 Important Notes

### Contact Form Backend
The contact form currently uses client-side validation only. For actual email sending to `jwatson@jlbaroni.com`, you need to:

1. **Use IONOS Email Service:**
   - Set up email forwarding in IONOS
   - Configure a form handler (PHP, Node.js, or third-party service)

2. **Third-Party Form Services (Easier):**
   - **Formspree** (https://formspree.io) - Free tier available
   - **Netlify Forms** - If you later move to Netlify
   - **EmailJS** (https://www.emailjs.com) - Client-side email sending

3. **PHP Form Handler (if IONOS supports PHP):**
   I can provide a PHP script if needed.

### SSL Certificate
- IONOS offers free SSL certificates
- Enable HTTPS in your domain settings
- The `.htaccess` file above will redirect HTTP to HTTPS

### Performance Optimization
- All images are already optimized
- Lazy loading is enabled
- Fonts are preloaded
- CSS and JS are minified

---

## 📞 Need Help?

### IONOS Support
- **Phone:** Available in your IONOS account
- **Email:** support@ionos.com
- **Help Center:** https://www.ionos.com/help

### Common Issues

**Images not loading:**
- Check that the `uploads` folder was uploaded correctly
- Verify file permissions (should be 644 for files, 755 for folders)

**404 errors:**
- Ensure `.htaccess` file is in the root directory
- Check that all HTML files are in the correct locations

**Contact form not sending:**
- This requires additional backend configuration (see Contact Form Backend section above)

---

## 🎨 Website Features Included

✅ Responsive design (desktop, tablet, mobile)
✅ Sticky header with navigation
✅ Hero section with custom Old Master painting
✅ Notable Sales gallery (40+ artworks)
✅ Individual artwork detail pages with zoom
✅ Catalogues page with external links
✅ Contact page with form validation
✅ GDPR-compliant Privacy Notice
✅ Right-click protection on artwork images
✅ SEO-optimized meta tags
✅ Fast page load times
✅ Professional typography and styling

---

## 📁 File Structure

```
out/
├── index.html                 (Homepage)
├── notable-sales.html        (Artwork gallery)
├── notable-sales/            (Individual artwork pages)
│   ├── 1.html
│   ├── 2.html
│   └── ... (41 total)
├── catalogues.html           (Catalogues page)
├── contact.html              (Contact page)
├── privacy.html              (Privacy notice)
├── uploads/                  (Your images)
│   └── hero.jpg
├── _next/                    (CSS, JavaScript, fonts)
│   ├── static/
│   └── ...
├── 404.html                  (Error page)
└── .htaccess                 (Server configuration - create this)
```

---

## 🔄 Future Updates

To update your website:

1. Make changes in the Same.new project
2. Run build: `bun run build`
3. Create new zip: `zip -r update.zip out/`
4. Upload to IONOS (overwrites old files)
5. Clear browser cache to see changes

---

**Deployment Package Ready!** 🎉

Your `jlbaroni-ionos-deploy.zip` file contains everything needed for deployment.
Good luck with your launch!
