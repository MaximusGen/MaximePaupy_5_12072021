basketPreview();

main();

async function main() {
  const articles = await getArticles();

  for (article of articles) {
    displayArticle(article);
  }
}

function getArticles() {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (articles) {
      return articles;
    })
    .catch(function (error) {
      alert(error);
    });
}

function displayArticle(article) {
  const templateElt = document.getElementById("templateArticle");
  const cloneElt = document.importNode(templateElt.content, true);

  cloneElt.getElementById(
    "title-appareil"
  ).textContent = `Appareil Photo ${article.name}`;
  cloneElt.getElementById("img-appareil").src = article.imageUrl;
  cloneElt.getElementById(
    "link-pageProduit"
  ).href = `pages/produits.html?id=${article._id}`;

  document.getElementById("produits").appendChild(cloneElt);
}
