const itemsGrid = document.getElementById("itemsGrid");
const featuredGrid = document.getElementById("featuredGrid");
const inventoryCount = document.getElementById("inventoryCount");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

const categoryButtons = document.querySelectorAll("#categoryFilters .filter-btn");
const audienceButtons = document.querySelectorAll("#audienceFilters .filter-btn");
const statusButtons = document.querySelectorAll("#statusFilters .filter-btn");

const sizeFilters = document.getElementById("sizeFilters");
const sizeFilterGroup = document.getElementById("sizeFilterGroup");

let currentCategory = "all";
let currentAudience = "all";
let currentStatus = "all";
let currentSize = "all";
let currentSearch = "";
let currentSort = "default";

function formatStatus(status) {
  switch (status) {
    case "available":
      return "Available";
    case "sold":
      return "Sold";
    case "reserved":
      return "Reserved";
    case "collection":
      return "Personal Collection";
    default:
      return status;
  }
}

function formatCategory(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function formatAudience(audience) {
  switch (audience) {
    case "men":
      return "Men";
    case "women":
      return "Women";
    case "unisex":
      return "Unisex";
    default:
      return audience || "Unisex";
  }
}

function formatPrice(price) {
  if (price === null) return "Not for sale";
  return `$${price.toLocaleString()}`;
}

function shouldShowSizeFilter() {
  return currentCategory === "shoes" || currentCategory === "apparel";
}

function getRelevantSizes() {
  let relevantItems = items.filter((item) => {
    const matchesCategory =
      currentCategory === "all" || item.category === currentCategory;

    const matchesAudience =
      currentAudience === "all" || (item.audience || "unisex") === currentAudience;

    const matchesStatus =
      currentStatus === "all" || item.status === currentStatus;

    return matchesCategory && matchesAudience && matchesStatus;
  });

  const sizes = [...new Set(relevantItems.map(item => item.size).filter(Boolean))];

  const apparelOrder = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  if (currentCategory === "apparel") {
    return sizes.sort((a, b) => apparelOrder.indexOf(a) - apparelOrder.indexOf(b));
  }

  return sizes.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  );
}

function renderSizeFilters() {
  if (!shouldShowSizeFilter()) {
    sizeFilterGroup.style.display = "none";
    currentSize = "all";
    sizeFilters.innerHTML = "";
    return;
  }

  sizeFilterGroup.style.display = "block";

  const sizes = getRelevantSizes();

  let buttonsHTML = `
    <button class="filter-btn ${currentSize === "all" ? "active" : ""}" data-size="all">
      All
    </button>
  `;

  sizes.forEach(size => {
    buttonsHTML += `
      <button class="filter-btn ${currentSize === size ? "active" : ""}" data-size="${size}">
        ${size}
      </button>
    `;
  });

  sizeFilters.innerHTML = buttonsHTML;

  const sizeButtons = document.querySelectorAll("#sizeFilters .filter-btn");

  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sizeButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      currentSize = button.dataset.size;
      renderItems();
    });
  });
}

function getCardHTML(item) {
  return `
    <a class="card-link" href="item.html?id=${item.id}">
      <article class="card">
        <div class="card-image-wrap">
          <img class="card-image" src="${item.images[0]}" alt="${item.name}">
          <span class="badge ${item.status}">${formatStatus(item.status)}</span>
          ${item.featured ? `<span class="featured-badge">Featured</span>` : ""}
          ${item.status === "sold" ? `<div class="sold-overlay">SOLD</div>` : ""}
        </div>

        <div class="card-content">
          <p class="card-category">${formatCategory(item.category)} • ${formatAudience(item.audience)}</p>
          <h4 class="card-title">${item.name}</h4>
          <p class="card-meta"><strong>Brand:</strong> ${item.brand}</p>
          <p class="card-meta"><strong>Size:</strong> ${item.size || "N/A"}</p>
          <p class="card-meta"><strong>Condition:</strong> ${item.condition}</p>
          <p class="card-meta"><strong>Photos:</strong> ${item.images.length}</p>
          <p class="card-price">${formatPrice(item.price)}</p>
        </div>
      </article>
    </a>
  `;
}

function sortItems(list) {
  const sorted = [...list];

  switch (currentSort) {
    case "price-low":
      sorted.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
      break;
    case "price-high":
      sorted.sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
      break;
    case "name-az":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-za":
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  return sorted;
}

function renderFeaturedItems() {
  const featuredItems = items.filter(item => item.featured);
  featuredGrid.innerHTML = featuredItems.map(getCardHTML).join("");
}

function renderItems() {
  let filteredItems = items.filter((item) => {
    const matchesCategory =
      currentCategory === "all" || item.category === currentCategory;

    const matchesAudience =
      currentAudience === "all" || (item.audience || "unisex") === currentAudience;

    const matchesStatus =
      currentStatus === "all" || item.status === currentStatus;

    const matchesSize =
      currentSize === "all" || item.size === currentSize;

    const searchText = `
      ${item.name}
      ${item.brand}
      ${item.category}
      ${item.audience}
      ${item.size}
      ${item.condition}
      ${item.status}
    `.toLowerCase();

    const matchesSearch = searchText.includes(currentSearch.toLowerCase());

    return matchesCategory && matchesAudience && matchesStatus && matchesSize && matchesSearch;
  });

  filteredItems = sortItems(filteredItems);

  inventoryCount.textContent = `${filteredItems.length} item${filteredItems.length !== 1 ? "s" : ""}`;

  if (filteredItems.length === 0) {
    itemsGrid.innerHTML = `<p class="empty-state">No items found.</p>`;
    return;
  }

  itemsGrid.innerHTML = filteredItems.map(getCardHTML).join("");
}

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderItems();
});

sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderItems();
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentCategory = button.dataset.category;
    currentSize = "all";
    renderSizeFilters();
    renderItems();
  });
});

audienceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    audienceButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentAudience = button.dataset.audience;
    currentSize = "all";
    renderSizeFilters();
    renderItems();
  });
});

statusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    statusButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentStatus = button.dataset.status;
    currentSize = "all";
    renderSizeFilters();
    renderItems();
  });
});

renderFeaturedItems();
renderSizeFilters();
renderItems();
