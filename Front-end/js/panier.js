let localStg = JSON.parse(localStorage.getItem("produits"));

function main() {
  displayArray();
  TotalArray(displayArray);
  toEmptyBasket();
  checkformulaire();
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

function checkformulaire() {
  const validationBtn = document.getElementById("validation-form").value;
  let nameInput = document.getElementById("fname").value;
  let mailInput = document.getElementById("email").value;
  let adressInput = document.getElementById("adr").value;
  let cityInput = document.getElementById("city").value;
  let zipInput = document.getElementById("zip").value;
  let namecardInput = document.getElementById("cname").value;
  let numbercardInput = document.getElementById("ccnum").value;
  let monthcardInput = document.getElementById("expmonth").value;
  let yearcardInput = document.getElementById("expyear").value;
  let cvvcardInput = document.getElementById("cvv").value;
}

main();
