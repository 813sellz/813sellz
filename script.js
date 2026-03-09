const itemsGrid = document.getElementById("itemsGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll("#categoryFilters .filter-btn");
const statusButtons = document.querySelectorAll("#statusFilters .filter-btn");

let currentCategory = "all";
let currentStatus = "all";
let currentSearch = "";

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

function renderItems() {
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      currentCategory === "all" || item.category === currentCategory;

    const matchesStatus =
      currentStatus === "all" || item.status === currentStatus;

    const searchText = `
      ${item.name}
      ${item.brand}
      ${item.category}
      ${item.size}
      ${item.condition}
      ${item.price}
      ${item.status}
    `.toLowerCase();

    const matchesSearch = searchText.includes(currentSearch.toLowerCase());

    return matchesCategory && matchesStatus && matchesSearch;
  });

  if (filteredItems.length === 0) {
    itemsGrid.innerHTML = `<p class="empty-state">No items found.</p>`;
    return;
  }

  itemsGrid.innerHTML = filteredItems.map((item) => `
    <a class="card-link" href="item.html?id=${item.id}">
      <article class="card">
        <div class="card-image-wrap">
          <img class="card-image" src="${item.image}" alt="${item.name}">
          <span class="badge ${item.status}">${formatStatus(item.status)}</span>
        </div>

        <div class="card-content">
          <p class="card-category">${formatCategory(item.category)}</p>
          <h4 class="card-title">${item.name}</h4>
          <p class="card-meta"><strong>Brand:</strong> ${item.brand}</p>
          <p class="card-meta"><strong>Size:</strong> ${item.size}</p>
          <p class="card-meta"><strong>Condition:</strong> ${item.condition}</p>
          <p class="card-price">${item.price}</p>
        </div>
      </article>
    </a>
  `).join("");
}

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderItems();
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentCategory = button.dataset.category;
    renderItems();
  });
});

statusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    statusButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentStatus = button.dataset.status;
    renderItems();
  });
});

renderItems();