const categories = document.querySelector(".categories")
const categoriesList = document.querySelectorAll(".categories__caja")


const init = () => {
    categories.addEventListener("click", filterProducts);
    };
    
    
init ();