function renderHeader(active) {
  const links = [
    { href: "/retreats.html", label: "Retreats", key: "retreats" },
    { href: "/training.html", label: "Teacher Training", key: "training" },
    { href: "/about.html", label: "About", key: "about" },
    { href: "/host.html", label: "List Your Retreat", key: "host" }
  ];
  return `
    <header class="bg-white/95 backdrop-blur border-b border-stone-200 sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/index.html" class="flex items-center gap-2">
          <span class="text-2xl font-serif text-sage-700" style="color: var(--sage-700);">bookretreat<span style="color: var(--terra-500);">.yoga</span></span>
        </a>
        <nav class="hidden md:flex items-center gap-8">
          ${links
            .map(
              (l) =>
                `<a href="${l.href}" class="nav-link ${
                  l.key === active ? "active" : ""
                }">${l.label}</a>`
            )
            .join("")}
        </nav>
        <button id="mobile-menu-btn" class="md:hidden text-2xl" aria-label="Menu">☰</button>
      </div>
      <div id="mobile-menu" class="hidden md:hidden border-t border-stone-200 bg-white">
        ${links
          .map(
            (l) =>
              `<a href="${l.href}" class="block px-6 py-3 border-b border-stone-100 nav-link ${
                l.key === active ? "active" : ""
              }">${l.label}</a>`
          )
          .join("")}
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer style="background: var(--sage-800); color: white;" class="mt-24">
      <div class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div class="md:col-span-2">
          <div class="text-2xl font-serif mb-3">bookretreat<span style="color: var(--sand-400);">.yoga</span></div>
          <p class="text-white/70 max-w-md leading-relaxed">
            Curated yoga retreats across every continent. From Bali shalas to Tuscan villas — find your sacred week.
          </p>
        </div>
        <div>
          <div class="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Explore</div>
          <ul class="space-y-2 text-sm">
            <li><a href="/retreats.html">All Retreats</a></li>
            <li><a href="/retreats.html?continent=Asia">Asia</a></li>
            <li><a href="/retreats.html?continent=Europe">Europe</a></li>
            <li><a href="/retreats.html?continent=Americas">Americas</a></li>
          </ul>
        </div>
        <div>
          <div class="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Company</div>
          <ul class="space-y-2 text-sm">
            <li><a href="/about.html">About</a></li>
            <li><a href="/training.html">Teacher Training</a></li>
            <li><a href="/host.html">List Your Retreat</a></li>
            <li><a href="mailto:hello@bookretreat.yoga">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-white/10">
        <div class="max-w-7xl mx-auto px-6 py-6 text-sm text-white/60 flex flex-col md:flex-row md:justify-between gap-2">
          <span>© 2026 bookretreat.yoga — all rights reserved.</span>
          <div class="flex gap-5">
            <a href="/privacy.html">Privacy</a>
            <a href="/terms.html">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function mountChrome(active) {
  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");
  if (headerSlot) headerSlot.outerHTML = renderHeader(active);
  if (footerSlot) footerSlot.outerHTML = renderFooter();

  setTimeout(() => {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    if (btn && menu) {
      btn.addEventListener("click", () => menu.classList.toggle("hidden"));
    }
  }, 0);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let s = "";
  for (let i = 0; i < full; i++) s += "★";
  if (half) s += "☆";
  return s;
}

function retreatCard(r) {
  return `
    <a href="/retreat.html?id=${r.id}" class="retreat-card block fade-in">
      <img src="${r.image}" alt="${r.title}" class="retreat-card-img" loading="lazy" />
      <div class="p-5">
        <div class="flex items-center gap-2 mb-3">
          <span class="badge badge-sage">${r.style}</span>
          <span class="badge badge-sand">${r.theme}</span>
        </div>
        <h3 class="font-serif text-2xl mb-1" style="color: var(--sage-800);">${r.title}</h3>
        <div class="text-sm text-stone-500 mb-3">${r.location}, ${r.country}</div>
        <div class="flex items-center justify-between text-sm">
          <div class="text-stone-600">
            <span class="star-rating">${renderStars(r.rating)}</span>
            <span class="ml-1 font-medium" style="color: var(--ink);">${r.rating}</span>
            <span class="text-stone-400 ml-1">(${r.reviews})</span>
          </div>
          <div class="text-stone-500">${r.duration} days</div>
        </div>
        <div class="mt-4 pt-4 border-t border-stone-100 flex items-baseline justify-between">
          <div>
            <span class="text-2xl font-serif" style="color: var(--sage-700);">${formatPrice(r.price)}</span>
            <span class="text-sm text-stone-400 ml-1">/ person</span>
          </div>
          <span class="text-sm" style="color: var(--terra-500);">${r.spots} spots left</span>
        </div>
      </div>
    </a>
  `;
}

function openInterestModal(retreatTitle, retreatId) {
  const existing = document.getElementById("interest-modal");
  if (existing) existing.remove();

  const modal = document.createElement("div");
  modal.id = "interest-modal";
  modal.className = "modal-backdrop fade-in";
  modal.innerHTML = `
    <div class="modal-card" role="dialog" aria-modal="true">
      <div class="flex items-start justify-between mb-1">
        <h3 class="font-serif text-2xl" style="color: var(--sage-800);">Show interest</h3>
        <button id="modal-close" class="text-2xl text-stone-400 hover:text-stone-700 leading-none">×</button>
      </div>
      <p class="text-sm text-stone-500 mb-5">${retreatTitle ? retreatTitle : "Get notified about new retreats and early access."}</p>
      <form id="interest-form" class="space-y-3">
        <div>
          <label class="text-sm text-stone-700 block mb-1">Name</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label class="text-sm text-stone-700 block mb-1">Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label class="text-sm text-stone-700 block mb-1">Message <span class="text-stone-400">(optional)</span></label>
          <textarea name="message" rows="3" placeholder="What are you hoping to find?"></textarea>
        </div>
        <input type="hidden" name="retreatId" value="${retreatId || ""}" />
        <button type="submit" class="btn-primary w-full mt-2">Submit interest</button>
        <p class="text-xs text-stone-400 text-center mt-2">We'll be in touch within 48 hours.</p>
      </form>
      <div id="interest-success" class="hidden text-center py-6">
        <div class="text-5xl mb-3">🌿</div>
        <h4 class="font-serif text-2xl mb-2" style="color: var(--sage-700);">Thank you</h4>
        <p class="text-stone-600">We've received your interest. Look out for an email from us soon.</p>
        <button id="modal-close-2" class="btn-secondary mt-5">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";

  const close = () => {
    modal.remove();
    document.body.style.overflow = "";
  };
  modal.querySelector("#modal-close").addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
  modal.querySelector("#interest-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entry = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      retreatId: formData.get("retreatId"),
      at: new Date().toISOString()
    };
    try {
      const existing = JSON.parse(localStorage.getItem("interests") || "[]");
      existing.push(entry);
      localStorage.setItem("interests", JSON.stringify(existing));
    } catch (err) {
      console.error("Could not persist interest:", err);
    }
    document.getElementById("interest-form").classList.add("hidden");
    document.getElementById("interest-success").classList.remove("hidden");
    document.getElementById("modal-close-2").addEventListener("click", close);
  });
}
