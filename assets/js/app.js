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

const addProduct = ({ target }) => {
  if (!target.classList.contains("product")) return;
  console.log(target.dataset.name);
};

const filterCategory = ({ target }) => {};
