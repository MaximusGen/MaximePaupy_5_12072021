let localStg = JSON.parse(localStorage.getItem("produits"));

function main() {
  displayArray();
  TotalArray(displayArray);
  toEmptyBasket();
}

function displayArray() {
  if (localStorage.getItem("produits")) {
    const empty = document.getElementById("empty-basket");
    empty.style.display = "none";
  }

  for (let produit of localStg) {
    const divElt = document.getElementById("produit-add");

    let namequantityElt = document.createElement("p");
    divElt.appendChild(namequantityElt);
    namequantityElt.innerText = `${produit.quantity}x` + produit.name;

    let priceElt = document.createElement("p");
    divElt.appendChild(priceElt);
    priceElt.innerHTML = produit.price * produit.quantity + "€";
  }
}

function TotalArray() {
  let totalPaye = 0;
  localStg.forEach((produits) => {
    totalPaye += produits.price * produits.quantity;
  });

  //Affichage du prix total à payer dans l'addition
  console.log(totalPaye);
  document.getElementById("total-price").textContent = totalPaye + " €";
}

function toEmptyBasket() {
  // Lorsque qu'on clique sur le bouton, le panier se vide ainsi que le localStorage
  const emptybasketElt = document.getElementById("clear-basket");
  emptybasketElt.addEventListener("click", () => {
    localStorage.clear();
    document.location.reload();
  });
}

// -------  Envoi de la requête POST au back-end -------- \\

const validationBtn = document.getElementById("validation-form");

const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const regexCity =
  /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;

validationBtn.addEventListener("click", (event) => {
  let contact = {
    firstName: document.getElementById("firstname").value,
    lastName: document.getElementById("lastname").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    email: document.getElementById("mail").value,
  };

  if (
    (regexMail.test(contact.firstName) == true) &
    (regexName.test(contact.lastName) == true) &
    (regexName.test(contact.address) == true) &
    (regexCity.test(contact.city) == true) &
    (regexAddress.test(contact.email) == true)
  ) {
    event.preventDefault();

    let products = [];
    for (Id of localStg) {
      products.push(Id.id);
    }

    fetch("http://localhost:3000/api/cameras/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contact, products }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("orderId", JSON.stringify(data));
        document.location.href = "confirmation.html";
      })
      .catch((erreur) => console.log("erreur : " + erreur));
  } else {
    alert(
      "Veuillez correctement renseigner le formulaire pour valider votre commande."
    );
  }
});

main();
