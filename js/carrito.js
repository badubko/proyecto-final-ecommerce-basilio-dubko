// JavaScript source code

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function renderCart() {
      const table = document.getElementById("cart-table");
    const totalElement = document.getElementById("total-general");
    table.innerHTML = "";

    let totalGeneral = 0;

      cart.forEach((item, index) => {
        const row = document.createElement("tr");
    const subtotal = item.price * item.quantity;
    totalGeneral += subtotal;

    row.innerHTML = `
    <td>${item.name}</td>
    <td>$${item.price.toLocaleString()}</td>
    <td>
        <input type="number" min="1" value="${item.quantity}" data-index="${index}" class="qty-input">
    </td>
    <td>$${subtotal.toLocaleString()}</td>
    <td><button class="remove-btn" data-index="${index}">Eliminar</button></td>
    `;

    table.appendChild(row);
      });

    totalElement.textContent = totalGeneral.toLocaleString();
    }

    document.addEventListener("change", function(e) {
      if (e.target.classList.contains("qty-input")) {
        const index = e.target.dataset.index;
    const newQty = parseInt(e.target.value);
        if (newQty >= 1) {
        cart[index].quantity = newQty;
    saveCart();
    renderCart();
        }
      }
    });

    document.addEventListener("click", function(e) {
      if (e.target.classList.contains("remove-btn")) {
        const index = e.target.dataset.index;
    cart.splice(index, 1);
    saveCart();
    renderCart();
      }
    });

    document.addEventListener("DOMContentLoaded", renderCart);
