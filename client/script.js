/* ============================================================
   AURUM NOIR — Luxury Perfume Brand
   script.js — Core JavaScript
   ============================================================ */

// ============================================================
// PRODUCT DATA
// ============================================================
const PRODUCTS = [
  {
    id: 1,
    name: "Oud Imperiale",
    subtitle: "The Emperor's Wood",
    category: "Oriental",
    price: 320,
    originalPrice: 420,
    size: "100ml",
    emoji: "🏺",
    badge: "Bestseller",
    notes: ["Oud", "Amber", "Sandalwood", "Musk", "Vetiver"],
    description: "A commanding blend of rare Oud from the forests of Cambodia, infused with warm amber resins and aged sandalwood. An olfactory journey to ancient royal courts.",
    concentration: "Extrait de Parfum",
    longevity: "12–16 hours",
    sillage: "Enormous",
    season: "Autumn / Winter",
    gender: "Unisex",
    rating: 4.9,
    reviews: 284,
    inStock: true,
    collection: "Imperial"
  },
  {
    id: 2,
    name: "Rose Noire",
    subtitle: "Midnight Bloom",
    category: "Floral",
    price: 240,
    originalPrice: null,
    size: "75ml",
    emoji: "🥀",
    badge: null,
    notes: ["Black Rose", "Patchouli", "Bergamot", "Oud", "White Musk"],
    description: "A rare Bulgarian rose captured at midnight, when its essence is most potent. Dark, voluptuous, unapologetically feminine — yet with a shadowed, smoky heart.",
    concentration: "Eau de Parfum",
    longevity: "10–14 hours",
    sillage: "Moderate – Heavy",
    season: "All Seasons",
    gender: "Feminine",
    rating: 4.8,
    reviews: 196,
    inStock: true,
    collection: "Noir"
  },
  {
    id: 3,
    name: "Santal Sacré",
    subtitle: "Sacred Rituals",
    category: "Woody",
    price: 285,
    originalPrice: 350,
    size: "100ml",
    emoji: "🌿",
    badge: "Limited",
    notes: ["Mysore Sandalwood", "Cardamom", "Vanilla", "White Cedar", "Iris"],
    description: "Sourced from the last ethical sandalwood harvest in Mysore, this meditative fragrance honors ancient temple rituals with creamy, warm serenity.",
    concentration: "Parfum",
    longevity: "14–18 hours",
    sillage: "Moderate",
    season: "Year Round",
    gender: "Unisex",
    rating: 4.7,
    reviews: 143,
    inStock: true,
    collection: "Sacred"
  },
  {
    id: 4,
    name: "Aqua Regalis",
    subtitle: "Waters of Kings",
    category: "Fresh",
    price: 195,
    originalPrice: null,
    size: "75ml",
    emoji: "💎",
    badge: null,
    notes: ["Neroli", "Grapefruit", "Sea Salt", "Ambergris", "Cedar"],
    description: "A crisp royal aquatic — not the ocean's wildness, but the refined stillness of a marble fountain in a Mediterranean palace at dawn.",
    concentration: "Eau de Parfum",
    longevity: "8–10 hours",
    sillage: "Light – Moderate",
    season: "Spring / Summer",
    gender: "Masculine",
    rating: 4.6,
    reviews: 211,
    inStock: true,
    collection: "Royal"
  },
  {
    id: 5,
    name: "Encens Mystique",
    subtitle: "Smoke & Spirit",
    category: "Oriental",
    price: 310,
    originalPrice: null,
    size: "100ml",
    emoji: "🕯️",
    badge: "New",
    notes: ["Frankincense", "Labdanum", "Black Pepper", "Leather", "Benzoin"],
    description: "Burning frankincense in a medieval stone cathedral. The smoke rises, carrying prayers skyward. Dark, sacred, and unforgettable.",
    concentration: "Extrait de Parfum",
    longevity: "16–20 hours",
    sillage: "Heavy",
    season: "Autumn / Winter",
    gender: "Unisex",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    collection: "Mystique"
  },
  {
    id: 6,
    name: "Jardin Perdu",
    subtitle: "The Lost Garden",
    category: "Floral",
    price: 220,
    originalPrice: 270,
    size: "75ml",
    emoji: "🌸",
    badge: null,
    notes: ["Tuberose", "Jasmine", "Peach", "Green Leaves", "Musk"],
    description: "Overgrown and forgotten — a garden where jasmine and tuberose bloom wild, untamed by human hands. Lush, intoxicating, alive.",
    concentration: "Eau de Parfum",
    longevity: "8–12 hours",
    sillage: "Moderate",
    season: "Spring / Summer",
    gender: "Feminine",
    rating: 4.5,
    reviews: 167,
    inStock: true,
    collection: "Jardin"
  },
  {
    id: 7,
    name: "Tabac Doré",
    subtitle: "Golden Leaf",
    category: "Aromatic",
    price: 265,
    originalPrice: null,
    size: "100ml",
    emoji: "🍂",
    badge: null,
    notes: ["Virginia Tobacco", "Honey", "Dark Rum", "Leather", "Vanilla"],
    description: "Virginia tobacco cured in the finest rum barrels, laced with honeyed leather. A gentleman's companion for contemplative evenings.",
    concentration: "Eau de Parfum",
    longevity: "10–14 hours",
    sillage: "Moderate – Heavy",
    season: "Autumn / Winter",
    gender: "Masculine",
    rating: 4.7,
    reviews: 134,
    inStock: true,
    collection: "Doré"
  },
  {
    id: 8,
    name: "Iris Absolut",
    subtitle: "Powdered Elegance",
    category: "Chypre",
    price: 380,
    originalPrice: null,
    size: "50ml",
    emoji: "💜",
    badge: "Exclusive",
    notes: ["Orris Root", "Violet", "Vetiver", "Ambrette", "Suede"],
    description: "Three-year macerated orris root from Florence — the costliest natural ingredient in perfumery. Powdery, noble, and timeless beyond compare.",
    concentration: "Parfum",
    longevity: "12–16 hours",
    sillage: "Intimate",
    season: "Year Round",
    gender: "Unisex",
    rating: 5.0,
    reviews: 57,
    inStock: false,
    collection: "Absolut"
  }
];

