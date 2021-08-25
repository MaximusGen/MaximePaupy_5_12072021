const order = JSON.parse(localStorage.getItem("orderId"));

const idOrder = document.getElementById("product-id");
const orderfirstName = document.getElementById("order-firstname");
const orderfirstName2 = document.getElementById("order-firstname2");
const orderlastName = document.getElementById("order-lastname");
const orderAddress = document.getElementById("order-address");
const orderCity = document.getElementById("order-city");
const orderMail = document.getElementById("order-mail");

function displayId() {
  idOrder.innerText = `${order.orderId}`;
  orderfirstName.innerText = `${order.contact.firstName}`;
  orderfirstName2.innerText = `${order.contact.firstName}`;
  orderlastName.innerText = `${order.contact.lastName}`;
  orderMail.innerText = `${order.contact.email}`;
  orderCity.innerText = `${order.contact.city}`;
  orderAddress.innerText = `${order.contact.address}`;
}

displayId();

// Retour à l'accueil avec le LocalStorage qui se vide \\
const BackHome = document.getElementById("nav-link");

BackHome.addEventListener("click", () => {
  localStorage.clear();
});

// Bouton pour imprimer la page \\
const btnPrint = document.getElementById("order-print");

btnPrint.addEventListener("click", () => {
  window.print();
});
