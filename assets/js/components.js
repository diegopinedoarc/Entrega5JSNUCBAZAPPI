const recommendCard = (product) => {
  const { img, id, name, text, price } = product;
  return `<div class="recommend__card">
    <div class="recommend__img-container">
      <img class="recommend__img" src="/assets/images/menu8.png" alt="">
    </div>
    <div class="recommend__text-container">
      <span class="recommend__card-title">${name}</span>
      <span class="recommend__card-desc">${text}</span>
      <span class="recommend__card-price">${price}</span>
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
        <img class="products-card__img" src=${img} alt="">
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
