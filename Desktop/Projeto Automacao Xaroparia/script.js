const navbar = document.querySelector('nav.navbar');
const button = document.querySelector('div.menu-icon');
const closeButton = document.querySelector('div.menu-icon').children[0];


button.addEventListener('click', ()=> {
    navbar.classList.toggle('active');
    closeButton.classList.toggle('fa-bars');
    closeButton.classList.toggle('fa-times');
});

function multiplicar(){
    var brixD =document.querySelector('#brixD')
var acid = document.querySelector('#acid')
var resultado = document.querySelector('span')
    resultado.innerHTML = parseFloat(brixD.value) * parseFloat(acid.value)
}
