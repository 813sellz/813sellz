const itemDetail = document.getElementById("itemDetail");
const params = new URLSearchParams(window.location.search);
const itemId = Number(params.get("id"));

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

function formatPrice(price) {
  if (price === null) return "Not for sale";
  return `$${price.toLocaleString()}`;
}

const item = items.find((product) => product.id === itemId);

if (!item) {
  itemDetail.innerHTML = `<p class="empty-state">Item not found.</p>`;
} else {
  itemDetail.innerHTML = `
    <div class="item-layout">
      <div class="item-image-box">
        <img src="${item.images[0]}" alt="${item.name}" class="item-main-image" id="mainItemImage">

        <div class="thumbnail-row">
          ${item.images.map((image, index) => `
            <button class="thumb-btn ${index === 0 ? "active-thumb" : ""}" data-image="${image}">
              <img src="${image}" alt="${item.name} thumbnail ${index + 1}" class="thumb-image">
            </button>
          `).join("")}
        </div>
      </div>

      <div class="item-info-box">
        <span class="badge ${item.status} static-badge">${formatStatus(item.status)}</span>
        <p class="card-category">${formatCategory(item.category)}</p>
        <h1 class="item-title">${item.name}</h1>
        <p class="item-brand"><strong>Brand:</strong> ${item.brand}</p>
        <p class="item-brand"><strong>Size:</strong> ${item.size}</p>
        <p class="item-brand"><strong>Condition:</strong> ${item.condition}</p>
        <p class="item-brand"><strong>Photos:</strong> ${item.images.length}</p>
        <p class="item-price">${formatPrice(item.price)}</p>
        <p class="item-description">${item.description || ""}</p>

        <div class="item-actions">
          <a href="https://instagram.com/yourhandle" target="_blank" class="hero-btn">
            Message to Inquire
          </a>
        </div>
      </div>
    </div>
  `;

  const mainImage = document.getElementById("mainItemImage");
  const thumbButtons = document.querySelectorAll(".thumb-btn");

  thumbButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedImage = button.dataset.image;
      mainImage.src = selectedImage;

      thumbButtons.forEach((btn) => btn.classList.remove("active-thumb"));
      button.classList.add("active-thumb");
    });
  });
}
