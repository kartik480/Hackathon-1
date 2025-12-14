# Deployment Troubleshooting Guide - Hostinger

## Quick Fix Checklist

### 1. **Clear Browser Cache** ⚠️ MOST COMMON ISSUE
**Problem:** Browser is showing old cached CSS/JS files

**Solution:**
- **Hard Refresh:** 
  - Windows: `Ctrl + Shift + R` or `Ctrl + F5`
  - Mac: `Cmd + Shift + R`
- **Clear Cache:**
  - Chrome: Settings → Privacy → Clear browsing data → Cached images and files
  - Firefox: Settings → Privacy → Clear Data → Cached Web Content
  - Edge: Settings → Privacy → Clear browsing data → Cached images and files

### 2. **Verify File Upload** ✅
**Check if ALL files are uploaded to Hostinger:**

Required files in `public_html` or `www` folder:
```
✅ index.html
✅ products.html
✅ deals.html
✅ about.html
✅ contact.html
✅ cart.html
✅ checkout.html
✅ product-detail.html
✅ learn-more.html
✅ styles.css
✅ script.js
```

**How to verify:**
1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Refresh the page
4. Check if `styles.css?v=2.0` and `script.js?v=2.0` load with status **200**
5. If you see **404**, the file is missing or in wrong location

### 3. **Case Sensitivity** 🔤
**Problem:** Linux servers (Hostinger) are case-sensitive, Windows is not

**Solution:**
- Ensure exact file names (lowercase):
  - ✅ `styles.css` (NOT `Styles.css` or `STYLES.CSS`)
  - ✅ `script.js` (NOT `Script.js` or `SCRIPT.JS`)
  - ✅ `index.html` (NOT `Index.html`)

### 4. **File Permissions** 🔒
**Set correct permissions via File Manager:**
- HTML files: **644**
- CSS/JS files: **644**
- Folders: **755**

### 5. **File Structure** 📁
**All files MUST be in the same directory:**
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

**DO NOT put files in subfolders unless you update the paths!**

### 6. **Check Browser Console** 🐛
**Open DevTools (F12) and check Console tab for errors:**

Common errors:
- **404 Not Found** → File not uploaded or wrong path
- **CORS Error** → Server configuration issue
- **Syntax Error** → Check file encoding (should be UTF-8)

### 7. **Test Specific Issues**

#### CSS Not Loading?
1. Check Network tab - is `styles.css?v=2.0` loading?
2. Check file path in HTML: `href="styles.css?v=2.0"`
3. Verify file exists on server
4. Check file permissions (644)

#### JavaScript Not Working?
1. Check Network tab - is `script.js?v=2.0` loading?
2. Check Console for JavaScript errors
3. Verify file exists on server
4. Check file permissions (644)

#### Images Not Showing?
- External images (Unsplash) should work automatically
- If images don't load, check internet connection
- Verify image URLs in browser DevTools Network tab

#### Layout Looks Broken?
1. Hard refresh (Ctrl+Shift+R)
2. Check if `styles.css` is loading
3. Verify CSS file is complete (not truncated)
4. Check browser console for CSS errors

### 8. **Upload Fresh Files** 📤
**If nothing works, re-upload all files:**
1. Delete old files from server
2. Upload fresh copies from your local folder
3. Verify all files uploaded successfully
4. Clear browser cache
5. Hard refresh

### 9. **Server-Side Caching** 🔄
**If Hostinger has server-side caching:**
1. Log into Hostinger control panel
2. Clear server cache
3. Wait 5-10 minutes
4. Hard refresh browser

### 10. **Test in Incognito/Private Mode** 🕵️
**To bypass all caching:**
- Open site in Incognito/Private window
- This ensures no cached files are used
- If it works in incognito, it's a caching issue

## Step-by-Step Debugging

1. **Open DevTools (F12)**
2. **Go to Network tab**
3. **Refresh page**
4. **Check these files:**
   - `styles.css?v=2.0` → Should be **200 OK**
   - `script.js?v=2.0` → Should be **200 OK**
5. **If 404:**
   - File not uploaded
   - Wrong file name (case sensitivity)
   - File in wrong directory
6. **If 200 but still broken:**
   - Browser cache issue → Hard refresh
   - Server cache → Clear server cache
   - File corruption → Re-upload file

## Still Not Working?

**Check these:**
- ✅ All files uploaded?
- ✅ Correct file names (case-sensitive)?
- ✅ All files in same directory?
- ✅ Correct file permissions (644)?
- ✅ Browser cache cleared?
- ✅ Hard refresh tried?
- ✅ Tested in incognito mode?
- ✅ Checked browser console for errors?

## Contact Support
If still having issues, provide:
1. Screenshot of Network tab (DevTools)
2. Screenshot of Console tab (DevTools)
3. List of files in your `public_html` folder
4. Browser and version you're using

