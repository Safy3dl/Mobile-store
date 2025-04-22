let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function updateCartCount() {
  document.getElementById("cart-count").textContent = cartItems.length;
}

function updateCartPopup() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartList.innerHTML = "";

  let total = 0;
  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeItem(${index})" style="float:right;color:red;border:none;background:none;cursor:pointer;">×</button>
    `;
    total += item.price;
    cartList.appendChild(li);
  });

  cartTotal.innerHTML = `<strong>Total:</strong> $${total}`;
}


function addToCart(name, price) {
  cartItems.push({ name, price });
  saveCart();
  updateCartCount();
  updateCartPopup();
  alert(`${name} has been added to your cart!`);
}

function removeItem(index) {
  cartItems.splice(index, 1);
  saveCart();
  updateCartCount();
  updateCartPopup();
}

function saveCart() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function toggleCart() {
  const popup = document.getElementById("cart-popup");
  const button = document.querySelector(".toggle-cart-btn");
  popup.classList.toggle("show");
  button.textContent = popup.classList.contains("show") ? "Hide Cart" : "Show Cart";
}

window.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  updateCartPopup();
});

