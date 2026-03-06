/* === SWAVE CULT — MAIN JS === */

/* ── Product Data ── */
const PRODUCTS = [
  { id: 39001896, name: "Gözlük — Mavi Işık Korumalı",       brand: "CH",           brandFull: "CH",       category: "accessory",  price: 780,  oldPrice: 980,  img: "https://cdn.shopier.app/pictures_large/swavetr_7362a95ea3a56b8f1a0287756ee988d6.jpeg",  url: "https://www.shopier.com/swavetr/39001896" },
  { id: 43453097, name: "Gözlük — Mavi Işık Korumalı [YENİ]", brand: "CH",           brandFull: "CH",       category: "accessory",  price: 750,  oldPrice: 980,  img: "https://cdn.shopier.app/pictures_large/swavetr_1beb6071a9271dd85f47b88bc13f7789.jpeg",  url: "https://www.shopier.com/swavetr/43453097" },
  { id: 36728306, name: "Gözlük — Şeffaf",                    brand: "CH",           brandFull: "CH",       category: "accessory",  price: 780,  oldPrice: 850,  img: "https://cdn.shopier.app/pictures_large/swavetr_f314c0935a0157ff7ab274d5fbcc1c35.jpeg",  url: "https://www.shopier.com/swavetr/36728306" },
  { id: 36728092, name: "Gözlük — Siyah",                     brand: "CH",           brandFull: "CH",       category: "accessory",  price: 780,  oldPrice: 850,  img: "https://cdn.shopier.app/pictures_large/swavetr_c619c68ae11e854dab7f696ea3f57050.jpeg",  url: "https://www.shopier.com/swavetr/36728092" },
  { id: 42076066, name: "Deri Gözlük Kılıfı",                 brand: "CH",           brandFull: "CH",       category: "accessory",  price: 1800, oldPrice: 2500, img: "https://cdn.shopier.app/pictures_large/swavetr_a7a52ebbd404ba2000d79eca7816d256.jpeg",  url: "https://www.shopier.com/swavetr/42076066" },
  { id: 41442803, name: "Bere",                                brand: "CH",           brandFull: "CH",       category: "accessory",  price: 1100, oldPrice: null, img: "https://cdn.shopier.app/pictures_large/swavetr_1547754b20d9527d47c2a3529519117c.jpeg",  url: "https://www.shopier.com/swavetr/41442803" },
  { id: 41440142, name: "Geobasket",                           brand: "RO",           brandFull: "RO × CH",             category: "accessory",  price: 7500, oldPrice: null, img: "https://cdn.shopier.app/pictures_large/swavetr_1547754b20d9527d47c2a3529519117c.jpeg",  url: "https://www.shopier.com/swavetr/41440142" },
  { id: 41072859, name: "Geobasket",                           brand: "RO",           brandFull: "RO × CH",             category: "accessory",  price: 7500, oldPrice: null, img: "https://cdn.shopier.app/pictures_large/swavetr_dd0d27d25b5a1f90b36fa989bf75a381.png",    url: "https://www.shopier.com/swavetr/41072859" },
  { id: 38470303, name: "Çanta — Orijinal",                   brand: "Sprayground",  brandFull: "SPG",         category: "accessory",  price: 8000, oldPrice: null, img: "https://cdn.shopier.app/pictures_large/swavetr_3e60cf8eff8ff63405b39c73df9e4b11.jpg",    url: "https://www.shopier.com/swavetr/38470303" },
  { id: 41383403, name: "HeatReactive Balaclava — Gri/Beyaz", brand: "Supreme",      brandFull: "SUP",             category: "accessory",  price: 1300, oldPrice: null, img: "https://cdn.shopier.app/pictures_large/swavetr_1197a32e3e1021820b499f893f96c19d.jpeg",  url: "https://www.shopier.com/swavetr/41383403" },
  { id: 41383329, name: "HeatReactive Balaclava — Gri/Mavi",  brand: "Supreme",      brandFull: "SUP",             category: "accessory",  price: 1300, oldPrice: null, img: "https://cdn.shopier.app/pictures_large/swavetr_0e8c8141fd7f33354b5dfecdac680d8f.jpeg",  url: "https://www.shopier.com/swavetr/41383329" },
  { id: 41383349, name: "HeatReactive Balaclava — Mavi/Buz",  brand: "Supreme",      brandFull: "SUP",             category: "accessory",  price: 1300, oldPrice: null, img: "https://cdn.shopier.app/pictures_large/swavetr_51a37a8c92c1535ba2e28a88ebd2ed89.jpeg",  url: "https://www.shopier.com/swavetr/41383349" },
  { id: 41383368, name: "HeatReactive Balaclava — Kırmızı",   brand: "Supreme",      brandFull: "SUP",             category: "accessory",  price: 1300, oldPrice: null, img: "https://cdn.shopier.app/pictures_large/swavetr_b56a74609295a6a2b14d9ef30d4da61a.jpeg",  url: "https://www.shopier.com/swavetr/41383368" },
  { id: 38310617, name: "Flared Pants",                        brand: "Gallery Dept", brandFull: "GD × CH",  category: "pants",      price: 3500, oldPrice: 4500, img: "https://cdn.shopier.app/pictures_large/swavetr_7c004e72e82e7316d0e51216bc20ca1e.png",    url: "https://www.shopier.com/swavetr/38310617" },
  { id: 38310576, name: "Flared Pants",                        brand: "Gallery Dept", brandFull: "GD × CH",  category: "pants",      price: 3500, oldPrice: 4500, img: "https://cdn.shopier.app/pictures_large/swavetr_02f606efbd832b7c438fabaed1347311.png",   url: "https://www.shopier.com/swavetr/38310576" },
  { id: 38310453, name: "Hoodie",                              brand: "Hellstar",     brandFull: "Hellstar",            category: "sweatshirt", price: 3400, oldPrice: 4500, img: "https://cdn.shopier.app/pictures_large/swavetr_8ea3bd299183a00b67c9c36674a6ef1f.png",    url: "https://www.shopier.com/swavetr/38310453" },
  { id: 38310367, name: "Sweatshirt",                          brand: "Hellstar",     brandFull: "Hellstar",            category: "sweatshirt", price: 2800, oldPrice: 4500, img: "https://cdn.shopier.app/pictures_large/swavetr_f92071edce5d255972d4db9534e3e6a1.png",    url: "https://www.shopier.com/swavetr/38310367" },
  { id: 38310242, name: "Sweatshirt",                          brand: "Hellstar",     brandFull: "Hellstar",            category: "sweatshirt", price: 2800, oldPrice: 4500, img: "https://cdn.shopier.app/pictures_large/swavetr_4f65d215ac4c22780d2c8fc2e2985065.png",    url: "https://www.shopier.com/swavetr/38310242" },
  { id: 38310096, name: "Flared Sweatpants",                   brand: "Hellstar",     brandFull: "Hellstar",            category: "pants",      price: 2900, oldPrice: 4500, img: "https://cdn.shopier.app/pictures_large/swavetr_dfe6514e877f7d2ec42d9555a554d4b4.png",    url: "https://www.shopier.com/swavetr/38310096" },
  { id: 38309668, name: "Flared Sweatpants",                   brand: "Hellstar",     brandFull: "Hellstar",            category: "pants",      price: 2900, oldPrice: 4500, img: "https://cdn.shopier.app/pictures_large/swavetr_93fb598e06aafe1e01e0bb31094f8d2c.png",    url: "https://www.shopier.com/swavetr/38309668" },
  { id: 38309884, name: "Sweatpants",                          brand: "Hellstar",     brandFull: "Hellstar",            category: "pants",      price: 3400, oldPrice: 4500, img: "https://cdn.shopier.app/pictures_large/swavetr_1abfa582929eba6c77a35175540457be.png",    url: "https://www.shopier.com/swavetr/38309884" },
  { id: 38309854, name: "Sweatpants",                          brand: "Hellstar",     brandFull: "Hellstar",            category: "pants",      price: 2900, oldPrice: 4500, img: "https://cdn.shopier.app/pictures_large/swavetr_8bd98c5592841588f1e9156a31bac422.png",    url: "https://www.shopier.com/swavetr/38309854" },
  { id: 38309759, name: "Flared Sweatpants",                   brand: "Hellstar",     brandFull: "Hellstar",            category: "pants",      price: 2900, oldPrice: 4500, img: "https://cdn.shopier.app/pictures_large/swavetr_dd7d028cee83720353998ef5e0387dd5.png",    url: "https://www.shopier.com/swavetr/38309759" },
  { id: 38309719, name: "Flared Sweatpants",                   brand: "Hellstar",     brandFull: "Hellstar",            category: "pants",      price: 2900, oldPrice: 4500, img: "https://cdn.shopier.app/pictures_large/swavetr_c062bfa2b3c66f64fad61444061a75f1.png",    url: "https://www.shopier.com/swavetr/38309719" },
];

