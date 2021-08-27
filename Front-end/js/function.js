// Variables Url API & LocalStorage \\

const url = `http://localhost:3000/api/cameras`;
let basket = localStorage.getItem("appareil");
basket = JSON.parse(basket);

// Span dans le header pour indiquer le nombre de produits dans le panier \\

function basketPreview() {
  if (basket.length > 0) {
    let addBasketPreview = document.getElementById("basketPreview");
    let calculBasketPreview = 0;
    for (product of basket) {
      calculBasketPreview += product.quantity;
    }
    addBasketPreview.innerHTML = `Panier <span class="badge rounded-pill  align-middle my-auto span-preview">${calculBasketPreview}</span>`;
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
function displayArticle() {
  for (let i = 0; i < basket.length; i++) {
    const productsBasket = document.getElementById("productsBasket");
    const basketindex = basket.indexOf(basket);

    productsBasket.innerHTML += `
    
        <tr class="text-center">
        <td class="w-25 fs-5 fw-bold">
            <img src="${
              basket[i].image
            }" class="img-fluid img-thumbnail" alt="${
      basket[i].name
    }" style="max-width: 500px;">
        </td>
        <td class="align-middle fs-5 fw-bold">
            <span>${basket[i].name}</span>
        </td>
        <td class="align-middle fs-5 fw-bold">
            <span>${basket[i].option}</span>
        </td>
        <td class="align-middle fs-5 fw-bold">
        <span class="mx-0 mx-lg-3"> ${basket[i].quantity}</span>
        <button id=${`deleteBtn-${basket[i].id}`}><i class="fas fa-trash"></i></button>
        </td>
        <td class="align-middle fs-5 fw-bold">
            <span>${basket[i].price} €</span>
        </td>
        <td class="align-middle bg-light fs-5 fw-bold">
            <span>${basket[i].quantity * basket[i].price} €</span>
        </td>
    </tr>`;
  }
}
