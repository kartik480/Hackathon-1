// ============================================
// #PZN Clothes - E-Commerce JavaScript
// Full functionality for cart, wishlist, search, filters
// ============================================

// Product Database - Only Clothes/Fashion Items
const products = [
    {
        id: 1,
        name: 'Premium Cotton T-Shirt',
        description: '100% organic cotton, comfortable fit, multiple colors available',
        price: 899,
        originalPrice: 1299,
        category: 'fashion',
        rating: 4.5,
        reviews: 456,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&q=90&auto=format&ixlib=rb-4.0.3',
        inStock: true,
        featured: true
    },
    {
        id: 2,
        name: 'Denim Jacket',
        description: 'Classic denim jacket with modern fit',
        price: 2499,
        originalPrice: 2999,
        category: 'fashion',
        rating: 4.5,
        reviews: 289,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop&q=90&auto=format&ixlib=rb-4.0.3',
        inStock: true,
        featured: true
    },
    {
        id: 3,
        name: 'Slim Fit Jeans',
        description: 'Premium denim jeans with stretch fabric for comfort',
        price: 1899,
        originalPrice: 2499,
        category: 'fashion',
        rating: 4.6,
        reviews: 523,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&q=90&auto=format&ixlib=rb-4.0.3',
        inStock: true,
        featured: false
    },
    {
        id: 4,
        name: 'Casual Hoodie',
        description: 'Soft cotton blend hoodie with kangaroo pocket',
        price: 1599,
        originalPrice: 2199,
        category: 'fashion',
        rating: 4.4,
        reviews: 412,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&q=90&auto=format&ixlib=rb-4.0.3',
        inStock: true,
        featured: true
    },
    {
        id: 5,
        name: 'Formal Shirt',
        description: 'Classic white formal shirt with button-down collar',
        price: 1299,
        originalPrice: 1799,
        category: 'fashion',
        rating: 4.7,
        reviews: 345,
        image: 'https://ramrajcotton.in/cdn/shop/files/1_3e884584-7e7d-4589-b418-4f45b89a8e35.jpg?v=1717651164&width=1080',
        inStock: true,
        featured: false
    },
    {
        id: 6,
        name: 'Summer Dress',
        description: 'Lightweight floral summer dress with flowy silhouette',
        price: 1799,
        originalPrice: 2399,
        category: 'fashion',
        rating: 4.5,
        reviews: 567,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop&q=90&auto=format&ixlib=rb-4.0.3',
        inStock: true,
        featured: true
    },
    {
        id: 7,
        name: 'Leather Jacket',
        description: 'Genuine leather jacket with quilted lining',
        price: 2799,
        originalPrice: 3499,
        category: 'fashion',
        rating: 4.8,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop&q=90&auto=format&ixlib=rb-4.0.3',
        inStock: true,
        featured: true
    },
    {
        id: 8,
        name: 'Cargo Pants',
        description: 'Utility cargo pants with multiple pockets',
        price: 2199,
        originalPrice: 2799,
        category: 'fashion',
        rating: 4.3,
        reviews: 298,
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-khakicolor-colored-cargo-pants-hung-up-and-ready-to-be-worn-image_2519126.jpg',
        inStock: true,
        featured: false
    },
    {
        id: 9,
        name: 'Polo Shirt',
        description: 'Classic polo shirt in premium pique cotton',
        price: 1099,
        originalPrice: 1499,
        category: 'fashion',
        rating: 4.5,
        reviews: 445,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop&q=90&auto=format&ixlib=rb-4.0.3',
        inStock: true,
        featured: false
    },
    {
        id: 10,
        name: 'Sweater',
        description: 'Warm wool blend sweater for winter season',
        price: 1999,
        originalPrice: 2599,
        category: 'fashion',
        rating: 4.6,
        reviews: 389,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop&q=90&auto=format&ixlib=rb-4.0.3',
        inStock: true,
        featured: true
    },
    {
        id: 11,
        name: 'Chinos',
        description: 'Smart casual chinos in classic khaki',
        price: 1699,
        originalPrice: 2299,
        category: 'fashion',
        rating: 4.4,
        reviews: 312,
        image: 'https://t4.ftcdn.net/jpg/16/48/88/91/360_F_1648889156_tYYH2fUduV8VnamVLv3C7YaAxFD3hATU.jpg',
        inStock: true,
        featured: false
    },
    {
        id: 12,
        name: 'Blazer',
        description: 'Tailored blazer for formal occasions',
        price: 2699,
        originalPrice: 3299,
        category: 'fashion',
        rating: 4.7,
        reviews: 267,
        image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhemVyfGVufDB8fDB8fHww',
        inStock: true,
        featured: true
    },
    {
        id: 13,
        name: 'Tank Top',
        description: 'Comfortable cotton tank top for casual wear',
        price: 599,
        originalPrice: 899,
        category: 'fashion',
        rating: 4.3,
        reviews: 523,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&q=90&auto=format&ixlib=rb-4.0.3',
        inStock: true,
        featured: false
    },
    {
        id: 14,
        name: 'Trench Coat',
        description: 'Classic trench coat with water-resistant fabric',
        price: 2899,
        originalPrice: 3499,
        category: 'fashion',
        rating: 4.6,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop&q=90&auto=format&ixlib=rb-4.0.3',
        inStock: true,
        featured: true
    },
    {
        id: 15,
        name: 'Shorts',
        description: 'Comfortable cotton shorts for summer',
        price: 999,
        originalPrice: 1399,
        category: 'fashion',
        rating: 4.4,
        reviews: 456,
        image: 'https://images.pexels.com/photos/2463256/pexels-photo-2463256.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        inStock: true,
        featured: false
    },
    {
        id: 16,
        name: 'Kurti',
        description: 'Elegant traditional kurti with modern design',
        price: 1399,
        originalPrice: 1899,
        category: 'fashion',
        rating: 4.5,
        reviews: 678,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop&q=90&auto=format&ixlib=rb-4.0.3',
        inStock: true,
        featured: true
    }
];

