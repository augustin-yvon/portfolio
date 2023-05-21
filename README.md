# Portfolio

Voici sur mon portfolio, un site dédié à la présentation de mes créations. Vous y découvrirez mon parcourt et certains de mes projets en 
développement web.

## Documentation

Il s'agit du premier site web dans lequel j'utilise du Javascript, cela m'a permis de créer diverses animations, telles que les projets qui 
sortent de la gauche de l'écran en glissant lorsqu'on scroll.

#### Voici le code pour cette action : 
```javascript
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
```
Grâce à l'ajout de ces animations, j'ai pu apporter une touche dynamique et immersive à l'expérience 
utilisateur, rendant ainsi le site plus interactif et captivant. Je suis ravi d'avoir pu explorer et utiliser les possibilités offertes par JavaScript dans 
ce projet, ce qui a enrichi ma palette de compétences en développement web.
