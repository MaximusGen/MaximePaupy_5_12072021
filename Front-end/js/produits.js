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
  const imgElt = document.getElementById("img");
  const h1Elt = document.getElementById("name-produit");
  const h2Elt = document.getElementById("price-produit");
  const stockElt = document.getElementById("stock-produit");
  const lensesElt = document.getElementById("lenses");

  imgElt.src = `${article.imageUrl}`;
  h1Elt.textContent = `Appareil Photo ${article.name}`;
  h2Elt.textContent = `Prix: ${article.price / 100}€`;
  stockElt.textContent = "En stock";

  for (let i = 0; i < article.lenses.length; i++) {
    let option = document.createElement("option");
    option.innerText = article.lenses[i];
    lensesElt.appendChild(option);
  }
}
