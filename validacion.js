

var email =document.GetElementById('email');
var error =document.GetElementById('error');
error.style.color='red';


function enviarFormulario (){
console.log('Enviando formulario');
var mensajesError = [];
if(email.value === null || email.value ==='') {
    mensajesError.push('Por favor, ingresá un correo válido');
}
error.innerHTML = mensajesError.join (',');
return false;
}

