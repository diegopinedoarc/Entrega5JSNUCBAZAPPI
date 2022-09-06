//Elementos HTML +---------
const cartBTN = document.querySelector("#cartBTN");
const cartSection = document.querySelector(".cart");
const closeCart = document.querySelector("#close");
const productHero = document.querySelector("#products");
const productsContainer = document.querySelector(".products__container");
const categories = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".categories__caja");
const titleCategory = document.querySelector(".titleCategory");
const recommendContainer = document.querySelector("#containerRecommend");

//--------------------------
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

document.addEventListener("DOMContentLoaded", popularProducts(stockProducts));
recommendContainer.addEventListener("DOMContentLoaded", recommendRandom());
recommendContainer.addEventListener("click", addProduct);
categoriesList.forEach((btn) => {
  btn.addEventListener("click", filterProducts);
});
productsContainer.addEventListener("click", addProduct);
