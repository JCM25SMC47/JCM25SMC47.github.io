document.querySelector('.bouton-de-menu').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show');

});

ScrollReveal().reveal('.vitrine');
ScrollReveal().reveal('.CartesDactualites',{delay:200});
ScrollReveal().reveal('.Banniere-cartes-une',{delay:200});
ScrollReveal().reveal('.Banniere-cartes-deux',{delay:200});