// State Management
let cart = JSON.parse(localStorage.getItem('pznclothes_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('pznclothes_wishlist')) || [];
let filteredProducts = [...products];

// ============================================
// Utility Functions
// ============================================

function saveToLocalStorage() {
    localStorage.setItem('pznclothes_cart', JSON.stringify(cart));
    localStorage.setItem('pznclothes_wishlist', JSON.stringify(wishlist));
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// Cart Functions
// ============================================

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveToLocalStorage();
    updateCartUI();
    showToast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveToLocalStorage();
    updateCartUI();
    showToast('Item removed from cart');
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveToLocalStorage();
    updateCartUI();
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartUI() {
    const cartBadge = document.getElementById('cartBadge');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.textContent = formatPrice(0);
        return;
    }

    cartItems.innerHTML = cart.map(item => {
        // Get full product details to ensure we have the image
        const fullProduct = products.find(p => p.id === item.id);
        let productImage = '';
        
        if (fullProduct && fullProduct.image) {
            productImage = fullProduct.image;
        } else if (item.image) {
            productImage = item.image;
        } else {
            // Fallback to Unsplash clothing image
            productImage = `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop&q=90&auto=format&ixlib=rb-4.0.3`;
        }
        
        return `
        <div class="cart-item">
            <img src="${productImage}" alt="${item.name}" class="cart-item-image" 
                 onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop&q=90&auto=format&ixlib=rb-4.0.3';" 
                 loading="lazy"
                 style="width: 100px; height: 120px; object-fit: cover; border-radius: 4px;">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-actions">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `;
    }).join('');

    cartTotal.textContent = formatPrice(getCartTotal());
}

// ============================================
// Wishlist Functions
// ============================================

function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
  if (!product) return;

    const index = wishlist.findIndex(item => item.id === productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist');
    } else {
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
        showToast('Added to wishlist');
    }

    saveToLocalStorage();
  updateWishlistUI();
}

function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

function updateWishlistUI() {
    const wishlistBadge = document.getElementById('wishlistBadge');
    const wishlistItems = document.getElementById('wishlistItems');

    wishlistBadge.textContent = wishlist.length;
    wishlistBadge.style.display = wishlist.length > 0 ? 'flex' : 'none';

    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<div class="empty-wishlist">Your wishlist is empty</div>';
        return;
    }

    wishlistItems.innerHTML = wishlist.map(item => {
        // Get full product details to ensure we have the image
        const fullProduct = products.find(p => p.id === item.id);
        let productImage = '';
        
        if (fullProduct && fullProduct.image) {
            productImage = fullProduct.image;
        } else if (item.image) {
            productImage = item.image;
        } else {
            // Fallback to Unsplash clothing image
            productImage = `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop&q=90&auto=format&ixlib=rb-4.0.3`;
        }
        
        return `
        <div class="wishlist-item">
            <img src="${productImage}" alt="${item.name}" class="wishlist-item-image" 
                 onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop&q=90&auto=format&ixlib=rb-4.0.3';" 
                 loading="lazy"
                 style="width: 100px; height: 120px; object-fit: cover; border-radius: 4px;">
            <div class="wishlist-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <div class="wishlist-item-actions">
                <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.875rem;" onclick="addToCart(${item.id}); closeWishlistSidebar();">Add to Cart</button>
                <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.875rem;" onclick="toggleWishlist(${item.id})">Remove</button>
            </div>
      </div>
    `;
    }).join('');
}