// ============================================================
// CART MANAGEMENT
// ============================================================
const Cart = {
  // Get cart from localStorage
  get() {
    try {
      return JSON.parse(localStorage.getItem('aurum_cart') || '[]');
    } catch {
      return [];
    }
  },

  // Save cart to localStorage
  save(cart) {
    localStorage.setItem('aurum_cart', JSON.stringify(cart));
    this.updateUI();
  },

  // Add item to cart
  add(productId, size = '100ml', qty = 1) {
    const cart = this.get();
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return false;

    const key = `${productId}-${size}`;
    const existing = cart.find(item => item.key === key);

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        key,
        id: productId,
        name: product.name,
        subtitle: product.subtitle,
        category: product.category,
        price: product.price,
        emoji: product.emoji,
        size,
        qty
      });
    }

    this.save(cart);
    showToast(`${product.name} added to cart`);
    return true;
  },

  // Remove item from cart
  remove(key) {
    const cart = this.get().filter(item => item.key !== key);
    this.save(cart);
  },

  // Update quantity
  updateQty(key, qty) {
    const cart = this.get();
    const item = cart.find(i => i.key === key);
    if (item) {
      if (qty <= 0) {
        this.remove(key);
        return;
      }
      item.qty = qty;
      this.save(cart);
    }
  },

  // Get total item count
  count() {
    return this.get().reduce((sum, item) => sum + item.qty, 0);
  },

  // Get subtotal
  subtotal() {
    return this.get().reduce((sum, item) => sum + (item.price * item.qty), 0);
  },

  // Clear cart
  clear() {
    localStorage.removeItem('aurum_cart');
    this.updateUI();
  },

  // Update cart count badge in nav
  updateUI() {
    const count = this.count();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function showToast(message, duration = 3000) {
  let toast = document.getElementById('toast');

  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span style="color:var(--gold);margin-right:.5rem">✦</span> ${message}`;
  toast.classList.add('show');

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

// ============================================================
// NAVIGATION — Scroll effect & active link
// ============================================================
function initNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // Mark active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Update cart count
  Cart.updateUI();

  // Mobile menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '70px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(10,10,10,0.98)';
      navLinks.style.padding = '2rem';
      navLinks.style.borderBottom = '1px solid #2a2a2a';
    });
  }
}

// ============================================================
// PRODUCT CARD RENDERER
// ============================================================
function renderProductCard(product, showQuickView = true) {
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="card-img-wrap">
        <div class="card-img">${product.emoji}</div>
        ${product.badge ? `<div class="card-badge">${product.badge}</div>` : ''}
        ${showQuickView ? `
        <div class="card-overlay">
          <a href="product.html?id=${product.id}" class="btn btn-outline">
            <span>View Details</span>
          </a>
        </div>` : ''}
      </div>
      <div class="card-body">
        <span class="card-category">${product.category}</span>
        <div class="card-name">${product.name}</div>
        <div class="card-notes">${product.notes.slice(0, 3).join(' · ')}</div>
        <div class="card-footer">
          <div class="card-price">
            $${product.price}
            <sub>${product.size}</sub>
          </div>
          <button
            class="card-add"
            onclick="event.stopPropagation(); Cart.add(${product.id})"
            title="Add to cart"
            ${!product.inStock ? 'disabled style="opacity:0.4;cursor:not-allowed"' : ''}
          >+</button>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// HOME PAGE
// ============================================================
function initHome() {
  // Featured products (first 4)
  const grid = document.getElementById('featured-grid');
  if (grid) {
    const featured = PRODUCTS.filter(p => p.inStock).slice(0, 4);
    grid.innerHTML = featured.map(p => renderProductCard(p)).join('');

    // Click on card goes to product page
    grid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('button') && !e.target.closest('a')) {
          window.location.href = `product.html?id=${card.dataset.id}`;
        }
      });
    });
  }

  // Animate stats on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    observer.observe(el);
  });
}

// ============================================================
// SHOP PAGE
// ============================================================
function initShop() {
  const grid = document.getElementById('shop-grid');
  const countEl = document.getElementById('product-count');
  const sortEl = document.getElementById('sort-select');

  if (!grid) return;

  let currentProducts = [...PRODUCTS];

  function render() {
    grid.innerHTML = currentProducts.map(p => renderProductCard(p)).join('');
    if (countEl) countEl.textContent = `${currentProducts.length} Products`;

    // Animate in
    grid.querySelectorAll('.product-card').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`;
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 50);
    });

    // Click to product page
    grid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('button') && !e.target.closest('a')) {
          window.location.href = `product.html?id=${card.dataset.id}`;
        }
      });
    });
  }

  // Sort handler
  if (sortEl) {
    sortEl.addEventListener('change', () => {
      switch (sortEl.value) {
        case 'price-asc':
          currentProducts.sort((a, b) => a.price - b.price); break;
        case 'price-desc':
          currentProducts.sort((a, b) => b.price - a.price); break;
        case 'rating':
          currentProducts.sort((a, b) => b.rating - a.rating); break;
        case 'name':
          currentProducts.sort((a, b) => a.name.localeCompare(b.name)); break;
        default:
          currentProducts = [...PRODUCTS]; break;
      }
      render();
    });
  }

  // Filter by category
  document.querySelectorAll('.filter-category').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selected = [...document.querySelectorAll('.filter-category:checked')].map(c => c.value);
      if (selected.length === 0) {
        currentProducts = [...PRODUCTS];
      } else {
        currentProducts = PRODUCTS.filter(p => selected.includes(p.category));
      }
      render();
    });
  });

  // Price range filter
  const priceSlider = document.getElementById('price-range');
  const priceDisplay = document.getElementById('price-display');
  if (priceSlider) {
    priceSlider.addEventListener('input', () => {
      const max = parseInt(priceSlider.value);
      if (priceDisplay) priceDisplay.textContent = `$0 – $${max}`;
      currentProducts = PRODUCTS.filter(p => p.price <= max);
      render();
    });
  }

  render();
}

