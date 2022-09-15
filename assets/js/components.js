const recommendCard = (product) => {
  const { img, id, name, text, price } = product;
  return `<div class="recommend__card">
    <div class="recommend__img-container">
      <img class="recommend__img" src=${img} alt="${img}">
    </div>
    <div class="recommend__text-container">
      <span class="recommend__card-title">${name}</span>
      <span class="recommend__card-desc">${text}</span>
      <span class="recommend__card-price">$${price}</span>
    </div>
    <button class="btn btn--small product"
    data-img='${img}'
        data-id='${id}'
        data-name='${name}'
        data-bid='${text}'
        data-price='${price}'>Agregar</button>
  </div>`;
};

const productCard = (product) => {
  const { img, id, name, text, price } = product;
  return `<div class="products-card">
    <div class="wrap__card">
      <div class="products-card__img-container">
        <img class="products-card__img" src=${img} alt="${img}">
      </div>
      <div class="products-card__text-container">
        <span class="recommend__card-title" data-name="${name}">${name}</span>
        <span class="recommend__card-desc">${text}</span>
      </div>
      <div class="products-card__container">
        <span class="recommend__card-price">$${price}</span>
        <button class="btn btn--small btn--product product"
        data-img='${img}'
        data-id='${id}'
        data-name='${name}'
        data-bid='${text}'
        data-price='${price}'
        >Agregar</button>   
         </div>
    </div>
  </div>`;
};

const renderCardCart = (product) => {
  const { img, id, name, text, price, cant } = product;
  return `<div class = "cartBox">
<img class="imgCart" src ="${img}">
<div class="cartBox_info">
  <p class="productName"> ${name} </p>
  <span class="price"> $${price * cant}</span>
</div>
<div class="moreLess">
  <span class= "less" data-id=${id}>-</span>
  <span class="cant">${cant}</span>
  <span class="more" data-id=${id}>+</span>
</div>
</div>`;
};
const renderCart = (cartList) => {
  if (!cartList.length) {
    cartContainer.innerHTML = `<p class="empty-msg">No hay productos en el carrito</p>`;
    return;
  }
  cartContainer.innerHTML = cart.map(renderCardCart).join("");
  showTotal(cart);
  showCant(cart);
};

const showCant = (cart) => {
  console.log(cart);
  console.log(cart.length);
  if (cart.length === 0) {
    console.log("aaa");
    cantCart.innerHTML = "";
    cantCart.classList.remove("cantActive");
    return;
  }
  cantCart.classList.add("cantActive");
  cantCart.innerHTML = `${cart.length}`;
};