// ============================================
// Product Rendering
// ============================================

function renderProducts(productsToRender = filteredProducts) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">No products found</div>';
    return;
  }
    
    // Clear existing content with fade out
    productsGrid.style.opacity = '0';
    productsGrid.style.transform = 'translateY(20px)';

    productsGrid.innerHTML = productsToRender.map((product, index) => {
        const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
        const inWishlist = isInWishlist(product.id);

        return `
            <div class="product-card" style="animation-delay: ${index * 0.05}s">
                ${discount > 0 ? `<div class="product-badge">-${discount}%</div>` : ''}
                <a href="product-detail.html?id=${product.id}" style="text-decoration: none; color: inherit;">
                    <div class="product-image-wrapper">
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-footer">
                            <div class="product-price">${formatPrice(product.price)}</div>
                            ${product.originalPrice ? `<div style="text-decoration: line-through; color: var(--text-light); font-size: 12px; margin-top: 5px;">${formatPrice(product.originalPrice)}</div>` : ''}
                        </div>
      </div>
                </a>
                <div class="product-actions">
                    <button class="btn-icon" onclick="event.preventDefault(); toggleWishlist(${product.id})" style="color: ${inWishlist ? 'var(--black)' : 'var(--text)'};">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </button>
                    <button class="btn-add-cart" onclick="event.preventDefault(); addToCart(${product.id})"><span>Add to Cart</span></button>
        </div>
      </div>
    `;
    }).join('');
    
    // Fade in new content
    setTimeout(() => {
        productsGrid.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        productsGrid.style.opacity = '1';
        productsGrid.style.transform = 'translateY(0)';
        
        // Re-initialize scroll animations for new products
        setTimeout(() => {
            initScrollAnimations();
            animateProducts();
        }, 100);
    }, 50);
}

