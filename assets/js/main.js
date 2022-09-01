//Seteo cart en localStorage
let cart = json.parse(localStorage.getItem("cart")) || [];
//Envio al localStorage de la lista del cart
const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};
