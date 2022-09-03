const recommendCard = () => {
  return `<div class="recommend__card">
    <div class="recommend__img-container">
      <img class="recommend__img" src="/assets/images/menu8.png" alt="">
    </div>
    <div class="recommend__text-container">
      <span class="recommend__card-title">Bennaziana</span>
      <span class="recommend__card-desc">La más completa</span>
      <span class="recommend__card-price">$3600</span>
    </div>
    <button class="btn btn--small">Agregar</button>
  </div>`;
};

const productCard = (product) => {
  const { img, name, text, price } = product;
  return `<div class="products-card">
    <div class="wrap__card">
      <div class="products-card__img-container">
        <img class="products-card__img" src=${img} alt="">
      </div>
      <div class="products-card__text-container">
        <span class="recommend__card-title">${name}</span>
        <span class="recommend__card-desc">${text}</span>
        <span class="recommend__card-price">$${price}</span>
      </div>
      <button class="btn btn--small btn--product">Agregar</button>
    </div>
  </div>`;
};
