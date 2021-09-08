// Variables Url API & LocalStorage \\

const url = `http://localhost:3000/api/cameras`;
let basket = localStorage.getItem("appareil");
basket = JSON.parse(basket);

// Span dans le header pour indiquer le nombre de produits dans le panier \\

function basketPreview() {
  if (basket?.length > 0) {
    let addBasketPreview = document.getElementById("basketPreview");
    let calculBasketPreview = 0;
    for (product of basket) {
      calculBasketPreview += product.quantity;
    }
    addBasketPreview.innerHTML = `Panier <span class="span-preview">${calculBasketPreview}</span>`;
  }
}

// Calcul et Affichage du Prix total Panier \\

function CalculTotalBasket() {
  let totalBasket = 0;
  basket.forEach((appareil) => {
    totalBasket = totalBasket + appareil.price * appareil.quantity;
  });
  return totalBasket;
}

function displayTotalPrice() {
  const Totalbasket = document.getElementById("totalPrice");
  Totalbasket.innerHTML = `${CalculTotalBasket()} €`;
}

// Remplir le tableau de la page panier \\

function displayArticleBasket() {
  for (let i = 0; i < basket.length; i++) {
    const productsBasket = document.getElementById("productsBasket");

    productsBasket.innerHTML += `
    
    <tr class="text-center margin-card">
        <td class="w-25 fs-5 fw-bold " data-title="Produit">
            <img src="${
              basket[i].image
            }" class="img-fluid img-thumbnail" alt="${basket[i].name}">
        </td>
        <td class="align-middle fs-5 fw-bold" data-title="Nom">
            <span>${basket[i].name}</span>
        </td>
        <td class="align-middle fs-5 fw-bold" data-title="Option">
            <span>${basket[i].option}</span>
        </td>
        <td class="align-middle fs-5 fw-bold" data-title="Quantité">
        <span class="mx-0 mx-lg-3"> ${basket[i].quantity}</span>
        <button id=${`deleteBtn-${basket[i].id}`}><i class="fas fa-trash"></i></button>
        </td>
        <td class="align-middle fs-5 fw-bold" data-title="Prix">
            <span>${basket[i].price} €</span>
        </td>
        <td class="align-middle bg-light fs-5 fw-bold" data-title="Sous-total">
            <span>${basket[i].quantity * basket[i].price} €</span>
        </td>
    </tr>`;
  }
}
