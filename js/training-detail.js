mountChrome("training");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const tr = id ? getTrainingById(id) : null;
const root = document.getElementById("training-root");

if (!tr) {
  root.innerHTML = `
    <div class="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 class="font-serif text-4xl mb-3" style="color: var(--sage-800);">Training not found</h1>
      <p class="text-stone-500 mb-6">We couldn't find that program.</p>
      <a href="/training.html" class="btn-primary">All trainings</a>
    </div>
  `;
} else {
  document.title = `${tr.title} — bookretreat.yoga`;
  const heroStyle = `background: linear-gradient(180deg, rgba(46,67,56,0.35) 0%, rgba(46,67,56,0.6) 100%), url('${tr.image}') center/cover;`;

  root.innerHTML = `
    <section style="${heroStyle}" class="text-white">
      <div class="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <a href="/training.html" class="text-white/80 text-sm hover:text-white">← All trainings</a>
        <div class="flex items-center gap-2 mt-6 mb-3 flex-wrap">
          <span class="badge badge-sage">${tr.certification}</span>
          <span class="badge badge-sand">${tr.style}</span>
          ${tr.yogaAlliance ? `<span class="badge badge-terra">Yoga Alliance Certified</span>` : `<span class="badge badge-terra">Traditional Lineage</span>`}
        </div>
        <h1 class="font-serif text-5xl md:text-6xl mb-3 leading-tight">${tr.title}</h1>
        <p class="text-xl text-white/90">${tr.location}, ${tr.country} · ${tr.school}</p>
        <div class="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/85">
          <span><span class="star-rating">${renderStars(tr.rating)}</span> ${tr.rating} (${tr.reviews} reviews)</span>
          <span>·</span>
          <span>${tr.duration} days</span>
          <span>·</span>
          <span>${formatDateRange(tr.startDate, tr.endDate)}</span>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 mt-10">
      <div class="flex items-baseline justify-between mb-4">
        <h2 class="font-serif text-2xl" style="color: var(--sage-800);">Photos</h2>
      </div>
      <div id="photo-grid" class="grid grid-cols-2 md:grid-cols-4 gap-3"></div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid lg:grid-cols-[1fr_380px] gap-12">
        <div>
          <h2 class="font-serif text-3xl mb-4" style="color: var(--sage-800);">About this training</h2>
          <p class="text-stone-700 text-lg leading-relaxed mb-10">${tr.description}</p>

          <h2 class="font-serif text-3xl mb-4" style="color: var(--sage-800);">What's included</h2>
          <ul class="grid sm:grid-cols-2 gap-3 mb-12">
            ${tr.highlights
              .map(
                (h) =>
                  `<li class="flex items-start gap-3 text-stone-700"><span style="color: var(--sage-600);" class="mt-1">✦</span><span>${h}</span></li>`
              )
              .join("")}
          </ul>

          <h2 class="font-serif text-3xl mb-4" style="color: var(--sage-800);">Curriculum</h2>
          <div class="grid sm:grid-cols-2 gap-3 mb-12">
            ${tr.curriculum
              .map(
                (c, i) =>
                  `<div class="flex items-start gap-3 p-3 rounded-lg" style="background: var(--sage-50);">
                    <span class="font-serif text-lg shrink-0" style="color: var(--terra-500);">${String(i + 1).padStart(2, "0")}</span>
                    <span class="text-stone-700 text-sm leading-relaxed">${c}</span>
                  </div>`
              )
              .join("")}
          </div>

          <div class="p-6 rounded-2xl border" style="background: rgba(212, 165, 116, 0.1); border-color: var(--sand-400);">
            <h3 class="font-serif text-xl mb-2" style="color: var(--sage-800);">Who this is for</h3>
            <p class="text-stone-700 leading-relaxed">
              ${
                tr.certification === "300-Hour"
                  ? "Existing RYT-200 graduates who have been teaching for at least a year and want to deepen their practice and teaching."
                  : tr.certification === "Immersion (non-RYT)"
                  ? "Serious practitioners committed to the tradition, regardless of certification. Not a path to a Yoga Alliance certificate — a path to deep practice."
                  : "Committed practitioners with at least a year of regular practice, ready to begin teaching. Open to all serious students."
              }
            </p>
          </div>
        </div>

        <aside class="lg:sticky lg:top-24 lg:self-start">
          <div class="bg-white rounded-2xl p-6 shadow-md border border-stone-100">
            <div class="mb-5">
              <div class="text-sm text-stone-500 mb-1">From</div>
              <div class="text-4xl font-serif" style="color: var(--sage-700);">${formatPrice(tr.price)}</div>
              <div class="text-sm text-stone-500 mt-1">all-inclusive · room, meals & materials</div>
            </div>
            <div class="mb-5 pb-5 border-b border-stone-100">
              <div class="flex justify-between text-sm mb-2">
                <span class="text-stone-500">Dates</span>
                <span class="font-medium text-right">${formatDateRange(tr.startDate, tr.endDate)}</span>
              </div>
              <div class="flex justify-between text-sm mb-2">
                <span class="text-stone-500">Duration</span>
                <span class="font-medium">${tr.duration} days</span>
              </div>
              <div class="flex justify-between text-sm mb-2">
                <span class="text-stone-500">Certification</span>
                <span class="font-medium">${tr.certification}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-stone-500">Spots remaining</span>
                <span class="font-medium" style="color: var(--terra-500);">${tr.spots} left</span>
              </div>
            </div>
            <button id="show-interest-btn" class="btn-primary w-full">Show interest</button>
            <p class="text-xs text-stone-400 text-center mt-3">No payment required. We'll connect you with the school.</p>
          </div>
        </aside>
      </div>
    </section>

    <section style="background: var(--sage-50);" class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="font-serif text-3xl mb-8" style="color: var(--sage-800);">Other trainings you may consider</h2>
        <div id="related-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
      </div>
    </section>
  `;

  const allPhotos = [tr.image, ...tr.gallery];
  const photoGrid = document.getElementById("photo-grid");
  photoGrid.innerHTML = allPhotos
    .map(
      (src, i) => `
        <button data-photo-index="${i}" class="photo-thumb relative overflow-hidden rounded-xl group" style="aspect-ratio: 1; padding: 0; border: 0;">
          <img src="${src}" alt="${tr.title} — photo ${i + 1}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        </button>`
    )
    .join("");

  function openLightbox(startIndex) {
    let idx = startIndex;
    const lb = document.createElement("div");
    lb.className = "modal-backdrop fade-in";
    lb.style.background = "rgba(20, 24, 28, 0.92)";
    lb.innerHTML = `
      <button id="lb-close" class="absolute top-5 right-6 text-white text-3xl leading-none" aria-label="Close">×</button>
      <button id="lb-prev" class="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white text-4xl leading-none w-12 h-12 rounded-full bg-white/10 hover:bg-white/20" aria-label="Previous">‹</button>
      <button id="lb-next" class="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white text-4xl leading-none w-12 h-12 rounded-full bg-white/10 hover:bg-white/20" aria-label="Next">›</button>
      <div class="max-w-5xl w-full flex flex-col items-center">
        <img id="lb-image" src="${allPhotos[idx]}" class="max-h-[80vh] w-auto rounded-xl shadow-2xl" />
        <div id="lb-counter" class="text-white/80 text-sm mt-4">${idx + 1} of ${allPhotos.length}</div>
      </div>
    `;
    document.body.appendChild(lb);
    document.body.style.overflow = "hidden";

    function update() {
      lb.querySelector("#lb-image").src = allPhotos[idx];
      lb.querySelector("#lb-counter").textContent = `${idx + 1} of ${allPhotos.length}`;
    }
    function prev() { idx = (idx - 1 + allPhotos.length) % allPhotos.length; update(); }
    function next() { idx = (idx + 1) % allPhotos.length; update(); }
    function close() {
      lb.remove();
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    }
    function onKey(e) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    lb.querySelector("#lb-close").addEventListener("click", close);
    lb.querySelector("#lb-prev").addEventListener("click", prev);
    lb.querySelector("#lb-next").addEventListener("click", next);
    lb.addEventListener("click", (e) => {
      if (e.target === lb) close();
    });
    document.addEventListener("keydown", onKey);
  }

  photoGrid.querySelectorAll(".photo-thumb").forEach((btn) => {
    btn.addEventListener("click", () => openLightbox(parseInt(btn.dataset.photoIndex, 10)));
  });

  document.getElementById("show-interest-btn").addEventListener("click", () => {
    openInterestModal(`Interested in ${tr.title}? Tell us a bit about you and your practice.`, tr.id);
  });

  const related = TRAININGS.filter((x) => x.id !== tr.id)
    .sort((a, b) => Math.abs(a.price - tr.price) - Math.abs(b.price - tr.price))
    .slice(0, 3);
  document.getElementById("related-grid").innerHTML = related
    .map(
      (r) => `
        <a href="/training-detail.html?id=${r.id}" class="retreat-card block">
          <img src="${r.image}" alt="${r.title}" class="retreat-card-img" loading="lazy" />
          <div class="p-5">
            <div class="flex items-center gap-2 mb-3">
              <span class="badge badge-sage">${r.certification}</span>
              <span class="badge badge-sand">${r.style}</span>
            </div>
            <h3 class="font-serif text-xl mb-1" style="color: var(--sage-800);">${r.title}</h3>
            <div class="text-sm text-stone-500 mb-3">${r.location}, ${r.country}</div>
            <div class="text-lg font-serif" style="color: var(--sage-700);">${formatPrice(r.price)}</div>
          </div>
        </a>`
    )
    .join("");
}
