# Deployment Checklist for Hostinger

## Common Issues & Solutions

### 1. **Browser/Server Caching**
**Problem:** Old CSS/JS files are cached, showing old styles
**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Add cache-busting parameters to CSS/JS links (already added)

### 2. **Case Sensitivity**
**Problem:** Linux servers (Hostinger) are case-sensitive, Windows is not
**Solution:**
- Ensure all file names match EXACTLY:
  - `styles.css` (not `Styles.css` or `STYLES.CSS`)
  - `script.js` (not `Script.js` or `SCRIPT.JS`)
  - `index.html` (not `Index.html`)

### 3. **File Upload Checklist**
Make sure ALL these files are uploaded:
- ✅ index.html
- ✅ products.html
- ✅ deals.html
- ✅ about.html
- ✅ contact.html
- ✅ cart.html
- ✅ checkout.html
- ✅ product-detail.html
- ✅ learn-more.html
- ✅ styles.css
- ✅ script.js

### 4. **File Structure on Server**
All files should be in the SAME directory (usually `public_html` or `www`):
```
public_html/
├── index.html
├── products.html
├── deals.html
├── about.html
├── contact.html
├── cart.html
├── checkout.html
├── product-detail.html
├── learn-more.html
├── styles.css
└── script.js
```

### 5. **File Permissions**
Set correct permissions via File Manager or FTP:
- HTML files: 644
- CSS/JS files: 644
- Folders: 755

### 6. **Testing Steps**
1. Open browser DevTools (F12)
2. Go to Network tab
3. Check if `styles.css` and `script.js` load (status 200)
4. Check Console tab for any errors
5. If files show 404, they're not uploaded correctly

### 7. **Quick Fixes**
- **CSS not loading?** Check browser console for 404 errors
- **JavaScript not working?** Check if `script.js` is uploaded
- **Images not showing?** External images (Unsplash) should work, but check internet connection
- **Links not working?** Ensure all HTML files are in same directory

### 8. **Hostinger-Specific**
- Upload files to `public_html` folder
- Use File Manager or FTP (FileZilla)
- Default page should be `index.html`
- Check `.htaccess` if you have one (shouldn't interfere)

## Still Having Issues?
1. Check browser console (F12) for errors
2. Verify all files are uploaded
3. Clear browser cache completely
4. Try incognito/private browsing mode
5. Check file names match exactly (case-sensitive)

