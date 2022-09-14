//Elementos HTML +---------
const cartBTN = document.querySelector("#cartBTN");
const cartSection = document.querySelector(".cart");
const closeCart = document.querySelector("#close");
const cartContainer = document.querySelector(".cart__Container");
const productHero = document.querySelector("#products");
const productsContainer = document.querySelector(".products__container");
const categories = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".categories__caja");
const titleCategory = document.querySelector(".titleCategory");
const recommendContainer = document.querySelector("#containerRecommend");
const total = document.querySelector(".total");
const buyBTN = document.querySelector(".buy-btn");

//Seteo cart en localStorage
// let cart = json.parse(localStorage.getItem("cart")) || [];
//Envio al localStorage de la lista del cart
// const saveLocalStorage = (cartList) => {
//   localStorage.setItem("cart", JSON.stringify(cartList));
// };

cartBTN.addEventListener("click", (e) => {
  e.preventDefault();
  cartSection.classList.toggle("display");
});
closeCart.addEventListener("click", (e) => {
  e.preventDefault();
  cartSection.classList.toggle("display");
});
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};
// document.addEventListener("DOMContentLoaded", popularProducts(stockProducts));
// recommendContainer.addEventListener("DOMContentLoaded", recommendRandom());
// categoriesList.forEach((btn) => {
//   btn.addEventListener("click", filterProducts);
// });

// recommendContainer.addEventListener("click", addToCart);
// productsContainer.addEventListener("click", addToCart);

const init = () => {
  document.addEventListener("DOMContentLoaded", popularProducts(stockProducts));
  recommendContainer.addEventListener("DOMContentLoaded", recommendRandom());
  categoriesList.forEach((btn) => {
    btn.addEventListener("click", filterProducts);
  });
  document.addEventListener("DOMContentLoaded", renderCart(cart));
  // document.addEventListener("DOMContentLoaded", showTotal(cart));
  recommendContainer.addEventListener("click", addToCart);
  productsContainer.addEventListener("click", addToCart);
  buyBTN.addEventListener("click", completeBuy);
  cartContainer.addEventListener("click", handleQuantity);
};

init();
