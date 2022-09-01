//Elementos HTML +---------
const cartBTN = document.querySelector("#cartBTN");
const cartSection = document.querySelector(".cart");
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
