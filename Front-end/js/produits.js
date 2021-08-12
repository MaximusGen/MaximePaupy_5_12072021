// CHERCHER LES ELEMENTS ET LES DISPLAYS
const imgElt = document.getElementById("img");
const h1Elt = document.getElementById("name-produit");
const priceElt = document.getElementById("price-produit");
const stockElt = document.getElementById("stock-produit");
const lensesElt = document.getElementById("lenses");
const btnElt = document.getElementById("buttonAdd");
const numElt = document.getElementById("AppareilNum");
const id = getArticleId();

(async function () {
  getArticleId();
  const article = await getArticles(id);
  hydrateArticle(article);
})();

function getArticleId() {
  return new URL(location.href).searchParams.get("id");
}

function getArticles(id) {
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
  priceElt.textContent = `${article.price / 100}€`;
  stockElt.textContent = "En stock";

  for (let i = 0; i < article.lenses.length; i++) {
    let option = document.createElement("option");
    option.innerText = article.lenses[i];
    lensesElt.appendChild(option);
  }
}

//********************** LOCAL STORAGE **********************//

function AddProdBtn() {
  btnElt.addEventListener("click", () => {
    if (numElt.value > 0 && numElt.value < 100) {
      // ------ Création du produit qui sera ajouté au panier
      let produitAdd = {
        name: h1Elt.innerHTML,
        price: priceElt.innerText,
        quantity: parseFloat(document.getElementById("AppareilNum").value),
        _id: id,
      };

      let arrayProduits = [];

      // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau , puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
      if (localStorage.getItem("produits") !== null) {
        arrayProductsInCart = JSON.parse(localStorage.getItem("produits"));
      }
      arrayProduits.push(produitAdd);
      localStorage.setItem("produits", JSON.stringify(arrayProduits));
      alert("Vous avez ajouté ce produit dans votre panier");
    }
  });
}

AddProdBtn();
