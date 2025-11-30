/**
 * Main Application Entry Point
 * Coordinates all components and handles global functionality
 */

// Performance optimization examples using debounce and throttle utilities
// These utilities are available from utils.js

/**
 * Example: Debounced window resize handler
 * Useful for expensive operations that should only run after resizing stops
 */
if (typeof debounce !== 'undefined') {
  const handleResize = debounce(() => {
    // Expensive resize operations here
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
  }, 250);
  
  // Uncomment to enable resize logging
  // window.addEventListener('resize', handleResize);
}

/**
 * Example: Throttled scroll handler
 * Useful for operations that should run periodically during scroll
 */
if (typeof throttle !== 'undefined') {
  const handleScroll = throttle(() => {
    // Scroll-based operations here
    const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    // console.log('Scroll progress:', scrollPercent.toFixed(2) + '%');
  }, 100);
  
  // Uncomment to enable scroll logging
  // window.addEventListener('scroll', handleScroll);
}

/**
 * Initialize application
 */
function initApp() {
  console.log('Webgency website initialized');
  
  // Check if all components are loaded
  const componentsLoaded = {
    navigation: typeof Navigation !== 'undefined',
    animations: typeof ScrollAnimations !== 'undefined',
    utils: typeof debounce !== 'undefined' && typeof throttle !== 'undefined'
  };
  
  console.log('Components loaded:', componentsLoaded);
  
  // Performance monitoring
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      const renderTime = perfData.domComplete - perfData.domLoading;
      
      console.log('Performance Metrics:');
      console.log('- Page Load Time:', pageLoadTime + 'ms');
      console.log('- Server Response Time:', connectTime + 'ms');
      console.log('- DOM Render Time:', renderTime + 'ms');
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/**
 * Accordion Functionality
 */
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const isActive = accordionItem.classList.contains('active');
      
      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        accordionItem.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
    
    // Keyboard accessibility
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });
}

// Initialize accordion when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccordion);
} else {
  initAccordion();
}