/* ── Helpers ── */
function fmt(n) { return n.toLocaleString('tr-TR') + ' ₺'; }

function buildCard(p) {
  const priceBlock = p.oldPrice
    ? `<div class="product-price-row">
         <span class="product-price">${fmt(p.price)}</span>
         <span class="product-old-price">${fmt(p.oldPrice)}</span>
       </div>`
    : `<span class="product-price">${fmt(p.price)}</span>`;

  return `
    <div class="product-card">
      <a class="product-img-wrap" href="${p.url}" target="_blank" rel="noopener noreferrer">
        <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy">
        <span class="product-view">İNCELE</span>
      </a>
      <div class="product-body">
        <span class="product-brand-tag">${p.brandFull || p.brand}</span>
        <span class="product-name">${p.name}</span>
        ${priceBlock}
        <button class="add-to-cart-btn" data-id="${p.id}">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M5.5 1v9M1 5.5h9"/>
          </svg>
          SEPETE EKLE
        </button>
      </div>
    </div>`;
}

/* ══════════════════════════════════════
   CART — localStorage
══════════════════════════════════════ */
const CART_KEY = 'sc_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  refreshCartUI();
}

function cartAdd(id) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) item.qty += 1;
  else cart.push({ id, qty: 1 });
  saveCart(cart);
  showToast('Ürün sepete eklendi ✓');
}

