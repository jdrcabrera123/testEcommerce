const modalOverlay = document.querySelector("#modal-overlay");
const modalContainer = document.querySelector("#modal-container");
const cartBtn = document.querySelector("#cart-btn");
const cartCounter = document.querySelector(".cart-counter");

const displayCart = () => {
  modalContainer.innerHTML = "";
  modalOverlay.style.display = "block";
  modalContainer.style.display = "block";

  //   Modal Header
  const modalHeader = document.createElement("div");
  modalHeader.className = "modalHeader";

  const modalTitle = document.createElement("div");
  modalTitle.innerText = "Shopping Cart";
  modalTitle.className = "modal-title";
  modalHeader.append(modalTitle);

  modalContainer.append(modalHeader);

  const modalClosed = document.createElement("div");
  modalClosed.innerText = "❌";
  modalClosed.className = "modal-closed";

  modalClosed.addEventListener("click", () => {
    modalContainer.style.display = "none";
    modalOverlay.style.display = "none";
  });

  modalHeader.append(modalClosed);

  //   Modal Products

  if (cart.length > 0) {
    cart.forEach((product) => {
      const modalProduct = document.createElement("div");
      modalProduct.className = "modal-product";
      modalProduct.innerHTML = `
        <div class="product">
        <img src="${product.imgProduct}" class="product-img" />
        <div class="product-info">
          <h4>${product.productName}</h4>
        </div>
        <div class="quantity">
          <span class="quantity-btn-decrease">-</span>
          <span class="quantity-input">${product.quantity}</span>
          <span class="quantity-btn-increase">+</span>
        </div>
        <div class="price">$ ${product.price * product.quantity}</div>
        <div class="delete-product">🗑️</div>
      </div>`;
      modalContainer.append(modalProduct);

      const btnDecrease = modalProduct.querySelector(".quantity-btn-decrease");
      const btnIncrease = modalProduct.querySelector(".quantity-btn-increase");
      const btnDelete = modalProduct.querySelector(".delete-product");

      btnDecrease.addEventListener("click", () => {
        if (product.quantity !== 1) {
          product.quantity--;
          displayCart();
          displayCartCounter();
        }
      });

      btnIncrease.addEventListener("click", () => {
        product.quantity++;
        displayCart();
        displayCartCounter();
      });

      btnDelete.addEventListener("click", () => {
        deleteCartProduct(product.id);
      });
    });
    const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
 <div class="total-price">Total: ${total}</div>
 `;
    modalContainer.append(modalFooter);

    const btnMErcadoPago = document.createElement("button");
    btnMErcadoPago.id = "wallet_container";
    btnMErcadoPago.addEventListener("click", function () {
      window.open("https://www.mercadopago.com.co/", "_blank");
    });
    btnMErcadoPago.innerHTML = "Pay with Mercadopago";
    modalFooter.append(btnMErcadoPago);
  } else {
    const modalTextEmpty = document.createElement("h2");
    modalTextEmpty.className = "modal-product";
    modalTextEmpty.innerText = "Your shopping cart is empty.";
    modalContainer.append(modalTextEmpty);
  }

  // Modal Footer
};

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
  const idFound = cart.findIndex((element) => element.id === id);
  console.log(idFound);
  cart.splice(idFound, 1);
  displayCart();
  displayCartCounter();
};

const displayCartCounter = () => {
  const cartLength = cart.reduce((acc, el) => acc + el.quantity, 0);
  if (cartLength > 0) {
    cartCounter.style.display = "block";
    cartCounter.innerText = cartLength;
  } else {
    cartCounter.style.display = "none";
  }
};
