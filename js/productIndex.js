const shopContent = document.querySelector("#shopContent");
const cart = [];

productsTosell.forEach(product => {
  const content = document.createElement("div");
  content.classList.add("cards");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");

  const img = document.createElement("img");
  img.src = product.imgProduct;
  img.alt = product.productName;

  imgContainer.appendChild(img);

  content.appendChild(imgContainer);

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");

  const productName = document.createElement("h2");
  productName.textContent = product.productName;

  const price = document.createElement("h3");
  price.textContent = `$${product.price}`;

  const description = document.createElement("p");
  description.textContent = product.description;

  infoContainer.appendChild(productName);
  infoContainer.appendChild(price);

  content.appendChild(infoContainer);
  content.innerHTML += `
       <p> ${product.description}</p>
  `;

  shopContent.append(content);

  const btnInfo = document.createElement("div");
  btnInfo.classList.add("btnInfo");

  const btnDetails = document.createElement("button");
  btnDetails.classList.add("btnDetails");
  btnDetails.innerText = "Details";

  const btnBuy = document.createElement("button");
  btnBuy.classList.add("btnBuy");
  btnBuy.innerText = "Buy";

  btnInfo.appendChild(btnDetails);
  btnInfo.appendChild(btnBuy);
  content.appendChild(btnInfo);

  btnBuy.addEventListener("click", () => {
    const repeat = cart.some(
      (repeatedProduct) => repeatedProduct.id == product.id
    );

    if (repeat) {
      cart.map((prod) => {
        if (prod.id === product.id) {
          prod.quantity++;
          displayCartCounter();
        }
      });
    } else {
      cart.push({
        id: product.id,
        productName: product.productName,
        price: product.price,
        quantity: product.quantity,
        imgProduct: product.imgProduct,
        description: product.description,
      });
      displayCartCounter();
    }
  });
})


