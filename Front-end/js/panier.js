basketPreview();

// Afficher les produits dans le panier \\

displayArticle();

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
const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const regexCity =
  /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
const checkbox = document.getElementById("checkbox");

btnorder.addEventListener("click", (e) => {
  e.preventDefault();
  validForm();
});

function validForm() {
  if (
    (regexName.test(document.getElementById("firstname").value) == false) &
    (regexName.test(document.getElementById("lastname").value) == false) &
    (regexAddress.test(document.getElementById("address").value) == false) &
    (regexCity.test(document.getElementById("city").value) == false) &
    (regexName.test(document.getElementById("mail").value) == false) &
    (checkbox.checked == false)
  ) {
    alert("Veuillez remplir le formulaire");
  } else {
    sendOrder();
  }
}

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
      window.location.href = "confirmation.html";
    })
    .catch((error) => {
      alert("Fatal erreur : " + error);
    });
}
