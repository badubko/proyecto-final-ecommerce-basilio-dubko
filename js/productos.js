// JavaScript source code

<script>const cart = JSON.parse(localStorage.getItem("cart")) || [];

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    }

    function updateCartCount() {
      const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById("cart-count").textContent = count;
    }

    function addToCart(name, price) {
      const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.quantity++;
      } else {
        cart.push({ name, price, quantity: 1 });
      }
    saveCart();
    }

    function renderProducts(products) {
      const container = document.getElementById("product-container");
      products.forEach(product => {
        const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" width="100%">
        <p class="caption">${product.name}</p>
        <p>Precio: $<span class="precio">${product.price.toLocaleString()}</span></p>
        <button class="add-to-cart">Agregar al Carrito</button>
        `;

        div.querySelector(".add-to-cart").addEventListener("click", () => {
            addToCart(product.name, product.price);
        });

        container.appendChild(div);
      });
    }

        const apiProducts = [
        {name: "Calibre Digital Mitutoyo", price: 450000, image: "../images/calibre_mitutoyo.jpg" },
        {name: "Agujeradora 13mm Makita", price: 970000, image: "../images/agujeradora-13mm-makita-1.jpg" },
        {name: "Juego Mechas EZETA con Organizador", price: 360000, image: "../images/Juego_mechas_Ezeta_con_organizador.jpg" },
        {name: "Juego de destornilladores Stanley", price: 340000, image: "../images/destornilladores-aislados_Stanley.png" }
        ];

    document.addEventListener("DOMContentLoaded", () => {
            renderProducts(apiProducts);
        updateCartCount();
    });</script>