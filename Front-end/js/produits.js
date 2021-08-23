// CHERCHER LES ELEMENTS ET LES DISPLAYS
const imgElt = document.getElementById("img");
const h1Elt = document.getElementById("name-produit");
const priceElt = document.getElementById("price-produit");
const stockElt = document.getElementById("stock-produit");
const lensesElt = document.getElementById("lenses");
const btnElt = document.getElementById("buttonAdd");
let quantity = document.getElementById("quantity").value;
const navlinkElt = document.getElementById("nav-link");
const id = getArticleId();

(async function () {
  getArticleId();
  const article = await getArticles(id);
  hydrateArticle(article);
  basketAdd(article);
})();

function getArticleId() {
  return new URL(document.location).searchParams.get("id");
}

async function getArticles(id) {
  return fetch(`http://localhost:3000/api/cameras/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (articles) {
      return articles;
    })
    .catch(function (error) {
      alert("Une erreur est survenue");
    });
}

function hydrateArticle(article) {
  imgElt.src = `${article.imageUrl}`;
  h1Elt.textContent = article.name;
  stockElt.textContent = "En stock";
  priceElt.innerHTML = article.price / 100 + "€";

  for (let i = 0; i < article.lenses.length; i++) {
    let option = document.createElement("option");
    option.innerText = article.lenses[i];
    lensesElt.appendChild(option);
  }
}

//********************** LOCAL STORAGE **********************//

let productinCard = localStorage.getItem("appareil");

if (productinCard === null) {
  productinCard = [];
} else {
  productinCard = JSON.parse(productinCard);
}

function basketAdd(article) {
  btnElt.addEventListener("click", () => {
    addtoCart(article);
  });

  function addtoCart(article) {
    let quantityValue = parseFloat(document.getElementById("quantity").value);
    let lensesValue = lensesElt.value;
    let newiD = id;
    let product = productinCard.find(
      (obj) => obj.id === newiD && obj.option === lensesValue
    );
    if (product) {
      product.quantity += parseInt(quantityValue);
    } else {
      productinCard.push({
        image: article.imageUrl,
        id: newiD,
        name: article.name,
        option: lensesValue,
        quantity: quantityValue,
        price: article.price / 100,
      });
    }
    localStorage.setItem("appareil", JSON.stringify(productinCard));
  }
}

basketPreview();
