// Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};
  
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
  
menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
})

// / =============== scroll to top section ==========
const scrollTop = () => {
  const scrollTop = document.getElementById('scroll-top');
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)

// $(".gallery").magnificPopup({
// delegate: 'a',
// type: 'gall',
// gallery:{
//     enabled: true
// }
// });

