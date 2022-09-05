//Elementos HTML +---------
const cartBTN = document.querySelector("#cartBTN");
const cartSection = document.querySelector(".cart");
const closeCart = document.querySelector("#close");
const productHero = document.querySelector("#products");
const productsContainer = document.querySelector(".products__container");
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

document.addEventListener("DOMContentLoaded", () => {
  popularProducts(stockProducts);
  const btnAdd = document.querySelectorAll(".product");
  console.log(btnAdd);
  btnAdd.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("btn");
    });
  });
});