// ============================================================
// PRODUCT DETAIL PAGE
// ============================================================
function initProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  // Populate fields
  const setEl = (sel, val) => {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = val;
  };

  setEl('#product-emoji', product.emoji);
  setEl('#product-category', product.category);
  setEl('#product-name', product.name);
  setEl('#product-subtitle', product.subtitle);
  setEl('#product-price', `$${product.price}`);
  setEl('#product-original', product.originalPrice ? `$${product.originalPrice}` : '');
  setEl('#product-desc', product.description);
  setEl('#product-concentration', product.concentration);
  setEl('#product-longevity', product.longevity);
  setEl('#product-sillage', product.sillage);
  setEl('#product-season', product.season);
  setEl('#product-gender', product.gender);

  // Rating
  const stars = Math.round(product.rating);
  setEl('#product-stars', '★'.repeat(stars) + '☆'.repeat(5 - stars));
  setEl('#product-rating-count', `(${product.reviews} reviews)`);

  // Notes
  const notesEl = document.querySelector('#product-notes');
  if (notesEl) {
    notesEl.innerHTML = product.notes.map(n => `<span class="note-tag">${n}</span>`).join('');
  }

  // Page title
  document.title = `${product.name} — Aurum Noir`;

  // Quantity controls
  let qty = 1;
  const qtyEl = document.getElementById('qty-display');

  document.getElementById('qty-minus')?.addEventListener('click', () => {
    if (qty > 1) { qty--; if (qtyEl) qtyEl.textContent = qty; }
  });

  document.getElementById('qty-plus')?.addEventListener('click', () => {
    qty++;
    if (qtyEl) qtyEl.textContent = qty;
  });

  // Size selection
  let selectedSize = product.size;
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.dataset.size;
    });
  });

  // Add to cart
  document.getElementById('add-to-cart')?.addEventListener('click', () => {
    Cart.add(product.id, selectedSize, qty);
  });

  // Buy now
  document.getElementById('buy-now')?.addEventListener('click', () => {
    Cart.add(product.id, selectedSize, qty);
    setTimeout(() => window.location.href = 'cart.html', 300);
  });

  // Related products
  const relatedGrid = document.getElementById('related-grid');
  if (relatedGrid) {
    const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);
    const fallback = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
    const toShow = related.length >= 2 ? related : fallback;
    relatedGrid.innerHTML = toShow.map(p => renderProductCard(p)).join('');

    relatedGrid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('button') && !e.target.closest('a')) {
          window.location.href = `product.html?id=${card.dataset.id}`;
        }
      });
    });
  }

  // Out of stock handling
  if (!product.inStock) {
    const addBtn = document.getElementById('add-to-cart');
    const buyBtn = document.getElementById('buy-now');
    if (addBtn) { addBtn.textContent = 'Out of Stock'; addBtn.disabled = true; addBtn.style.opacity = '0.5'; }
    if (buyBtn) { buyBtn.style.display = 'none'; }
  }
}

