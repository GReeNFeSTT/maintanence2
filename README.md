# Property Management & Maintenance Website

A modern, responsive, and multilingual website for property management and technical maintenance services in Uruguay.

## Features

- **Multilingual Support**: Russian, Spanish, and English
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Modern Architecture**: Clean separation of concerns with modular JavaScript
- **Form Handling**: Client-side validation with async submission
- **Internationalization**: Data-driven translations with localStorage persistence
- **Accessibility**: Semantic HTML and proper ARIA attributes

## Project Structure

```
src/
├── assets/
│   ├── img/          # Images and graphics
│   └── icons/        # Favicon and other icons
├── css/
│   ├── reset.css     # CSS reset and normalization
│   ├── variables.css # CSS custom properties and breakpoints
│   └── main.css      # Main styles (copied from original stile.css)
└── js/
    ├── config.js     # Configuration (contacts, endpoints, analytics)
    ├── i18n.js       # Internationalization and translations
    ├── ui.js         # UI logic and language switching
    └── form.js       # Form validation and submission
```

## Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd property-management-website
   ```

2. **Open in browser**
   Simply open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. **Navigate to**
   Open `http://localhost:8000` in your browser.

### GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository settings
   - Under "Pages" section, select source: `main` branch
   - Your site will be available at `https://<username>.github.io/<repository>`

## Configuration

### Changing Texts/Languages

Edit `src/js/i18n.js`:
- Add new languages to the `translations` object
- Update existing translations as needed
- All text content uses `data-i18n` attributes

### Changing Contacts

Edit `src/js/config.js`:
```javascript
export const CONFIG = {
  contact: {
    email: "your-email@example.com",
    whatsapp: "+1234567890",
    telegram: "@yourusername",
  },
  // ...
};
```

### Form Endpoint

Update the form endpoint in `src/js/config.js`:
```javascript
formEndpoint: "https://your-form-service.com/endpoint"
```

## Development Guidelines

- Use `const` and `let`, avoid `var`
- Keep functions under 30 lines
- Each file should have a single responsibility
- Use semantic HTML elements (`<header>`, `<main>`, `<footer>`)
- Only one `<h1>` per page
- Add `lang` attribute to `<html>` element
- Use CSS custom properties for consistent styling

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support
- LocalStorage for language persistence

## Performance & Lighthouse Optimization

### How to Run Lighthouse

1. **Chrome DevTools**
   - Open Chrome DevTools (F12)
   - Go to Lighthouse tab
   - Select "Performance", "Accessibility", "Best Practices", "SEO"
   - Click "Generate report"

2. **Command Line**
   ```bash
   npm install -g lighthouse
   lighthouse http://localhost:8000 --output html --output-path ./lighthouse-report.html
   ```

3. **Web Page Test**
   - Visit https://webpagetest.org
   - Enter your URL
   - Select "Lighthouse" in the "Test Settings"

### Tips to Achieve >90 Score

#### Performance (>90)
- **Image Optimization**: Compress images, use WebP format, add `loading="lazy"` to below-the-fold images
- **Minification**: Minify CSS, JS, and HTML files
- **Compression**: Enable Gzip/Brotli compression on your server
- **CDN**: Use CDN for static assets
- **Caching**: Implement proper cache headers
- **Critical CSS**: Inline critical CSS above the fold
- **Remove unused CSS/JS**: Use tools like PurgeCSS

#### Accessibility (>90)
- **Semantic HTML**: Use proper heading hierarchy (h1, h2, h3...)
- **Alt text**: Add descriptive alt text to all images
- **ARIA labels**: Add proper ARIA labels to interactive elements
- **Color contrast**: Ensure sufficient color contrast (4.5:1 for normal text)
- **Keyboard navigation**: Ensure all interactive elements are keyboard accessible
- **Focus indicators**: Don't remove default focus styles

#### Best Practices (>90)
- **HTTPS**: Use HTTPS in production
- **Security headers**: Add security headers (CSP, HSTS, etc.)
- **No console errors**: Fix all JavaScript errors
- **Modern syntax**: Use modern, supported JavaScript syntax
- **Responsive images**: Use `srcset` for responsive images

#### SEO (>90)
- **Meta tags**: Add proper title, description, and Open Graph tags
- **Structured data**: Add JSON-LD structured data
- **Mobile-friendly**: Ensure responsive design
- **Page speed**: Optimize loading performance
- **Content**: Use semantic HTML and proper heading structure

### Quick Wins for Lighthouse

1. **Add image optimization**
   ```html
   <img src="image.jpg" alt="Description" loading="lazy" width="300" height="200">
   ```

2. **Enable compression** (add to server config)
   ```
   # Nginx example
   gzip on;
   gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   ```

3. **Add cache headers**
   ```
   Cache-Control: public, max-age=31536000
   ```

4. **Inline critical CSS**
   ```html
   <style>
     /* Critical CSS for above-the-fold content */
   </style>
   ```

5. **Add structured data**
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "LocalBusiness",
     "name": "Premium Technical Services",
     "description": "Property management and technical maintenance in Uruguay"
   }
   </script>
   ```

## License

[Add your license here]
