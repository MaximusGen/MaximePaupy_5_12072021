// CHERCHER LES ELEMENTS ET LES DISPLAYS
const imgElt = document.getElementById("img");
const h1Elt = document.getElementById("name-produit");
const priceElt = document.getElementById("price-produit");
const stockElt = document.getElementById("stock-produit");
const lensesElt = document.getElementById("lenses");
const btnElt = document.getElementById("buttonAdd");

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
      alert("Une erreur est survenu");
    });
}

function hydrateArticle(article) {
  imgElt.src = `${article.imageUrl}`;
  h1Elt.textContent = `Appareil Photo ${article.name}`;
  priceElt.textContent = `Prix: ${article.price / 100}€`;
  stockElt.textContent = "En stock";

  for (let i = 0; i < article.lenses.length; i++) {
    let option = document.createElement("option");
    option.innerText = article.lenses[i];
    lensesElt.appendChild(option);
  }
}

//  LOCAL STORAGE

if (localStorage.getItem("userPanier")) {
  console.log("le panier de l'utilisateur existe dans le localStorage");
} else {
  console.log(
    "Le panier n'existe pas, il va être créer et l'envoyer dans le localStorage"
  );

  //Le panier est un tableau de produits
  let panierInit = [];
  localStorage.setItem("userPanier", JSON.stringify(panierInit));
}

//L'user a maintenant un panier
let userPanier = JSON.parse(localStorage.getItem("userPanier"));

//Au clic de l'user pour mettre le produit dans le panier

addPanier = () => {
  btnElt.addEventListener("click", function () {
    const produit = getArticles();
    userPanier.push(produit);
    localStorage.setItem("userPanier", JSON.stringify(userPanier));
    console.log("Administration : le produit a été ajouté au panier");
    alert("Vous avez ajouté ce produit dans votre panier");
  });
};

addPanier();