function renderDeals() {
    const dealsGrid = document.getElementById('dealsGrid');
    if (!dealsGrid) return;

    const deals = products.filter(p => p.originalPrice && p.originalPrice > p.price).slice(0, 8);

    dealsGrid.innerHTML = deals.map(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        return `
            <div class="deal-card">
                <div class="deal-badge">-${discount}% OFF</div>
                <a href="product-detail.html?id=${product.id}" style="text-decoration: none; color: inherit; display: block;">
                    <div class="product-image-wrapper">
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description" style="display: block; font-size: 12px; color: var(--text); opacity: 0.7; margin: 10px 0;">${product.description}</p>
                        <div class="product-footer">
                            <div>
                                <div class="product-price">${formatPrice(product.price)}</div>
                                <div style="text-decoration: line-through; color: var(--text-light); font-size: 12px; margin-top: 5px;">${formatPrice(product.originalPrice)}</div>
                            </div>
                        </div>
                    </div>
                </a>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="event.preventDefault(); event.stopPropagation(); addToCart(${product.id})"><span>Buy Now</span></button>
                </div>
      </div>
    `;
    }).join('');
}

// ============================================
// Filtering & Sorting
// ============================================

function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const sortFilter = document.getElementById('sortFilter')?.value || 'default';
    const priceRange = document.getElementById('priceRange')?.value || 3000;

    // Filter by category
    let filtered = categoryFilter 
        ? products.filter(p => p.category === categoryFilter)
        : [...products];

    // Filter by price
    filtered = filtered.filter(p => p.price <= priceRange);

    // Sort
    switch (sortFilter) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filtered.sort((a, b) => b.id - a.id);
            break;
    }

    filteredProducts = filtered;
    renderProducts(filteredProducts);
}

// ============================================
// Search Functionality
// ============================================

function performSearch(query) {
    if (!query.trim()) {
        document.getElementById('searchResults').innerHTML = '';
        return;
    }

    const results = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    const searchResults = document.getElementById('searchResults');
    if (results.length === 0) {
        searchResults.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--text-light);">No results found</div>';
    return;
  }

    searchResults.innerHTML = results.map(product => `
        <div class="search-result-item" onclick="addToCart(${product.id}); closeSearchOverlay();">
            <img src="${product.image}" alt="${product.name}">
            <div>
                <div style="font-weight: 600;">${product.name}</div>
                <div style="color: var(--text-light); font-size: 0.9rem;">${formatPrice(product.price)}</div>
      </div>
        </div>
    `).join('');
}

// ============================================
// Sidebar Controls
// ============================================

function openCartSidebar() {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = '';
}

function openWishlistSidebar() {
    document.getElementById('wishlistSidebar').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWishlistSidebar() {
    document.getElementById('wishlistSidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = '';
}

function openSearchOverlay() {
    document.getElementById('searchOverlay').classList.add('active');
    document.getElementById('searchInput').focus();
}

function closeSearchOverlay() {
    document.getElementById('searchOverlay').classList.remove('active');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

// ============================================
// Checkout
// ============================================

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }

    showToast('Order placed successfully! Thank you for your purchase.', 'success');
    cart = [];
    saveToLocalStorage();
    updateCartUI();
    closeCartSidebar();
}

// ============================================
// Smooth Scroll Navigation
// ============================================

function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only prevent default and scroll if it's a hash link (starts with #)
            // Allow normal navigation for .html files
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                scrollToSection(targetId);

                // Update active state
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
            // If it's a .html file, let the browser handle normal navigation
        });
    });
}

// ============================================
// Event Listeners
// ============================================

// ============================================
// Scroll Animations
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe section headers
    document.querySelectorAll('.section-header').forEach(header => {
        observer.observe(header);
    });

    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// Parallax effect for hero
function initParallax() {
    const heroImage = document.querySelector('.hero:not(.hero-reverse) .hero-image img');
    if (!heroImage) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero:not(.hero-reverse)');
        if (!heroSection) return;
        
        const heroTop = heroSection.offsetTop;
        const heroHeight = heroSection.offsetHeight;
        
        if (scrolled < heroTop + heroHeight) {
            const parallax = scrolled * 0.5;
            heroImage.style.transform = `translateY(${parallax}px)`;
        }
    });
}

