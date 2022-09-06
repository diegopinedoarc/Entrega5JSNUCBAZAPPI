const stockProducts = [];

let Product = class {
  constructor(img, id, name, category, text, price, popular) {
    this.img = img;
    this.id = id;
    this.name = name;
    this.category = category;
    this.text = text;
    this.price = price;
    this.popular = popular;
  }
};
let createAndPush = (img, id, name, category, text, price, popular) => {
  return stockProducts.push(
    new Product(img, id, name, category, text, price, popular)
  );
};

// categorias: pizza,burger,fries, individual, wraps(burritos),mexican, float(batidos)
const idRandom = () => {
  let randomId = parseInt(Math.random() * 1000);
  if (stockProducts.some((product) => product.id === randomId)) {
    randomId = parseInt(Math.random() * 1000);
  }
  return randomId;
};
// pizzas
createAndPush(
  "assets/images/products/pizzaCuatroQuesos.jpg",
  idRandom(),
  "Pizza cuatro quesos",
  "pizza",
  "La más completa",
  3200,
  true
);
createAndPush(
  "assets/images/products/pizzaPeperoni.jpg",
  idRandom(),
  "Pizza de pepperoni",
  "float",
  "La más completa",
  3200,
  true
);
createAndPush(
  "assets/images/products/pizzaFugazza.jpg",
  idRandom(),
  "Pizza fugazza",
  "mexican",
  "La más completa",
  3200,
  true
);
createAndPush(
  "assets/images/products/pizzaDeChampiñones.png",
  idRandom(),
  "Pizza de champiñones",
  "mexican",
  "La más completa",
  3200,
  true
);
createAndPush(
  "assets/images/products/pizzaNapolitana.jpg",
  idRandom(),
  "Pizza napolitana",
  "fries",
  "La más completa",
  3200,
  false
);

createAndPush(
  "assets/images/products/pizzaHawaiana.jpg",
  idRandom(),
  "Pizza hawaiana",
  "burger",
  "La más completa",
  3200,
  true
);
createAndPush(
  "assets/images/products/pizzaMargarita.jpg",
  idRandom(),
  "Pizza margarita",
  "wraps",
  "La más completa",
  3200,
  false
);
createAndPush(
  "assets/images/products/pizzaMarinara.jpg",
  idRandom(),
  "Pizza marinara",
  "pizza",
  "La más completa",
  3200,
  true
);
// individual;
createAndPush(
  "assets/images/products/individualPepperoni.png",
  idRandom(),
  "Pepperoni",
  "individual",
  "Disfruta!",
  3200,
  true
);
