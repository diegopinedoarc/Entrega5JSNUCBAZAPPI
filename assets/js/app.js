// test =>
const popularProducts = (stockProducts) => {
  productsContainer.innerHTML = stockProducts
    .map((product) => productCard(product))
    .join("");
};
