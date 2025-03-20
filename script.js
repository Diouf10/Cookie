// créer un cookie

document.cookie = "username=John Doe";

// Afficher un cookie
//alert(document.cookie);

// modifier un cookie
document.cookie = "username=Robert Smith";

// Supprimer un cookie
document.cookie = "username="; 

// options de cookie

document.cookie = "username=John Doe; path=/admin;"; 
document.cookie = "username=John Doe; path=/admin; domain=example.com";

// expiration de cookie en date, avec le nb de secondes en 1 an
let date = new Date(Date.now() + 31536000000);
date = date.toUTCString();

// expiration de cookie
document.cookie = "username=John Doe; path=/admin; domain=example.com; expires=" + date; 

// durée de vie (secondes) de cookie
document.cookie = "username=John Doe; path=/admin; domain=example.com; max-age=" + 31536000000; 