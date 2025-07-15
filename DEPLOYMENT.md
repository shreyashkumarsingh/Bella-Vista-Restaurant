# Vercel Deployment Guide

## Quick Deployment Steps

### 1. Prerequisites
- Ensure your project builds successfully locally
- Have a Vercel account (sign up at https://vercel.com)
- Install Vercel CLI (optional): `npm i -g vercel`

### 2. Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com/dashboard
   - Click "New Project"
   - Import your GitHub repository
   - Select your repository: `vibrant-feast-webscape`

3. **Configure Build Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Environment Variables** (if needed):
   - No environment variables required for this project

5. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### 3. Deploy via CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

## Build Configuration Files

### vercel.json
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### package.json (Build Scripts)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "type-check": "tsc --noEmit"
  }
}
```

## Troubleshooting Common Issues

### 1. Build Fails
- **Issue**: TypeScript errors
- **Solution**: Run `npm run type-check` locally first
- **Fix**: Address any TypeScript errors before deploying

### 2. 404 on Refresh
- **Issue**: Single Page Application routing
- **Solution**: The `vercel.json` file handles this with rewrites

### 3. Asset Loading Issues
- **Issue**: Incorrect base path
- **Solution**: Ensure `base: "/"` in `vite.config.ts`

### 4. Performance Issues
- **Issue**: Large bundle size
- **Solution**: Code splitting is configured in `vite.config.ts`

## Post-Deployment Checklist

- [ ] Test all pages and navigation
- [ ] Verify contact form functionality
- [ ] Check responsive design on mobile
- [ ] Test reservation form
- [ ] Verify all images load correctly
- [ ] Check performance with Lighthouse

## Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Optimization

The project includes:
- ✅ Code splitting (vendor, UI components)
- ✅ Optimized images via Unsplash CDN
- ✅ Minified CSS and JavaScript
- ✅ Proper caching headers via Vercel

## Support

If you encounter issues:
1. Check Vercel build logs
2. Ensure local build works: `npm run build`
3. Verify all dependencies are in package.json
4. Check browser console for errors

Your Indian Flavour Palace website is now ready for production! 🚀
