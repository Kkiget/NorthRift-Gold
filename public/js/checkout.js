// Get DOM elements
const cartItemsContainer = document.getElementById('cart-items-container');
const subtotalElement = document.getElementById('subtotal');
const shippingElement = document.getElementById('shipping');
const totalElement = document.getElementById('total');
const placeOrderBtn = document.getElementById('place-order');
const paymentMethods = document.querySelectorAll('input[name="payment"]');
const mpesaDetails = document.getElementById('mpesa-details');
const cardDetails = document.getElementById('card-details');
const checkoutSteps = document.querySelectorAll('.step');

// Get cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Format currency
function formatCurrency(amount) {
    return `Ksh ${amount.toLocaleString('en-KE')}`;
}

// Calculate totals
function calculateTotals() {
    const subtotal = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        const quantity = item.quantity || 1;
        return total + (price * quantity);
    }, 0);
    
    const shipping = subtotal > 5000 ? 0 : 200; // Free shipping for orders over 5000
    const total = subtotal + shipping;
    
    subtotalElement.textContent = formatCurrency(subtotal);
    shippingElement.textContent = shipping === 0 ? 'FREE' : formatCurrency(shipping);
    totalElement.textContent = formatCurrency(total);

    // Update shipping message
    if (shipping === 0) {
        shippingElement.insertAdjacentHTML('afterend', 
            '<div class="free-shipping-message">✓ Eligible for FREE Shipping</div>');
    }
}

// Render cart items
function renderCartItems() {
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <a href="products.html" class="continue-shopping">Continue Shopping</a>
            </div>`;
        placeOrderBtn.disabled = true;
        placeOrderBtn.style.opacity = '0.5';
        return;
    }

    cartItemsContainer.innerHTML = cartItems.map((item, index) => `
        <div class="cart-item" data-index="${index}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-price">${item.price}</div>
                <div class="cart-item-quantity">
                    <select onchange="updateQuantity(${index}, this.value)">
                        ${[1,2,3,4,5,6,7,8,9,10].map(num => 
                            `<option value="${num}" ${(item.quantity || 1) === num ? 'selected' : ''}>
                                ${num}
                            </option>`
                        ).join('')}
                    </select>
                    <button onclick="removeItem(${index})" class="remove-item">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    calculateTotals();
}

// Update item quantity
function updateQuantity(index, quantity) {
    cartItems[index].quantity = parseInt(quantity);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    calculateTotals();
}

// Remove item from cart
function removeItem(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCartItems();
}

// Add transition effect for payment details
mpesaDetails.style.transition = 'all 0.3s ease';
cardDetails.style.transition = 'all 0.3s ease';

// Highlight selected payment method
paymentMethods.forEach(method => {
    method.addEventListener('change', () => {
        paymentMethods.forEach(m => {
            const label = m.parentElement;
            if (label) {
                label.classList.remove('selected-payment');
            }
        });
        const selectedLabel = method.parentElement;
        selectedLabel.classList.add('selected-payment');

        // Clear previous validation errors
        const allPaymentInputs = document.querySelectorAll('#mpesa-details input, #card-details input');
        allPaymentInputs.forEach(input => {
            input.value = '';
            input.classList.remove('error');
            const errorDiv = input.nextElementSibling;
            if (errorDiv && errorDiv.classList.contains('error-message')) {
                errorDiv.style.display = 'none';
            }
        });

        // Hide all payment details sections first
        mpesaDetails.style.display = 'none';
        cardDetails.style.display = 'none';

        if (method.value === 'mpesa') {
            // Show M-Pesa details and hide card details
            mpesaDetails.style.display = 'block';
            cardDetails.style.display = 'none';
            
            // Make M-Pesa number required and remove required from card fields
            document.getElementById('mpesaNumber').setAttribute('required', '');
            document.querySelectorAll('#card-details input').forEach(input => {
                input.removeAttribute('required');
            });
        } else {
            // Show card details and hide M-Pesa details
            mpesaDetails.style.display = 'none';
            cardDetails.style.display = 'block';
            
            // Make card fields required and remove required from M-Pesa number
            document.getElementById('mpesaNumber').removeAttribute('required');
            document.querySelectorAll('#card-details input').forEach(input => {
                input.setAttribute('required', '');
            });
        }
    });
});

// Add real-time validation feedback
function addValidationListeners() {
    const inputs = document.querySelectorAll('input[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
}

function validateField(input) {
    const value = input.value.trim();
    const errorDiv = input.nextElementSibling?.classList.contains('error-message') 
        ? input.nextElementSibling 
        : document.createElement('div');
    
    if (!errorDiv.classList.contains('error-message')) {
        errorDiv.className = 'error-message';
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }

    let isValid = true;
    let errorMessage = '';

    if (!value) {
        isValid = false;
        errorMessage = 'This field is required';
    } else {
        switch (input.id) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;
            case 'phone':
                const phoneRegex = /^(?:\+254|0)[17]\d{8}$/;
                if (!phoneRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid phone number';
                }
                break;
            case 'zipCode':
                const zipRegex = /^\d{5}$/;
                if (!zipRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid 5-digit ZIP code';
                }
                break;
        }
    }

    if (!isValid) {
        input.classList.add('error');
        errorDiv.textContent = errorMessage;
        errorDiv.style.display = 'block';
    } else {
        input.classList.remove('error');
        errorDiv.style.display = 'none';
    }

    return isValid;
}

function validateForm() {
    const inputs = document.querySelectorAll('input[required]');
    let isValid = true;

    // Validate required fields
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    // Validate only the selected payment method's details
    const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
    if (selectedPayment === 'mpesa') {
        const mpesaNumber = document.getElementById('mpesaNumber');
        if (!mpesaNumber.value.trim()) {
            if (!validateField(mpesaNumber)) {
                isValid = false;
            }
        }
    } else {
        // For card payment, validate card fields
        const cardFields = ['cardNumber', 'expiryDate', 'cvv'];
        cardFields.forEach(field => {
            const input = document.getElementById(field);
            if (!input.value.trim()) {
                if (!validateField(input)) {
                    isValid = false;
                }
            }
        });
    }

    return isValid;
}

// Handle form submission
placeOrderBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
        // Scroll to first error
        const firstError = document.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    // Show loading state
    placeOrderBtn.disabled = true;
    placeOrderBtn.innerHTML = `
        <div class="loading-spinner"></div>
        <span>Processing your order...</span>
    `;

    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'order-success';
        successMessage.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <h2>Order Placed Successfully!</h2>
                <p>Thank you for shopping with us.</p>
                <p>Your order number is: #${Math.floor(Math.random() * 1000000)}</p>
                <a href="index.html" class="continue-shopping">Return to Home</a>
            </div>
        `;
        document.querySelector('.checkout-content').innerHTML = '';
        document.querySelector('.checkout-content').appendChild(successMessage);

        // Clear cart
        localStorage.removeItem('cartItems');
        cartItems = [];
    } catch (error) {
        placeOrderBtn.disabled = false;
        placeOrderBtn.innerHTML = '<i class="fas fa-lock"></i> Place your order';
        alert('An error occurred while processing your order. Please try again.');
    }
});

// Initialize page
renderCartItems();
addValidationListeners(); 