// ============================================================
// CART PAGE
// ============================================================
function initCart() {
  const container = document.getElementById('cart-container');
  const summaryContainer = document.getElementById('cart-summary-wrap');
  if (!container) return;

  function render() {
    const cart = Cart.get();

    if (cart.length === 0) {
      container.innerHTML = `
        <div class="empty-cart">
          <div class="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Discover our curated collection of luxury fragrances.</p>
          <a href="shop.html" class="btn btn-gold"><span>Explore Shop</span></a>
        </div>
      `;
      if (summaryContainer) summaryContainer.style.display = 'none';
      return;
    }

    if (summaryContainer) summaryContainer.style.display = 'block';

    const subtotal = Cart.subtotal();
    const shipping = subtotal > 300 ? 0 : 25;
    const tax = Math.round(subtotal * 0.08);
    const total = subtotal + shipping + tax;

    // Cart items
    const itemsHTML = cart.map(item => `
      <div class="cart-item" data-key="${item.key}">
        <div class="cart-item-info">
          <div class="cart-item-img">${item.emoji}</div>
          <div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-detail">${item.category} · ${item.size}</div>
          </div>
        </div>
        <div class="cart-item-price">$${item.price}</div>
        <div class="cart-qty-wrap">
          <button class="qty-btn" onclick="Cart.updateQty('${item.key}', ${item.qty - 1}); initCart()">−</button>
          <div class="qty-display">${item.qty}</div>
          <button class="qty-btn" onclick="Cart.updateQty('${item.key}', ${item.qty + 1}); initCart()">+</button>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between">
          <span style="font-family:var(--font-serif);font-size:1.2rem;color:var(--gold)">$${(item.price * item.qty).toFixed(0)}</span>
          <button class="cart-remove" onclick="Cart.remove('${item.key}'); initCart()" title="Remove">✕</button>
        </div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="cart-header-row">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </div>
      ${itemsHTML}
    `;

    // Update summary
    const summaryTotals = document.getElementById('summary-subtotal');
    const summaryShip = document.getElementById('summary-shipping');
    const summaryTax = document.getElementById('summary-tax');
    const summaryTotal = document.getElementById('summary-total');

    if (summaryTotals) summaryTotals.textContent = `$${subtotal}`;
    if (summaryShip) summaryShip.textContent = shipping === 0 ? 'Free' : `$${shipping}`;
    if (summaryTax) summaryTax.textContent = `$${tax}`;
    if (summaryTotal) summaryTotal.textContent = `$${total}`;
  }

  render();

  // Promo code
  document.getElementById('promo-apply')?.addEventListener('click', () => {
    const code = document.getElementById('promo-code')?.value?.toUpperCase();
    if (code === 'AURUM10') {
      showToast('Promo code applied! 10% discount added.');
    } else {
      showToast('Invalid promo code. Try AURUM10');
    }
  });
}

// ============================================================
// LOGIN PAGE
// ============================================================
function initAuth() {
  const tabs = document.querySelectorAll('.auth-tab');
  const forms = document.querySelectorAll('.auth-form');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      tabs.forEach(t => t.classList.remove('active'));
      forms.forEach(f => f.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });

  // Form submission (demo only)
  document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Welcome back to Aurum Noir ✦');
    setTimeout(() => window.location.href = 'index.html', 1500);
  });

  document.getElementById('signup-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Account created successfully ✦');
    setTimeout(() => window.location.href = 'index.html', 1500);
  });
}

