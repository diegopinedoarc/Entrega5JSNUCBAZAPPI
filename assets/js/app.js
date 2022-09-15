const renderingHtml = (stock) => {
  return (productsContainer.innerHTML = stock
    .map((product) => productCard(product))
    .join(""));
};

const popularProducts = (stockProducts) => {
  const popularList = stockProducts.filter(
    (product) => product.popular === true
  );
  renderingHtml(popularList);
};

const showTotal = (cartList) => {
  return (total.innerHTML = `$${cartList
    .reduce((acc, cur) => Number(acc) + Number(cur.price) * Number(cur.cant), 0)
    .toFixed(2)}`);
};

const addToCart = (e) => {
  if (!e.target.classList.contains("product")) return;
  const products = [...stockProducts];
  products.forEach((product) => {
    if (product.id == Number(e.target.dataset.id)) {
      const AddedProduct = {
        id: e.target.dataset.id,
        name: e.target.dataset.name,
        descrip: e.target.dataset.bid,
        img: e.target.dataset.img,
        price: e.target.dataset.price,
      };
      const existingCartItem = cart.find((item) => item.id === AddedProduct.id);
      if (existingCartItem) {
        cart = cart.map((item) => {
          return item.id === AddedProduct.id
            ? { ...item, cant: Number(item.cant) + 1 }
            : item;
        });
      } else {
        cart = [...cart, { ...AddedProduct, cant: 1 }];
      }
      saveLocalStorage(cart);
      renderCart(cart);
      showTotal(cart);
      showCant(cart);
    }
  });
};
const handleQuantity = (e) => {
  if (e.target.classList.contains("less")) {
    const existingCartItem = cart.find(
      (item) => item.id === e.target.dataset.id
    );
    if (existingCartItem.cant === 1) {
      if (window.confirm("¿Desea Eliminar el producto del carrito?")) {
        cart = cart.filter((prod) => prod.id !== existingCartItem.id);
        saveLocalStorage(cart);
        renderCart(cart);
        showTotal(cart);
        disableBuyBtn();
        showCant(cart);

        return;
      }
    }
    cart = cart.map((item) => {
      return item.id === existingCartItem.id
        ? item.cant > 1
          ? { ...item, cant: Number(item.cant) - 1 }
          : { ...item, cant: 1 }
        : item;
    });
  } else if (e.target.classList.contains("more")) {
    const existingCartItem = cart.find(
      (item) => item.id === e.target.dataset.id
    );
    cart = cart.map((item) => {
      return item.id === existingCartItem.id
        ? { ...item, cant: Number(item.cant) + 1 }
        : item;
    });
  }
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  disableBuyBtn();
};
const disableBuyBtn = () => {
  if (!cart.length) {
    buyBTN.classList.add("disabled");
  } else {
    buyBTN.classList.remove("disabled");
  }
};

const completeBuy = () => {
  if (!cart.length) return;
  if (window.confirm("¿Desea finalizar su compra?")) {
    localStorage.removeItem("cart");
    window.location.reload();
  }
};

const filterCategory = (e) => {
  const selectedCategory = e.target.dataset.category;
  const categories = [...categoriesList];
  categories.forEach((category) => {
    if (category.dataset.category !== selectedCategory) {
      category.classList.remove("active");
    } else {
      category.classList.add("active");
    }
  });
};

const filterProducts = (e) => {
  if (!e.target.classList.contains("categories__caja")) return;
  const target = e.target;
  if (target.classList.contains("active")) {
    target.classList.remove("active");
    titleCategory.innerHTML = "Lo más populares";
    return popularProducts(stockProducts);
  } else {
    filterCategory(e);
  }
  const filterProductCategory = stockProducts.filter(
    (product) => product.category === target.dataset.category.toLowerCase()
  );
  titleCategory.innerHTML = capitaliceStr(target.innerText);
  renderingHtml(filterProductCategory);
};

const recommendRandom = () => {
  let randomArray = [];
  for (let i = 0; i < stockProducts.length; i++) {
    const element =
      stockProducts[parseInt(Math.random() * stockProducts.length)];
    if (!randomArray.some((e) => e.id === element.id)) {
      randomArray.push(element);
    }
    if (randomArray.length === 3) {
      break;
    }
  }
  recommendContainer.innerHTML = randomArray
    .map((product) => recommendCard(product))
    .join("");
};
const firstLetterMayus = (strs) => {
  const str = strs.trim();
  const firstLetterUpper = str.charAt(0).toUpperCase();
  const sliceStr = str.slice(1);
  const strFirstLetterMayus = firstLetterUpper + sliceStr;
  return strFirstLetterMayus;
};
const capitaliceStr = (strs) => {
  const strsNormalice = strs.toLowerCase();
  const strArr = strsNormalice.split(" ");
  let capitaliceString = "";
  strArr.forEach((str) => (capitaliceString += `${firstLetterMayus(str)} `));
  return capitaliceString.trim();
};
