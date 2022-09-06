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



//-----edgardo------//
const filterCategory = e => {
  const selectedCategory = e.target.dataset.category;
  const categories = [...categoriesList];
  categories.forEach(category=>{
    if(category.dataset.category !== selectedCategory){
      category.classList.remove("active")
    }else{
      category.classList.add("active")
    }
  })
};

const filterProducts = e =>{
  if(!e.target.classList.contains("categories__caja"))
  return;
  filterCategory (e);
  if(e.target.dataset.category.toLowerCase()) {
    products.innerHTML = "";
    renderingHtml (e.target.dataset.category)
  }
}
//-----edgardo------//