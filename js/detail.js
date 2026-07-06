mountChrome("retreats");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const r = id ? getRetreatById(id) : null;
const root = document.getElementById("retreat-root");

if (!r) {
  root.innerHTML = `
    <div class="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 class="font-serif text-4xl mb-3" style="color: var(--sage-800);">Retreat not found</h1>
      <p class="text-stone-500 mb-6">We couldn't find that one. It may have been booked out, or the link may be old.</p>
      <a href="/retreats.html" class="btn-primary">See all retreats</a>
    </div>
  `;
} else {
  document.title = `${r.title} — bookretreat.yoga`;
  const heroStyle = `background: linear-gradient(180deg, rgba(46,67,56,0.35) 0%, rgba(46,67,56,0.6) 100%), url('${r.image}') center/cover;`;

  root.innerHTML = `
    <section style="${heroStyle}" class="text-white">
      <div class="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <a href="/retreats.html" class="text-white/80 text-sm hover:text-white">← All retreats</a>
        <div class="flex items-center gap-2 mt-6 mb-3">
          <span class="badge badge-sage">${r.style}</span>
          <span class="badge badge-sand">${r.theme}</span>
          <span class="badge badge-terra">${r.level}</span>
        </div>
        <h1 class="font-serif text-5xl md:text-6xl mb-3 leading-tight">${r.title}</h1>
        <p class="text-xl text-white/90">${r.location}, ${r.country}</p>
        <div class="mt-4 flex items-center gap-4 text-sm text-white/85">
          <span><span class="star-rating">${renderStars(r.rating)}</span> ${r.rating} (${r.reviews} reviews)</span>
          <span>·</span>
          <span>${r.duration} days</span>
          <span>·</span>
          <span>Hosted by ${r.host}</span>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 mt-10">
      <div class="flex items-baseline justify-between mb-4">
        <h2 class="font-serif text-2xl" style="color: var(--sage-800);">Photos</h2>
        <button id="view-all-photos" class="text-sm" style="color: var(--terra-500);">View all ${1 + r.gallery.length} photos →</button>
      </div>
      <div id="photo-grid" class="grid grid-cols-2 md:grid-cols-4 gap-3"></div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid lg:grid-cols-[1fr_380px] gap-12">
        <div>
          <h2 class="font-serif text-3xl mb-4" style="color: var(--sage-800);">About this retreat</h2>
          <p class="text-stone-700 text-lg leading-relaxed mb-10">${r.description}</p>

          <h2 class="font-serif text-3xl mb-4" style="color: var(--sage-800);">What's included</h2>
          <ul class="grid sm:grid-cols-2 gap-3 mb-12">
            ${r.highlights
              .map(
                (h) =>
                  `<li class="flex items-start gap-3 text-stone-700">
                    <span style="color: var(--sage-600);" class="mt-1">✦</span>
                    <span>${h}</span>
                  </li>`
              )
              .join("")}
          </ul>

          <h2 class="font-serif text-3xl mb-4" style="color: var(--sage-800);">A day in the life</h2>
          <div class="space-y-4 mb-12">
            ${dayInLife()
              .map(
                (slot) => `
                <div class="flex gap-5 pb-4 border-b border-stone-200 last:border-0">
                  <div class="w-20 shrink-0 font-medium" style="color: var(--terra-500);">${slot.time}</div>
                  <div>
                    <div class="font-medium mb-1" style="color: var(--ink);">${slot.title}</div>
                    <div class="text-sm text-stone-500">${slot.detail}</div>
                  </div>
                </div>`
              )
              .join("")}
          </div>

          <h2 class="font-serif text-3xl mb-4" style="color: var(--sage-800);">Your host</h2>
          ${(() => {
            const teacher = r.teacherId ? getTeacherById(r.teacherId) : null;
            if (teacher) {
              return `
              <div class="p-6 rounded-2xl" style="background: var(--sage-50);">
                <div class="flex items-start gap-5 mb-4">
                  <img src="${teacher.image}" alt="${teacher.name}" class="w-20 h-20 rounded-full object-cover shrink-0" />
                  <div class="flex-1">
                    <div class="font-serif text-xl" style="color: var(--sage-800);">${teacher.name}</div>
                    <div class="text-sm text-stone-500 mt-1">${teacher.styles.join(" · ")} · ${teacher.yearsTeaching} yrs teaching · Speaks ${teacher.languages.join(", ")}</div>
                  </div>
                </div>
                <p class="text-stone-700 leading-relaxed mb-4">${teacher.bio}</p>
                <div>
                  <div class="text-xs uppercase tracking-wider text-stone-500 mb-2">Certifications</div>
                  <ul class="space-y-1 text-sm text-stone-600">
                    ${teacher.certifications.map((c) => `<li class="flex items-start gap-2"><span style="color: var(--sage-600);">✦</span><span>${c}</span></li>`).join("")}
                  </ul>
                </div>
                <blockquote class="border-l-4 pl-4 py-1 italic font-serif text-lg mt-5" style="border-color: var(--terra-500); color: var(--sage-800);">"${teacher.quote}"</blockquote>
              </div>`;
            }
            return `
            <div class="flex items-start gap-5 p-6 rounded-2xl" style="background: var(--sage-50);">
              <div class="w-16 h-16 rounded-full shrink-0" style="background: url('https://picsum.photos/seed/${r.id}-host/200/200') center/cover;"></div>
              <div>
                <div class="font-serif text-xl" style="color: var(--sage-800);">${r.host}</div>
                <p class="text-stone-600 mt-1">Certified teacher with over a decade of guiding small-group retreats. Trained in the lineage that calls this region home.</p>
              </div>
            </div>`;
          })()}

          ${(() => {
            const stories = getPractitionersForRetreat(r.id);
            if (stories.length === 0) return "";
            return `
            <div class="flex items-baseline justify-between mt-12 mb-4">
              <h2 class="font-serif text-3xl" style="color: var(--sage-800);">Reviews</h2>
              <span class="text-xs px-2 py-1 rounded-full" style="background: rgba(212, 165, 116, 0.2); color: #8a5d2e;">Sample reviews — demo content</span>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              ${stories
                .map(
                  (p) => `
                <div class="bg-white rounded-2xl p-5 border border-stone-100">
                  <div class="flex items-center gap-3 mb-3">
                    <img src="${p.image}" alt="" class="w-10 h-10 rounded-full object-cover shrink-0" />
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-2">
                        <span class="font-medium text-sm" style="color: var(--sage-800);">${p.name}</span>
                      </div>
                      <div class="text-xs text-stone-500">${p.location.split(",").pop().trim()} · ${p.yearAttended}</div>
                    </div>
                  </div>
                  <blockquote class="text-stone-700 leading-relaxed text-[0.95rem]">"${p.quote}"</blockquote>
                </div>`
                )
                .join("")}
            </div>`;
          })()}
        </div>

        <aside class="lg:sticky lg:top-24 lg:self-start">
          <div class="bg-white rounded-2xl p-6 shadow-md border border-stone-100">
            <div class="mb-5">
              <div class="text-sm text-stone-500 mb-1">From</div>
              <div class="text-4xl font-serif" style="color: var(--sage-700);">${formatPrice(r.price)}</div>
              <div class="text-sm text-stone-500 mt-1">per person · all-inclusive</div>
            </div>
            <div class="mb-5 pb-5 border-b border-stone-100">
              <div class="flex justify-between text-sm mb-2">
                <span class="text-stone-500">Dates</span>
                <span class="font-medium">${formatDateRange(r.startDate, r.endDate)}</span>
              </div>
              <div class="flex justify-between text-sm mb-2">
                <span class="text-stone-500">Duration</span>
                <span class="font-medium">${r.duration} days</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-stone-500">Spots remaining</span>
                <span class="font-medium" style="color: var(--terra-500);">${r.spots} left</span>
              </div>
            </div>
            <button id="show-interest-btn" class="btn-primary w-full">Show interest</button>
            <p class="text-xs text-stone-400 text-center mt-3">No payment required. We'll connect you with the host.</p>
          </div>
        </aside>
      </div>
    </section>

    <section style="background: var(--sage-50);" class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="font-serif text-3xl mb-8" style="color: var(--sage-800);">Other retreats you may love</h2>
        <div id="related-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
      </div>
    </section>
  `;

  document.getElementById("show-interest-btn").addEventListener("click", () => {
    openInterestModal(`Interested in ${r.title}? Tell us a bit about you.`, r.id);
  });

  const allPhotos = [r.image, ...r.gallery];
  const photoGrid = document.getElementById("photo-grid");
  photoGrid.innerHTML = allPhotos
    .map(
      (src, i) => `
        <button data-photo-index="${i}" class="photo-thumb relative overflow-hidden rounded-xl group" style="aspect-ratio: 1; padding: 0; border: 0;">
          <img src="${src}" alt="${r.title} — photo ${i + 1}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
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
  document.getElementById("view-all-photos").addEventListener("click", () => openLightbox(0));

  const related = RETREATS.filter((x) => x.id !== r.id && (x.continent === r.continent || x.theme === r.theme))
    .slice(0, 3);
  document.getElementById("related-grid").innerHTML = related.map(retreatCard).join("");
}

function dayInLife() {
  return [
    { time: "6:30 AM", title: "Sunrise meditation", detail: "20-minute guided sit, followed by tea on the deck." },
    { time: "7:00 AM", title: "Morning asana", detail: "Vinyasa or Hatha flow tailored to the day's energy. 90 minutes." },
    { time: "9:00 AM", title: "Breakfast", detail: "Whole-food, seasonal, mostly plant-based. Always something local." },
    { time: "11:00 AM", title: "Free time / excursion", detail: "Optional cultural outing, beach time, or rest." },
    { time: "1:30 PM", title: "Long lunch", detail: "Community meal — the conversations are often the best part." },
    { time: "5:00 PM", title: "Evening practice", detail: "Yin, restorative, or meditation. Quiet and slow." },
    { time: "7:30 PM", title: "Dinner & sharing", detail: "Family-style. Some nights, a ceremony or workshop follows." }
  ];
}
