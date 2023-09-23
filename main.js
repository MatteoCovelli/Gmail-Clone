/* AGGIUNGI MAIL EVENT */

var singleMail = document.querySelector(".mail");
var mailsContainer = document.querySelector(".row");

var promozioni = document.querySelector(".promozioni");
promozioni.addEventListener("click", addMailsPromo);

var principale = document.querySelector(".principale");
principale.addEventListener("click", addMailsPrincipale);

var social = document.querySelector(".social");
social.addEventListener("click", addMailSocial);

var aggiornamenti = document.querySelector(".aggiornamenti");
aggiornamenti.addEventListener("click", addMailAggiornamenti);

var forum = document.querySelector(".forum");
forum.addEventListener("click", addMailForum);

function addMailsPrincipale(e) {
  principale.style.borderBottom = "none";
  social.style.borderBottom = "none";
  aggiornamenti.style.borderBottom = "none";
  forum.style.borderBottom = "none";

  principale.style.borderBottom = "3px solid #0b57d0";
  principale.style.color = "#0b57d0";
  mailsContainer.replaceChildren(singleMail);

  for (var i = 1; i <= 5; i++) {
    var el = singleMail.cloneNode(true);
    el.classList = "mail m" + i;
    singleMail.after(el);
  }
}

function addMailsPromo(e) {
  principale.style.borderBottom = "none";
  social.style.borderBottom = "none";
  aggiornamenti.style.borderBottom = "none";
  forum.style.borderBottom = "none";

  promozioni.style.borderBottom = "3px solid #0b57d0";
  promozioni.style.color = "#0b57d0";

  mailsContainer.replaceChildren(singleMail);

  for (var i = 1; i <= 10; i++) {
    var el = singleMail.cloneNode(true);
    el.classList = "mail m" + i;
    singleMail.after(el);
  }
}

function addMailSocial(e) {
  principale.style.borderBottom = "none";
  social.style.borderBottom = "none";
  aggiornamenti.style.borderBottom = "none";
  forum.style.borderBottom = "none";

  social.style.borderBottom = "3px solid #0b57d0";
  social.style.color = "#0b57d0";
  mailsContainer.replaceChildren(singleMail);

  for (var i = 1; i <= 15; i++) {
    var el = singleMail.cloneNode(true);
    el.classList = "mail m" + i;
    singleMail.after(el);
  }
}

function addMailAggiornamenti(e) {
  principale.style.borderBottom = "none";
  social.style.borderBottom = "none";
  aggiornamenti.style.borderBottom = "none";
  forum.style.borderBottom = "none";

  aggiornamenti.style.borderBottom = "3px solid #0b57d0";
  aggiornamenti.style.color = "#0b57d0";
  mailsContainer.replaceChildren(singleMail);

  for (var i = 1; i <= 20; i++) {
    var el = singleMail.cloneNode(true);
    el.classList = "mail m" + i;
    singleMail.after(el);
  }
}

function addMailForum(e) {
  principale.style.borderBottom = "none";
  social.style.borderBottom = "none";
  aggiornamenti.style.borderBottom = "none";
  forum.style.borderBottom = "none";

  forum.style.borderBottom = "3px solid #0b57d0";
  forum.style.color = "#0b57d0";
  mailsContainer.replaceChildren(singleMail);

  for (var i = 1; i <= 25; i++) {
    var el = singleMail.cloneNode(true);
    el.classList = "mail m" + i;
    singleMail.after(el);
  }
}

/* SEARCH BAR EVENT */

var input = document.querySelector(".input-ricerca");
var close = document.querySelector(".hidden");
close.style.display = "none";

input.addEventListener("focus", entroRicerca);
input.addEventListener("keydown", mostraX);
input.addEventListener("focusout", cliccato);

/* cambio colore background */
function entroRicerca(e) {
  var headerMiddle = document.querySelector(".header-middle");
  headerMiddle.style.backgroundColor = "white";
  headerMiddle.style.boxShadow = "0px 0px 3px 0px rgba(0, 0, 0, 0.1)";
}

/* mostro la x quando scrivo */
function mostraX(e) {
  close.style.display = "inline";
}

/* reimposto il colore di default per la searchbar */
function cliccato(e) {
  var headerMiddle = document.querySelector(".header-middle");
  headerMiddle.style.backgroundColor = "#eaf1fb";
  headerMiddle.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)";
  close.style.display = "none";
}

/* SIDEBAR EVENTS */

var sidebarMenu = document.querySelector(".menu-mail");
var p = sidebarMenu.querySelectorAll("p");

/* New mail event */

var btnScrivi = document.querySelector(".scrivi");
btnScrivi.addEventListener("click", apri);
var closeIconForm = document.querySelector(".chiudi-form");
closeIconForm.addEventListener("click", chiudiForm);

var schermata = document.querySelector(".form-invio-mail");

function apri(e) {
  schermata.style.display = "inline";
}

function chiudiForm(e) {
  schermata.style.display = "none";
}
