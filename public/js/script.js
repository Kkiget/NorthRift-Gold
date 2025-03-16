// DOM Elements
const navLinks = document.querySelector('.nav-links');
const cartBtn = document.querySelector('.cart-btn');
const cartCount = document.querySelector('.cart-btn span');
const checkoutBtn = document.querySelector('.checkout-btn');

// Cart functionality
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function updateCartCount() {
    cartCount.textContent = cartItems.length;
}

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.product-card');
        const product = {
            name: card.querySelector('h3').textContent,
            price: card.querySelector('.product-price').textContent,
            image: card.querySelector('.product-img').src
        };
        
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartCount();
        
        // Show add to cart animation
        this.innerHTML = '<i class="fas fa-check"></i> Added';
        this.style.backgroundColor = '#2C5F2D';
        
        setTimeout(() => {
            this.innerHTML = 'Add to Cart';
            this.style.backgroundColor = '';
        }, 2000);
    });
});

// Cart button click handler
if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        if (cartItems.length > 0) {
            window.location.href = 'checkout.html';
        } else {
            alert('Your cart is empty. Add some products first!');
        }
    });
}

// Add checkout button click handler
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cartItems.length > 0) {
            window.location.href = 'checkout.html';
        } else {
            alert('Your cart is empty. Please add some products before checking out.');
        }
    });
}

// Initialize cart count
updateCartCount();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to a server
        console.log('Newsletter subscription:', email);
        
        // Show success message
        const button = this.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Subscribed!';
        button.style.backgroundColor = '#2C5F2D';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
            this.reset();
        }, 2000);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Animate products on scroll
const productObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.2s ease';
    productObserver.observe(card);
});

// Animate features on scroll
const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px) scale(0.95)';
    card.style.transition = 'all 0.5s ease';
    card.style.transitionDelay = `${index * 0.1}s`;
    featureObserver.observe(card);
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Header Background on Scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = 'var(--white)';
    }
});

// Add Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .feature-card, .about-img');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animation states
document.querySelectorAll('.product-card, .feature-card, .about-img').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.2s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

function updateQuantity(button, change) {
    const input = button.parentElement.querySelector('.quantity-input');
    let value = parseInt(input.value) + change;
    value = Math.max(1, Math.min(99, value)); // Ensure value is between 1 and 99
    input.value = value;
}

function validateQuantity(input) {
    let value = parseInt(input.value);
    if (isNaN(value) || value < 1) value = 1;
    if (value > 99) value = 99;
    input.value = value;
}

// Update addToCart function to include quantity
function addToCart(button) {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const price = productCard.querySelector('.product-price').textContent;
    const quantity = parseInt(productCard.querySelector('.quantity-input').value);
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Product added to cart!');
}

// Product filtering and search functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.querySelector('.search-box input');
    const productCards = document.querySelectorAll('.product-card');
    const productGrid = document.querySelector('.product-grid');

    function showCard(card) {
        card.style.display = 'block';
        requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        });
    }

    function hideCard(card) {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.display = 'none';
        }, 100);
    }

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
        
        productCards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.product-description').textContent.toLowerCase();
            const category = card.dataset.category;
            
            const matchesSearch = name.includes(searchTerm) || description.includes(searchTerm);
            const matchesCategory = activeCategory === 'all' || category === activeCategory;
            
            // Set initial styles for animation
            card.style.transition = 'all 0.15s ease-out';
            
            if (matchesSearch && matchesCategory) {
                showCard(card);
            } else {
                hideCard(card);
            }
        });

        // Update grid layout
        const columns = Math.max(1, Math.floor(productGrid.offsetWidth / 280));
        productGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    }

    // Category filter click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProducts();
        });
    });

    // Search input handler with minimal debouncing
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterProducts, 150);
    });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(filterProducts, 100);
    });

    // Initial filtering
    filterProducts();
}); 