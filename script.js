  // Smooth scroll for anchor links
  document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.scroll-link');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});

// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate hero section immediately
    setTimeout(function() {
        document.querySelector('.hero-content').classList.add('animated');
        document.querySelector('.hero-image').classList.add('animated');
    }, 300);
    
    // Set up scroll animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('product')) {
                    // Stagger the animation of products
                    const products = document.querySelectorAll('.product');
                    products.forEach((product, index) => {
                        setTimeout(() => {
                            product.classList.add('animated');
                        }, index * 200);
                    });
                } else if (entry.target.classList.contains('testimonial')) {
                    // Stagger the animation of testimonials
                    const testimonials = document.querySelectorAll('.testimonial');
                    testimonials.forEach((testimonial, index) => {
                        setTimeout(() => {
                            testimonial.classList.add('animated');
                        }, index * 200);
                    });
                } else {
                    // Regular animation for other elements
                    entry.target.classList.add('animated');
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Elements to observe
    const elements = [
        '.featured h2',
        '.product',
        '.testimonials h2',
        '.testimonial',
        '.newsletter h2',
        '.newsletter p',
        'form',
        '.footer-content',
        '.copyright'
    ];
    
    elements.forEach(selector => {
        const items = document.querySelectorAll(selector);
        items.forEach(item => {
            observer.observe(item);
        });
    });
});

// Parallax scroll effect
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    
    // Parallax for hero section
    const heroSection = document.querySelector('.hero');
    if (scrollPosition < heroSection.offsetHeight) {
        heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
    
    // Subtle movement for featured products section
    const featuredSection = document.querySelector('.featured');
    const featuredOffset = featuredSection.offsetTop;
    if (scrollPosition > featuredOffset - window.innerHeight && 
        scrollPosition < featuredOffset + featuredSection.offsetHeight) {
        const products = document.querySelectorAll('.product');
        products.forEach((product, index) => {
            const speed = 0.05 + (index * 0.01);
            const yPos = (scrollPosition - featuredOffset) * speed;
            product.style.transform = `translateY(${yPos}px)`;
        });
    }
});

// Add this JavaScript to your existing script
document.addEventListener('DOMContentLoaded', function() {
    // Get all section dividers
    const dividers = document.querySelectorAll('.section-divider');
    
    // Set up scroll animation for waves
    window.addEventListener('scroll', function() {
      dividers.forEach(divider => {
        const dividerPosition = divider.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Calculate how far the divider is from entering/exiting the viewport
        const scrollProgress = (windowHeight - dividerPosition) / windowHeight;
        
        // Apply transform effect when divider is in view
        if (scrollProgress > 0 && scrollProgress < 1) {
          const wave = divider.querySelector('.wave');
          const moveAmount = scrollProgress * 100 - 50; // Range from -50 to 50
          wave.style.transform = `translateX(${moveAmount}px) translateY(${scrollProgress * 10}px)`;
        }
      });
    });
  });