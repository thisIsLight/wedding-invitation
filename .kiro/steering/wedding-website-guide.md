# Wedding Website Development Guide

## Project Overview
This is a wedding invitation website for Keerthana & Sahil's wedding on February 8, 2026, in Kolar.

## Project Structure

### HTML
- `index.html` - Main wedding invitation page with all sections

### CSS
- `css/reset.css` - CSS reset for consistent styling
- `css/variables.css` - CSS custom properties (colors, spacing, fonts)
- `css/layout.css` - Layout and grid systems
- `css/components.css` - Component-specific styles
- `css/animations.css` - Animation definitions
- `css/responsive.css` - Responsive design breakpoints

### JavaScript
- `js/utils.js` - Utility functions (debounce, throttle)
- `js/animations.js` - Scroll animations and viewport detection
- `js/navigation.js` - Navigation functionality
- `js/main.js` - Main application entry point and accordion functionality

### Assets
- `assets/images/` - All images for the website
  - `hero-image.jpeg` - Main hero section background
  - `event-image.jpeg` - Event timeline section background
  - `org-image.jpeg` - Organizational aspects section background
  - `decorative-line.webp` - Decorative divider
  - `dress-code-*.jpg` - Dress code example photos (to be added)

## Key Features

### 1. Hero Section
- Full-height section (758px) with background image
- Gradient overlay effect
- Wedding date and location
- Couple names in elegant cursive font
- Invitation message

### 2. Event Timeline
- Multiple timeline tables for different dates
- Accordion-style dropdowns
- Event times and locations
- Clean, organized layout

### 3. Event Image Section
- 758px height matching hero section
- Same gradient overlay effect
- Visual break between sections

### 4. Dress Code Section
- 4 accordion dropdowns: Haldi, Sangeet, Reception, Muhurtham
- Each contains:
  - Color palette swatches
  - Men's and women's attire guidelines
  - Polaroid-style photo examples
- Smooth expand/collapse animations

### 5. Organizational Aspects
- Contact information
- Image with overlay text
- Phone number and message

### 6. Location Section
- Embedded Google Maps
- Sri Nandhini Palace location
- Interactive map with directions

## Design System

### Typography
- **Beau Rivage** - Cursive font for names and titles
- **Rufina** - Serif font for body text and headings
- **Tangerine** - Cursive font for decorative elements

### Color Palette
Wedding theme colors:
- Beige: `#F5E6D3`
- Light Grey: `#E8E8E8`
- Champagne: `#D4C4B0`
- Grey: `#6B6B6B`
- Black: `#2C2C2C`

### Spacing
Uses CSS custom properties for consistent spacing:
- `--spacing-sm` through `--spacing-5xl`

### Image Heights
All major image sections use 758px height for consistency:
- Hero section
- Event image section
- Organizational image section

## Accordion Functionality

### JavaScript Implementation
The accordion is initialized in `js/main.js`:
- Click to expand/collapse
- Only one section open at a time
- Keyboard accessible (Enter/Space keys)
- Smooth animations

### CSS Classes
- `.accordion` - Container
- `.accordion-item` - Individual accordion item
- `.accordion-header` - Clickable header
- `.accordion-content` - Collapsible content
- `.active` - Applied to open items

## Development Guidelines

### Adding New Sections
1. Follow the existing section structure
2. Use semantic HTML5 elements
3. Apply consistent spacing with CSS variables
4. Ensure responsive design

### Image Guidelines
- Use appropriate formats (JPEG for photos, WebP for graphics)
- Optimize images for web
- Include alt text for accessibility
- Use lazy loading for below-the-fold images

### Responsive Design
- Mobile-first approach
- Breakpoint at 768px for desktop
- Max-width of 430px for mobile view
- Flexible layouts with flexbox/grid

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Alt text for images

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- CSS Custom Properties
- ES6+ JavaScript

## Deployment
The website is a static site that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Future Enhancements
- Add RSVP form functionality
- Photo gallery section
- Countdown timer to wedding date
- Guest message board
- Multi-language support

## Notes
- All major sections use consistent 758px height for visual harmony
- Accordion functionality requires JavaScript to be enabled
- Google Maps requires internet connection
- Fonts loaded from Google Fonts CDN
