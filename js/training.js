mountChrome("training");

const filters = {
  cert: "",
  continent: "",
  style: "",
  price: "",
  ya: false,
  sort: "featured"
};

function trainingCard(tr) {
  return `
    <a href="/training-detail.html?id=${tr.id}" class="retreat-card block fade-in">
      <img src="${tr.image}" alt="${tr.title}" class="retreat-card-img" loading="lazy" />
      <div class="p-5">
        <div class="flex items-center gap-2 mb-3 flex-wrap">
          <span class="badge badge-sage">${tr.certification}</span>
          <span class="badge badge-sand">${tr.style}</span>
          ${tr.yogaAlliance ? `<span class="badge badge-terra">Yoga Alliance</span>` : ""}
        </div>
        <h3 class="font-serif text-2xl mb-1" style="color: var(--sage-800);">${tr.title}</h3>
        <div class="text-sm text-stone-500 mb-3">${tr.location}, ${tr.country} · ${tr.school}</div>
        <div class="flex items-center justify-between text-sm">
          <div class="text-stone-600">
            <span class="star-rating">${renderStars(tr.rating)}</span>
            <span class="ml-1 font-medium" style="color: var(--ink);">${tr.rating}</span>
            <span class="text-stone-400 ml-1">(${tr.reviews})</span>
          </div>
          <div class="text-stone-500">${tr.duration} days</div>
        </div>
        <div class="mt-4 pt-4 border-t border-stone-100 flex items-baseline justify-between">
          <div>
            <span class="text-2xl font-serif" style="color: var(--sage-700);">${formatPrice(tr.price)}</span>
            <span class="text-sm text-stone-400 ml-1">/ all-inclusive</span>
          </div>
          <span class="text-sm" style="color: var(--terra-500);">${tr.spots} spots left</span>
        </div>
      </div>
    </a>
  `;
}

function applyFilters() {
  let list = TRAININGS.slice();
  if (filters.cert) list = list.filter((tr) => tr.certification === filters.cert);
  if (filters.continent) list = list.filter((tr) => tr.continent === filters.continent);
  if (filters.style) list = list.filter((tr) => tr.style === filters.style);
  if (filters.price) {
    const cap = parseInt(filters.price, 10);
    if (!isNaN(cap)) list = list.filter((tr) => tr.price <= cap);
  }
  if (filters.ya) list = list.filter((tr) => tr.yogaAlliance);

  switch (filters.sort) {
    case "price-asc": list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "duration": list.sort((a, b) => b.duration - a.duration); break;
    case "rating": list.sort((a, b) => b.rating - a.rating); break;
  }

  const grid = document.getElementById("trainings-grid");
  const empty = document.getElementById("empty-state");
  const count = document.getElementById("result-count");

  if (list.length === 0) {
    grid.innerHTML = "";
    grid.classList.add("hidden");
    empty.classList.remove("hidden");
    count.textContent = "";
  } else {
    grid.classList.remove("hidden");
    empty.classList.add("hidden");
    grid.innerHTML = list.map(trainingCard).join("");
    count.textContent = `${list.length} training${list.length === 1 ? "" : "s"} found`;
  }
}

applyFilters();

["cert", "continent", "style", "price"].forEach((key) => {
  document.getElementById(`filter-${key}`).addEventListener("change", (e) => {
    filters[key] = e.target.value;
    applyFilters();
  });
});
document.getElementById("filter-price").addEventListener("input", (e) => {
  filters.price = e.target.value;
  applyFilters();
});
document.getElementById("filter-ya").addEventListener("change", (e) => {
  filters.ya = e.target.checked;
  applyFilters();
});
document.getElementById("sort-by").addEventListener("change", (e) => {
  filters.sort = e.target.value;
  applyFilters();
});
document.getElementById("reset-filters").addEventListener("click", () => {
  filters.cert = "";
  filters.continent = "";
  filters.style = "";
  filters.price = "";
  filters.ya = false;
  filters.sort = "featured";
  document.getElementById("filter-cert").value = "";
  document.getElementById("filter-continent").value = "";
  document.getElementById("filter-style").value = "";
  document.getElementById("filter-price").value = "";
  document.getElementById("filter-ya").checked = false;
  document.getElementById("sort-by").value = "featured";
  applyFilters();
});
