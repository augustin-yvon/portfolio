// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// Sélectionner tous les "projects__row"
const rows = document.querySelectorAll('.projects__row');

// Ajouter un gestionnaire d'événement "scroll" sur la fenêtre
window.addEventListener('scroll', () => {
  // Boucler sur chaque "projects__row"
  rows.forEach(row => {
    // Vérifier si le haut et le bas de la "projects__row" sont visibles dans la fenêtre
    const rowTop = row.getBoundingClientRect().top;
    const rowBottom = row.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    if (rowTop < windowHeight && rowBottom >= 0) {
      // Ajouter la classe "slide-in" après un délai de 500ms
      setTimeout(() => {
        row.classList.add('slide-in');
        row.classList.remove('slide-in-hidden');
      }, 250);
    } else {
      // Supprimer la classe "slide-in" si elle a été ajoutée précédemment
      row.classList.remove('slide-in');
      row.classList.add('slide-in-hidden');
    }
  });
});

function copyToClipboard(text) {
  // Créer un élément temporaire pour stocker le texte à copier
  var tempInput = document.createElement("input");
  tempInput.value = text;
  
  // Ajouter l'élément temporaire au DOM
  document.body.appendChild(tempInput);
  
  // Sélectionner le texte
  tempInput.select();
  
  // Copier le texte sélectionné dans le presse-papiers
  document.execCommand("copy");
  
  // Retirer l'élément temporaire du DOM
  document.body.removeChild(tempInput);

  var copiedMessage = document.getElementById("copied-message");
  copiedMessage.innerText = "Texte copié";
  copiedMessage.style.display = "block";
  copiedMessage.style.left = (event.clientX + 10) + "px";
  copiedMessage.style.top = (event.clientY + 10) + "px";

  setTimeout(function() {
    copiedMessage.style.display = "none";
  }, 2000);
}

function copyToClipboard(text) {
  // Créer un élément temporaire pour stocker le texte à copier
  var tempInput = document.createElement("input");
  tempInput.value = text;

  // Ajouter l'élément temporaire au DOM
  document.body.appendChild(tempInput);

  // Sélectionner le texte
  tempInput.select();

  // Copier le texte sélectionné dans le presse-papiers
  document.execCommand("copy");

  // Retirer l'élément temporaire du DOM
  document.body.removeChild(tempInput);

  var copiedMessage = document.getElementById("copied-message");
  copiedMessage.innerText = "Texte copié";
  copiedMessage.style.display = "block";
  copiedMessage.style.left = (event.clientX + 10) + "px";
  copiedMessage.style.top = (event.clientY + 10) + "px";

  setTimeout(function() {
    copiedMessage.style.display = "none";
  }, 2000);
}