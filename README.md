# Projet 5 - OpenClassrooms " Orinoco" 

<h2>Objectifs</h2>

<p>Créez 4 pages pour une application d'un site e-commerce français<p>
  
 <ul>
   <li>Une page de vue sous forme de liste, montrant tous les articles disponibles
à la vente ;
</li>
   <li>Une page “produit”, qui affiche de manière dynamique l'élément
sélectionné par l'utilisateur et lui permet de personnaliser le produit et de
l'ajouter à son panier ;
</li>
   <li>Une page “panier” contenant un résumé des produits dans le panier, le prix
total et un formulaire permettant de passer une commande. Les données
du formulaire doivent être correctes et bien formatées avant d'être
renvoyées au back-end. Par exemple, pas de texte dans les champs date ;</li>
   <li>Une page de confirmation de commande, remerciant l'utilisateur pour sa
commande, et indiquant le prix total et l'identifiant de commande envoyé
par le serveur</li>
</ul>

<h2>Produits à présentés</h2>

<p>Dans un premier temps, une seule catégorie de produits sera présentée.
</p>
<ul>
   <li>Ours en peluche faits à la main (produit choisi) ;
</li>
   <li>Caméras vintage ;
</li>
   <li>meubles en chêne</li>
</ul>

<h2>Réaliser un plan de test</h2>

<p>Planifiez une suite de tests unitaires pour couvrir au minimum 80 % de la base de
code pour le front-end. Vous devrez formaliser un plan pour atteindre ce résultat,
sans obligation d’écrire ces tests Expliquez quelles lignes seront testées, et quels
“test cases” seront envisagés.</p>

<h2>Informations complémentaires
</h2>

<p>Pour le MVP, la personnalisation du produit ne sera pas fonctionnelle : la page
contenant un seul article aura un menu déroulant permettant à l'utilisateur de
choisir une option de personnalisation, mais celle-ci ne sera ni envoyée au serveur
ni reflétée dans la réponse du serveur.<br>
Le code source devra être indenté et utiliser des commentaires. Il devra
également utiliser des fonctions globales.<br>
Concernant l’API, des promesses devront être utilisées pour éviter les rappels.
Les inputs des utilisateurs doivent être validés avant l’envoi à l’API.</p>

<h2>Technologies utilisées</h2>

<p>HTML, CSS, JavaScript.</p>

<h2>URL des API</h2>

<ul>
  <li>Ours en peluche faits à la main : http://localhost:3000/api/teddies</li>
  <li>Caméras vintage : http://localhost:3000/api/cameras</li>
  <li>Meubles en chêne : http://localhost:3000/api/furniture</li>
</ul>

<h2>Les Inputs</h2>

<p>Pour les routes POST, l’objet contact envoyé au serveur doit contenir les champs
firstName, lastName, address, city et email. Le tableau des produits envoyé au
backend doit être un array de strings products. Les types de ces champs et leur
présence doivent être validés avant l’envoi des données au serveur.</p>

<h2>Tâche à effectuer</h2>
<ul>
  <li>T#1-p5-Réaliser le croquis des 4pages;</li>
  <li>T#2-p5-Réaliser la page menue article;</li>
  <li>T#3-p5-Réaliser la page produit;</li>
  <li>T#4-p5-Réaliser la page panier;</li>
  <li>T#5-p5-Réaliser la page de confirmation de commande;</li>
  <li>T#6-p5-Réaliser un plan de test;</li>
</ul>

<h2>Ouvrir l'application</h2>

<p>Dans le terminal de l'éditeur de code, tapez:</p>
<ul>
<li>cd back-end</li>
<li>node server</li>
</ul>