// ============================================================
// CHECKOUT PAGE
// ============================================================
function initCheckout() {
  // Populate order items from cart
  const orderItemsEl = document.getElementById('checkout-order-items');
  const cart = Cart.get();

  if (orderItemsEl) {
    if (cart.length === 0) {
      orderItemsEl.innerHTML = '<p style="color:var(--muted);font-size:.82rem">Your cart is empty</p>';
    } else {
      orderItemsEl.innerHTML = cart.map(item => `
        <div class="order-item">
          <div class="order-item-img">${item.emoji}</div>
          <div>
            <div class="order-item-name">${item.name}</div>
            <div class="order-item-detail">${item.size} · Qty: ${item.qty}</div>
          </div>
          <div class="order-item-price">$${item.price * item.qty}</div>
        </div>
      `).join('');
    }
  }

  // Populate order totals
  const subtotal = Cart.subtotal();
  const shipping = subtotal > 300 ? 0 : 25;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl('co-subtotal', `$${subtotal}`);
  setEl('co-shipping', shipping === 0 ? 'Free' : `$${shipping}`);
  setEl('co-tax', `$${tax}`);
  setEl('co-total', `$${total}`);

  // Payment method toggle
  document.querySelectorAll('.payment-method').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Card number formatting
  const cardInput = document.getElementById('card-number');
  const cardPreviewNum = document.getElementById('card-preview-num');
  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 16);
      val = val.replace(/(.{4})/g, '$1 ').trim();
      e.target.value = val;
      if (cardPreviewNum) cardPreviewNum.textContent = val || '•••• •••• •••• ••••';
    });
  }

  // Card name
  const cardNameInput = document.getElementById('card-name');
  const cardPreviewName = document.getElementById('card-preview-name');
  if (cardNameInput && cardPreviewName) {
    cardNameInput.addEventListener('input', () => {
      cardPreviewName.textContent = cardNameInput.value.toUpperCase() || 'CARDHOLDER NAME';
    });
  }

  // Place order
  document.getElementById('place-order')?.addEventListener('click', () => {
    // Generate order ID
    const orderId = 'AN-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    localStorage.setItem('aurum_last_order', orderId);
    Cart.clear();
    showToast('Order placed successfully! ✦');
    setTimeout(() => window.location.href = 'tracking.html', 1500);
  });

  // Checkout steps
  document.querySelectorAll('.step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = parseInt(btn.dataset.step);
      document.querySelectorAll('.step').forEach((step, i) => {
        step.classList.toggle('active', i + 1 === target);
        step.classList.toggle('done', i + 1 < target);
      });
      document.querySelectorAll('.checkout-section-step').forEach((section, i) => {
        section.style.display = i + 1 === target ? 'block' : 'none';
      });
    });
  });
}

