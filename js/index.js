/* menu */
var menuTog = document.getElementsByClassName('icon-menu')[0];

menuTog.addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.toggle('open');
}, false)

/* modal feature*/
var content = document.getElementById('beneficios'),
    span = document.getElementsByClassName("close"),
    modalAux = null,
    closeAux = null;

content.addEventListener('click', function (event) {

    if (event.target.tagName === 'A' || event.target.tagName === 'I') {
        var modal = event.target;

        if (modal.tagName === 'I') {
            modal = modal.parentElement;
        }

        modalAux = modal.nextElementSibling;
        closeAux = modal.parentElement.querySelector('.close');
        modal.nextElementSibling.style.display = "block";
        document.body.style.overflow = 'hidden';

        closeAux.addEventListener('click', function () {
            modalAux.style.display = "none";
            document.body.style.overflow = 'auto';
        }, false);

    }

}, false);

window.addEventListener('click', function (event) {

    if (event.target == modalAux) {
        modalAux.style.display = "none";
        document.body.style.overflow = 'auto';
    }

}, false);

/* form contact */

var form = document.forms['form-contact'];

var inputsErrors = function (form) {
/* var name = form.nombre.value,
    email = form.email.value,
    telephone = form.telephone.value,
    message = form.message.value;
        
    if (name.trim() === '') {
        error = true;
        inputs.push(form.nombre);
    }

    if (email.trim() === '') {
        error = true;
        inputs.push(form.email);
    }

    if (telephone.trim() === '') {
        error = true;
        inputs.push(form.telephone);
    }

    if (message.trim() === '') {
           error = true;
            inputs.push(form.message);
    } */
    var error = false,
        element,
        inputs = [];

    for (var i = 0; i < form.elements.length; i++) {
        element = form.elements[i].value.trim();

        if (!element) {
            error = true;
            inputs.push(form.elements[i]);
        }
    }

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.marginBottom = '7px';
        inputs[i].nextElementSibling.style.display = 'block';
    }
    return error;
}   

var eraseErrors = function (form) {

    for (var index = 0; index < form.length - 1; index++ ) {
        if (form.elements[index].value !== '') {
            form[index].style.marginBottom = '23px';
            form[index].nextElementSibling.style.display = 'none';  
        }
    } 
}

form.addEventListener('submit', function (event) {  
    var error;
    eraseErrors(form);
    error = inputsErrors(form);
    if (error) {
        event.preventDefault();
    }

}, false);

    
