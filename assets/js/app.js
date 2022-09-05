// test =>
const renderingHtml = (stock) => {
  return (productsContainer.innerHTML = stock
    .map((product) => productCard(product))
    .join(""));
};

// const normalicePrice = (price) => {
//   return Number.parseFloat(price).toFixed(2);
// };

const popularProducts = (stockProducts) => {
  const popularList = stockProducts.filter(
    (product) => product.popular === true
  );
  console.log(popularList);
  renderingHtml(popularList);
};

const filterCategory = ({ target }) => {};
