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

var competences = {
  HTML: {
    summary: "Permet de structurer le contenu d'une page web en utilisant des balises",
  },
  CSS: {
    summary: "Langage informatique pour styliser et mettre en forme les éléments d'une page web en appliquant des règles de style.",
  },
  JAVASCRIPT: {
    summary: "Langage de programmation pour ajouter des fonctionnalités interactives et dynamiques aux pages web.",
  },
  PYTHON: {
    summary: "Langage de programmation polyvalent pour diverses applications, y compris l'IA et l'analyse de données.",
  },
  PHP: {
    summary: "Langage de programmation côté serveur pour la création de sites web dynamiques avec interaction avec des bases de données.",
  },
  SYMFONY: {
    summary: "Framework PHP pour le développement rapide d'applications web robustes et évolutives.",
  },
  SQL: {
    summary: "Langage de programmation pour gérer les bases de données.",
  },
  JAVA: {
    summary: "Pangage de programmation polyvalent pour créer divers types d'applications.",
  },
  GITHUB: {
    summary: "Plateforme pour stocker et collaborer sur des projets informatiques entre developpeurs.",
  },
  SHOPIFY: {
    summary: "Plateforme en ligne qui permet de créer une boutique en ligne et de gérer les ventes.",
  },
  WORDPRESS: {
    summary: "Plateforme de création de sites web et de blogs avec un CMS facile à utiliser.",
  },
  FLASK: {
    summary: "Framework web léger et flexible en Python pour créer rapidement des applications web avec des fonctionnalités de base.",
  },
  SQLITE3: {
    summary: "Bibliothèque de gestion de base de données relationnelle intégrable pour stocker et gérer des données localement.",
  },
  DSERS: {
    summary: "Application tierce pour Shopify pour importer des produits AliExpress et gérer les commandes.",
  },
  LOOX: {
    summary: "Application tierce pour Shopify pour collecter et publier des avis de clients sous forme de photos et de vidéos.",
  },
  SPRING: {
    summary: "Framework Java pour le développement d'applications avec des fonctionnalités telles que la configuration flexible, la sécurité et la gestion de transactions.",
  },
  INTELLIJIDEA: {
    summary: "IDE pour le développement de logiciels en Java.",
  },
  SQLMARIADB: {
    summary: "Système de gestion de base de données relationnelle open source avec des fonctionnalités avancées pour les environnements d'entreprise et de cloud.",
  },
  BOOTSTRAP: {
    summary: "Framework front-end open source pour la création de sites Web et d'applications réactives avec des composants et des outils de conception prêts à l'emploi.",
  },
  OCEANEXTRA: {
    summary: "Permet d'étendre les fonctionnalités et les options de personnalisation d'un thème WordPress.",
  },
  YOASTSEO: {
    summary: "Yoast SEO est un plugin WordPress très populaire qui aide à optimiser le référencement (SEO) d'un site web.",
  },
  GIVE: {
    summary: "Permet d'ajouter un système de dons et de collecte de fonds sur un site WordPress.",
  },
  FORMIDABLEFORMS: {
    summary: "Permet de créer des formulaires personnalisés avec des fonctionnalités avancées sur WordPress.",
  },
  ELEMENTOR: {
    summary: "Permet de créer des pages web personnalisées et de modifier le contenu visuellement sur WordPress.",
  },
  VSCODE: {
    summary: "Éditeur de code gratuit avec de nombreuses fonctionnalités pour les développeurs.",
  },
  FIGMA: {
    summary: "Éditeur de graphiques vectoriels et outil de maquettage, principalement basé sur le web.",
  }
};

// Sélectionner toutes les divs avec la classe "outilsDetails"
var outilsDivs = document.querySelectorAll(".outilsDetails");

// Parcourir les divs et modifier le contenu et les attributs
for (var i = 0; i < outilsDivs.length; i++) {
  var div = outilsDivs[i];
  var name = div.getAttribute("data-name");

  // Vérifier si la compétence existe dans le tableau
  if (competences.hasOwnProperty(name)) {
    // Obtenir les attributs de la compétence correspondante
    var competence = competences[name];
    var summary = competence.summary;

    // Modifier le contenu et les attributs de la div
    div.innerHTML = name;
    div.setAttribute("data-summary", summary);
    div.classList.add("skills__skill");
  }
}