// ============================================================
// ORDER TRACKING PAGE
// ============================================================
function initTracking() {
  const orderId = localStorage.getItem('aurum_last_order') || 'AN-X7K2P9';
  const orderIdEl = document.getElementById('order-id-display');
  if (orderIdEl) orderIdEl.textContent = orderId;

  // Demo tracking data
  const steps = [
    { title: 'Order Confirmed', detail: 'Your order has been received and is being prepared.', date: '24 Apr 2025 · 10:32 AM', done: true },
    { title: 'Quality Inspection', detail: 'Our perfumers are inspecting each bottle before dispatch.', date: '24 Apr 2025 · 02:15 PM', done: true },
    { title: 'Dispatched', detail: 'Your order has been handed to our courier partner.', date: '25 Apr 2025 · 09:00 AM', done: true },
    { title: 'In Transit', detail: 'Your fragrance is on its way — currently en route to your city.', date: '25 Apr 2025 · 06:45 PM', active: true },
    { title: 'Out for Delivery', detail: 'Your order will be delivered today.', date: 'Expected: 26 Apr 2025', done: false },
    { title: 'Delivered', detail: 'Package delivered to your address.', date: 'Pending', done: false }
  ];

  const timelineEl = document.getElementById('tracking-timeline');
  if (timelineEl) {
    timelineEl.innerHTML = steps.map(step => `
      <div class="timeline-step ${step.done ? 'done' : ''} ${step.active ? 'active' : ''}">
        <div class="timeline-dot"></div>
        <div class="timeline-step-title">${step.title}</div>
        <div class="timeline-step-detail">${step.detail}</div>
        <div class="timeline-step-date">${step.date}</div>
      </div>
    `).join('');
  }

  // Search
  document.getElementById('tracking-search-btn')?.addEventListener('click', () => {
    const val = document.getElementById('tracking-order-input')?.value;
    if (val) showToast(`Tracking order: ${val.toUpperCase()}`);
  });

  document.getElementById('tracking-order-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('tracking-search-btn')?.click();
  });
}

// ============================================================
// INIT — Run page-specific code
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNav();

  const page = window.location.pathname.split('/').pop();

  if (page === 'index.html' || page === '' || page === '/') initHome();
  else if (page === 'shop.html') initShop();
  else if (page === 'product.html') initProduct();
  else if (page === 'cart.html') initCart();
  else if (page === 'login.html') initAuth();
  else if (page === 'checkout.html') initCheckout();
  else if (page === 'tracking.html') initTracking();
});