function cartRemove(id) {
  saveCart(getCart().filter(i => i.id !== id));
}

function cartUpdateQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
}

function cartTotal() {
  return getCart().reduce((sum, item) => {
    const p = PRODUCTS.find(p => p.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function cartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}

/* ── Cart UI ── */
function refreshCartUI() {
  const count = cartCount();

  // Nav badge
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = count > 9 ? '9+' : count;
    badge.classList.toggle('visible', count > 0);
  }

  renderCartDrawer();
}

function renderCartDrawer() {
  const listEl  = document.getElementById('cartItemsList');
  const footerEl = document.getElementById('cartFooter');
  if (!listEl) return;

  const cart = getCart();

  if (cart.length === 0) {
    listEl.innerHTML = `
      <div class="cart-empty-state">
        <svg viewBox="0 0 44 24" fill="none" aria-hidden="true">
          <path d="M2 8 C7 2 13 2 18 8 C23 14 29 14 34 8 C38 4 41 2 42 2" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M2 16 C7 10 13 10 18 16 C23 22 29 22 34 16 C38 12 41 10 42 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>
        </svg>
        <p class="cart-empty-title">SEPET BOŞ</p>
        <p class="cart-empty-sub">Henüz ürün eklemediniz.</p>
      </div>`;
    if (footerEl) footerEl.hidden = true;
    return;
  }

  if (footerEl) footerEl.hidden = false;

  listEl.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(p => p.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <a href="${p.url}" target="_blank" rel="noopener">
          <img class="cart-item-img" src="${p.img}" alt="${p.name}">
        </a>
        <div class="cart-item-details">
          <span class="cart-item-brand">${p.brandFull || p.brand}</span>
          <span class="cart-item-name">${p.name}</span>
          <span class="cart-item-price">${fmt(p.price * item.qty)}</span>
          <div class="cart-item-controls">
            <button class="qty-btn" data-id="${p.id}" data-delta="-1" aria-label="Azalt">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" data-id="${p.id}" data-delta="1" aria-label="Artır">+</button>
            <button class="cart-remove-btn" data-id="${p.id}" aria-label="Kaldır">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <path d="M2 4h12M6 4V3h4v1M5 4l.5 9M11 4l-.5 9"/>
              </svg>
            </button>
          </div>
        </div>
      </div>`;
  }).join('');

  // Update total
  const totalEl = document.getElementById('cartTotalAmt');
  if (totalEl) totalEl.textContent = fmt(cartTotal());

  // Update count label
  const countLabelEl = document.getElementById('cartCountLabel');
  if (countLabelEl) countLabelEl.textContent = `(${cartCount()})`;

  // Checkout link: single item → direct product, multiple → store
  const checkoutEl = document.getElementById('cartCheckoutLink');
  if (checkoutEl) {
    checkoutEl.href = cart.length === 1
      ? (PRODUCTS.find(p => p.id === cart[0].id)?.url || 'https://www.shopier.com/swavetr')
      : 'https://www.shopier.com/swavetr';
  }

  // Qty buttons
  listEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => cartUpdateQty(parseInt(btn.dataset.id), parseInt(btn.dataset.delta)));
  });

  // Remove buttons
  listEl.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => cartRemove(parseInt(btn.dataset.id)));
  });
}

/* ── Toast ── */
let _toastTimer;
function showToast(msg) {
  let el = document.getElementById('cartToast');
  if (!el) {
    el = Object.assign(document.createElement('div'), { id: 'cartToast', className: 'cart-toast' });
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ── Cart drawer open/close ── */
(function initCartDrawer() {
  const toggle   = document.getElementById('cartToggle');
  const drawer   = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  const closeBtn = document.getElementById('cartCloseBtn');
  if (!toggle || !drawer) return;

  const open  = () => { drawer.classList.add('open');  backdrop?.classList.add('open');  document.body.style.overflow = 'hidden'; };
  const close = () => { drawer.classList.remove('open'); backdrop?.classList.remove('open'); document.body.style.overflow = ''; };

  toggle.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  backdrop?.addEventListener('click', close);

  refreshCartUI();
})();

/* ── Add-to-cart delegation (works on dynamically rendered cards) ── */
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.add-to-cart-btn');
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();

  const id = parseInt(btn.dataset.id);
  cartAdd(id);

  // Button feedback
  const orig = btn.innerHTML;
  btn.innerHTML = '✓ EKLENDİ';
  btn.classList.add('added');
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.classList.remove('added');
    btn.disabled = false;
  }, 1600);
});

/* ══════════════════════════════════════
   NAV
══════════════════════════════════════ */
(function () {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

(function () {
  const path = window.location.pathname.toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').toLowerCase();
    if (href !== '/' && path.startsWith(href)) a.classList.add('nav-active');
    else if (href === '/' && (path === '/' || path === '/index')) a.classList.add('nav-active');
  });
})();

(function () {
  const toggle = document.getElementById('navToggle');
  const mNav   = document.getElementById('mobileNav');
  const close  = document.getElementById('mobileClose');
  if (!toggle || !mNav) return;
  toggle.addEventListener('click', () => mNav.classList.add('open'));
  close?.addEventListener('click', () => mNav.classList.remove('open'));
  mNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mNav.classList.remove('open')));
})();

/* ══════════════════════════════════════
   PAGE SECTIONS
══════════════════════════════════════ */
// Home: featured products
(function () {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const picks = [
    PRODUCTS.find(p => p.id === 38310453),
    PRODUCTS.find(p => p.id === 41440142),
    PRODUCTS.find(p => p.id === 38310617),
    PRODUCTS.find(p => p.id === 39001896),
  ].filter(Boolean);
  grid.innerHTML = picks.map(buildCard).join('');
})();

// Shop: filter + render
(function () {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;

  let activeCat   = 'all';
  let activeBrand = 'all';

  function render() {
    const list = PRODUCTS.filter(p =>
      (activeCat   === 'all' || p.category === activeCat) &&
      (activeBrand === 'all' || p.brand    === activeBrand)
    );
    const countEl = document.getElementById('shopCount');
    if (countEl) countEl.textContent = list.length + ' PIECE' + (list.length !== 1 ? 'S' : '');
    grid.innerHTML = list.length ? list.map(buildCard).join('') : '<p class="no-results">Ürün bulunamadı</p>';
  }

  document.querySelectorAll('[data-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCat = btn.dataset.cat;
      document.querySelectorAll('[data-cat]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
  });

  document.querySelectorAll('[data-brand]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeBrand = btn.dataset.brand;
      document.querySelectorAll('[data-brand]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
  });

  render();

  // URL param pre-filter
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat'), brand = params.get('brand');
  if (cat)   document.querySelector(`[data-cat="${cat}"]`)?.click();
  if (brand) document.querySelector(`[data-brand="${brand}"]`)?.click();
})();

// Drops: countdown
(function () {
  const cdDays = document.getElementById('cdDays');
  if (!cdDays) return;
  const target = new Date('2026-03-15T20:00:00');
  const pad = n => String(Math.max(0, n)).padStart(2, '0');
  function tick() {
    const diff = target - Date.now();
    document.getElementById('cdDays').textContent  = pad(Math.floor(diff / 86400000));
    document.getElementById('cdHours').textContent = pad(Math.floor((diff % 86400000) / 3600000));
    document.getElementById('cdMins').textContent  = pad(Math.floor((diff % 3600000) / 60000));
    document.getElementById('cdSecs').textContent  = pad(Math.floor((diff % 60000) / 1000));
  }
  tick();
  setInterval(tick, 1000);
})();
