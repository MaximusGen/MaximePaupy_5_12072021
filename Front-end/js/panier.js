basketPreview();

// Afficher les produits dans le panier \\

displayArticleBasket();

// Supprimer un produit dans le panier \\

function deleteProduct() {
  for (let i = 0; i < basket.length; i++) {
    const btnDelete = document.getElementById(`deleteBtn-${basket[i].id}`);

    btnDelete.addEventListener("click", (e) => {
      e.preventDefault();
      const filteredBasket = basket.filter((el) => el.id !== basket[i].id);
      localStorage.setItem("appareil", JSON.stringify(filteredBasket));
      window.location.reload();
    });
  }
}

deleteProduct();

// Affiche le prix Total \\

displayTotalPrice();

// Bouton pour supprimer le panier \\

const btnclearBasket = document.getElementById("clearBasket");
btnclearBasket.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

// Validation du formulaire et Post du formulaire \\

const btnorder = document.getElementById("postbtn");
const nameRegex =
  /^[a-zàâäéèêëîïôöùûüÿçæœA-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇÆ]{1,}[a-zàâäéèêëîïôöùûüÿçæœA-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇÆ .'-]*$/;
const addressRegex =
  /[0-9a-zàâäéèêëîïôöùûüÿçæœA-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇÆ]{1,}[a-zàâäéèêëîïôöùûüÿçæœA-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇÆ ,.'-/]*$/;
const cityRegex =
  /^[a-zàâäéèêëîïôöùûüÿçæœA-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇÆ]{1,}[a-zàâäéèêëîïôöùûüÿçæœA-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇÆ'-]*$/;
const emailRegex = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;
const checkbox = document.getElementById("checkbox");

btnorder.addEventListener("click", (e) => {
  e.preventDefault();
  validForm();
});

// Validation du formulaire \\

function validForm() {
  if (
    nameRegex.test(document.getElementById("firstname").value) !== true ||
    nameRegex.test(document.getElementById("lastname").value) !== true ||
    addressRegex.test(document.getElementById("address").value) !== true ||
    cityRegex.test(document.getElementById("city").value) !== true ||
    emailRegex.test(document.getElementById("mail").value) !== true
  ) {
    alert("Veuillez remplir le formulaire");
  } else {
    sendOrder();
  }
}

// Envoie du POST pour la confirmation de commande \\

function sendOrder() {
  let contacts = {
    firstName: document.getElementById("firstname").value,
    lastName: document.getElementById("lastname").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    email: document.getElementById("mail").value,
  };

  let product = [];
  for (let i = 0; i < basket.length; i++) {
    product.push(basket[i].id);
  }

  fetch(`${url}/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify({
      contact: contacts,
      products: product,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("orderId", JSON.stringify(data));
      window.location.href = "./confirmation.html";
    })
    .catch((error) => {
      alert("Fatal erreur : " + error);
    });
}
