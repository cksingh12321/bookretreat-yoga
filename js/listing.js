mountChrome("retreats");

const filters = {
  q: "",
  continent: "",
  style: "",
  theme: "",
  price: "",
  duration: "",
  sort: "featured"
};

function readQueryParams() {
  const p = new URLSearchParams(window.location.search);
  if (p.get("q")) filters.q = p.get("q");
  if (p.get("continent")) filters.continent = p.get("continent");
  if (p.get("style")) filters.style = p.get("style");
  if (p.get("theme")) filters.theme = p.get("theme");
}

function syncControls() {
  const searchInput = document.getElementById("listing-search-input");
  if (searchInput) searchInput.value = filters.q;
  document.getElementById("filter-continent").value = filters.continent;
  document.getElementById("filter-style").value = filters.style;
  document.getElementById("filter-theme").value = filters.theme;
  document.getElementById("filter-price").value = filters.price;
  document.getElementById("filter-duration").value = filters.duration;
  document.getElementById("sort-by").value = filters.sort;
}

function applyFilters() {
  let list = RETREATS.slice();
  if (filters.q) {
    const needle = filters.q.trim().toLowerCase();
    list = list.filter((r) =>
      (r.location + " " + r.country + " " + r.title + " " + r.continent)
        .toLowerCase()
        .includes(needle)
    );
  }
  if (filters.continent) list = list.filter((r) => r.continent === filters.continent);
  if (filters.style) list = list.filter((r) => r.style === filters.style);
  if (filters.theme) list = list.filter((r) => r.theme === filters.theme);
  if (filters.price) {
    const cap = parseInt(filters.price, 10);
    if (!isNaN(cap)) list = list.filter((r) => r.price <= cap);
  }
  if (filters.duration === "short") list = list.filter((r) => r.duration <= 6);
  if (filters.duration === "mid") list = list.filter((r) => r.duration >= 7 && r.duration <= 9);
  if (filters.duration === "long") list = list.filter((r) => r.duration >= 10);

  switch (filters.sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "duration":
      list.sort((a, b) => b.duration - a.duration);
      break;
  }

  const grid = document.getElementById("retreats-grid");
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
    grid.innerHTML = list.map(retreatCard).join("");
    count.textContent = `${list.length} retreat${list.length === 1 ? "" : "s"} found`;
  }
}

readQueryParams();
syncControls();
applyFilters();

["continent", "style", "theme", "price", "duration"].forEach((key) => {
  document.getElementById(`filter-${key}`).addEventListener("change", (e) => {
    filters[key] = e.target.value;
    applyFilters();
  });
});
document.getElementById("filter-price").addEventListener("input", (e) => {
  filters.price = e.target.value;
  applyFilters();
});
document.getElementById("sort-by").addEventListener("change", (e) => {
  filters.sort = e.target.value;
  applyFilters();
});
document.getElementById("reset-filters").addEventListener("click", () => {
  Object.keys(filters).forEach((k) => (filters[k] = ""));
  filters.sort = "featured";
  syncControls();
  applyFilters();
});

const searchForm = document.getElementById("listing-search");
const searchInput = document.getElementById("listing-search-input");
if (searchForm && searchInput) {
  searchInput.addEventListener("input", (e) => {
    filters.q = e.target.value;
    applyFilters();
  });
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    filters.q = searchInput.value;
    applyFilters();
  });
}
