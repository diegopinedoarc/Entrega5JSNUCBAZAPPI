const stockProducts = [];

let Product = class {
  constructor(img, id, name, category, text, price) {
    this.img = img;
    this.id = id;
    this.name = name;
    this.category = category;
    this.text = text;
    this.price = price;
  }
};
let createAndPush = (img, id, name, category, text, price) => {
  return stockProducts.push(new Product(img, id, name, category, text, price));
};

createAndPush(
  "assets/images/products/pizzaCuatroQuesos.jpg",
  2,
  "Pizza cuatro quesos",
  "pizza",
  "La más completa",
  3200
);
createAndPush(
  "assets/images/products/pizzaPeperoni.jpg",
  2,
  "Pizza de pepperoni",
  "pizza",
  "La más completa",
  3200
);
createAndPush(
  "assets/images/products/pizzaFugazza.jpg",
  2,
  "Pizza fugazza",
  "pizza",
  "La más completa",
  3200
);
createAndPush(
  "assets/images/products/pizzaDeChampiñones.png",
  2,
  "Pizza de champiñones",
  "pizza",
  "La más completa",
  3200
);
createAndPush(
  "assets/images/products/pizzaNapolitana.jpg",
  2,
  "Pizza napolitana",
  "pizza",
  "La más completa",
  3200
);

createAndPush(
  "assets/images/products/individualPepperoni.png",
  2,
  "Pepperoni",
  "individual",
  "La más completa",
  3200
);
