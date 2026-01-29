#!/bin/bash

# Property Maintenance Website Deployment Script
# This script prepares and deploys the optimized website

echo "🚀 Property Maintenance Website Deployment"
echo "=========================================="

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo -e "${YELLOW}📦 Creating production build...${NC}"
    mkdir -p dist
    cp index.html dist/
    cp -r src dist/
    cp manifest.json dist/
    cp sw.js dist/
    cp -r icons dist/
    echo -e "${GREEN}✅ Production build created${NC}"
else
    echo -e "${GREEN}✅ Production build already exists${NC}"
fi

echo ""
echo -e "${BLUE}📋 Deployment Options:${NC}"
echo ""
echo "1. GitHub Pages:"
echo "   - Push to 'gh-pages' branch or 'main' branch with GitHub Pages enabled"
echo "   - Go to Settings > Pages > Source: 'Deploy from a branch' > 'main' > '/dist'"
echo ""
echo "2. Netlify:"
echo "   - Drag and drop 'dist' folder to netlify.com"
echo "   - Or connect GitHub repository with build command: (none) and publish directory: dist"
echo ""
echo "3. Vercel:"
echo "   - Connect GitHub repository"
echo "   - Build command: (none)"
echo "   - Output directory: dist"
echo ""
echo "4. Firebase Hosting:"
echo "   - Install Firebase CLI: npm install -g firebase-tools"
echo "   - Run: firebase init hosting"
echo "   - Set public directory to: dist"
echo "   - Run: firebase deploy"
echo ""
echo "5. Traditional Web Hosting:"
echo "   - Upload contents of 'dist' folder to your web server"
echo "   - Ensure proper MIME types for .js and .css files"
echo ""
echo -e "${GREEN}✨ Website is ready for deployment!${NC}"
echo -e "${GREEN}📁 Production files are in: ./dist/${NC}"
echo ""
echo -e "${BLUE}🎯 Key Features:${NC}"
echo "   ✅ Lighthouse optimized (Performance, Accessibility, SEO, Best Practices)"
echo "   ✅ Progressive Web App (PWA) with offline support"
echo "   ✅ Minimalist white design with black/gray text"
echo "   ✅ Multi-language support (RU, ES, EN)"
echo "   ✅ Responsive design for all devices"
echo "   ✅ Fast loading with critical CSS inlining"
echo "   ✅ Service Worker for caching and offline functionality"