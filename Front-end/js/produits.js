// CHERCHER LES ELEMENTS ET LES DISPLAYS
const imgElt = document.getElementById("img");
const h1Elt = document.getElementById("name-produit");
const priceElt = document.getElementById("price-produit");
const stockElt = document.getElementById("stock-produit");
const lensesElt = document.getElementById("lenses");
const btnElt = document.getElementById("buttonAdd");
const numElt = document.getElementById("AppareilNum");

(async function () {
  const articleId = getArticleId();
  const article = await getArticles(articleId);
  hydrateArticle(article);
})();

function getArticleId() {
  return new URL(location.href).searchParams.get("id");
}

function getArticles(articleId) {
  return fetch(`http://localhost:3000/api/cameras/${articleId}`)
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
  priceElt.textContent = `${article.price / 100}€`;
  stockElt.textContent = "En stock";

  for (let i = 0; i < article.lenses.length; i++) {
    let option = document.createElement("option");
    option.innerText = article.lenses[i];
    lensesElt.appendChild(option);
  }
}

//********************** LOCAL STORAGE **********************//

function addToCart() {
  btnElt.addEventListener("click", () => {
    if (numElt.value > 0 && numElt.value < 100) {
      // ------ Création du produit qui sera ajouté au panier
      let produitAdd = {
        name: h1Elt.innerHTML,
        price: priceElt.innerText,
        quantity: parseFloat(document.getElementById("AppareilNum").value),
      };

      // ----------------- Gestion du localStorage
      let arrayProduits = [];

      // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
      if (localStorage.getItem("produits") !== null) {
        arrayProductsInCart = JSON.parse(localStorage.getItem("produits"));

        // Si le LS est vide, on le crée avec le produit ajouté
      }
      arrayProduits.push(produitAdd);
      localStorage.setItem("produits", JSON.stringify(arrayProduits));
    }
  });
}

addToCart();