// Parallax effect for New Year Sale section
function initNewYearSaleParallax() {
    const newYearSaleImg = document.querySelector('.hero-reverse .parallax-img');
    if (!newYearSaleImg) return;
    
    // Disable parallax on mobile/tablet for better performance
    const isMobile = window.innerWidth <= 991;
    if (isMobile) {
        newYearSaleImg.style.transform = 'none';
        return;
    }
    
    let ticking = false;
    
    function updateParallax() {
        // Check if still on desktop
        if (window.innerWidth <= 991) {
            newYearSaleImg.style.transform = 'none';
            return;
        }
        
        const scrolled = window.pageYOffset || window.scrollY;
        const newYearSaleSection = document.getElementById('new-year-sale');
        if (!newYearSaleSection) return;
        
        const sectionTop = newYearSaleSection.offsetTop;
        const sectionHeight = newYearSaleSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate when section is in viewport
        const sectionBottom = sectionTop + sectionHeight;
        const isInView = scrolled + windowHeight > sectionTop && scrolled < sectionBottom;
        
        if (isInView) {
            // Calculate parallax offset - image moves slower than scroll
            const scrollProgress = scrolled - sectionTop;
            const parallaxOffset = scrollProgress * 0.3; // 0.3 = parallax speed (slower than scroll)
            newYearSaleImg.style.transform = `translateY(${parallaxOffset}px)`;
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
    
    // Re-check on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 991) {
            newYearSaleImg.style.transform = 'none';
        }
    }, { passive: true });
}

// Smooth reveal animation for products
function animateProducts() {
    const products = document.querySelectorAll('.product-card');
    products.forEach((product, index) => {
        product.style.animationDelay = `${index * 0.05}s`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI
    updateCartUI();
  updateWishlistUI();

    // Only render products/deals if on index.html
    if (document.getElementById('productsGrid') && window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        renderProducts();
    }
    if (document.getElementById('dealsGrid') && (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/'))) {
        renderDeals();
    }
    
    // Only setup smooth scroll navigation for hash links on index page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        setupNavigation();
    }
    
    // Initialize animations
    setTimeout(() => {
        initScrollAnimations();
        initNavbarScroll();
        initParallax();
        initNewYearSaleParallax();
        animateProducts();
    }, 100);

    // Cart button - only if it's a button, not a link
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn && cartBtn.tagName === 'BUTTON') {
        cartBtn.addEventListener('click', openCartSidebar);
    }
    const closeCart = document.getElementById('closeCart');
    if (closeCart) {
        closeCart.addEventListener('click', closeCartSidebar);
    }
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    // Wishlist button
    const wishlistBtn = document.getElementById('wishlistBtn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', openWishlistSidebar);
    }
    const closeWishlist = document.getElementById('closeWishlist');
    if (closeWishlist) {
        closeWishlist.addEventListener('click', closeWishlistSidebar);
    }

    // Search
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', openSearchOverlay);
    }
    const closeSearch = document.getElementById('closeSearch');
    if (closeSearch) {
        closeSearch.addEventListener('click', closeSearchOverlay);
    }
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }

    // Overlay click to close
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            closeCartSidebar();
            closeWishlistSidebar();
        });
    }

    // Filters - only on products page
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
  const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }

    if (sortFilter) {
        sortFilter.addEventListener('change', filterProducts);
    }

    if (priceRange && priceValue) {
        priceRange.addEventListener('input', (e) => {
            priceValue.textContent = `₹0 - ₹${parseInt(e.target.value).toLocaleString('en-IN')}`;
            filterProducts();
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
        });
    }

    // Close search on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSearchOverlay();
        }
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking on a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.toggleWishlist = toggleWishlist;
window.scrollToSection = scrollToSection;
window.closeCartSidebar = closeCartSidebar;
window.closeWishlistSidebar = closeWishlistSidebar;
window.closeSearchOverlay = closeSearchOverlay;
