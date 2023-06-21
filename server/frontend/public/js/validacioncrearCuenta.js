//VARIABLES PARA VALIDAR CAMPO VACIO
const nombreField            = document.querySelector("[name=nombres]");
const apellidoPaternoField   = document.querySelector("[name=apellido_P]");
const apellidoMaternoField   = document.querySelector("[name=apellido_M]");
const nombreUsuarioField     = document.querySelector("[name=user]");
const correoField            = document.querySelector("[name=correo]");
const contrasenia1Field      = document.querySelector("[name=passwd]");
const contrasenia2Field      = document.querySelector("[name=contrasenia2]");

//VARIABLES PARA VALIDAR FORMATO
const nombreInput            = document.getElementById('nombres');
const apellidoPaternoInput   = document.getElementById('apellido_P');
const apellidoMaternoInput   = document.getElementById('apellido_M');
const nombreUsuarioInput     = document.getElementById('user');
const correoInput            = document.getElementById('correo');
const contrasenia1Input = document.getElementById('passwd');
const contrasenia2Input = document.getElementById('contrasenia2');
const form = document.getElementById('formulario');

/* V A L I D A C I O N E S   L I S T A S */
/***************************************************************************************/
//VALIDACION DE CAMPO VACIO
validaEmptyField = (e) =>{
        const field = e.target; 
        const fieldValue = e.target.value;      //target almacena lo escrito en input
    
        if(fieldValue.trim().length === 0){
                field.classList.add("invalid");
                field.nextElementSibling.classList.add("error"); //AGREGA ELEMENTO AL SIGUIENTE ELEMENTO HERMANO
                //field.nextElementSibling.innerText = `${field.name} is required`;
        }else{
                field.classList.remove("invalid");
                field.nextElementSibling.classList.remove("error"); //AGREGA ELEMENTO AL SIGUIENTE ELEMENTO HERMANO
            }//FIN DE IF ELSE
}//FIN DE validaEmptyField

//VALIDACION DE NOMBRE(S)
nombreInput.addEventListener('input',()=>{
        const password = nombreInput.value;
        const passwordRegex =/^(?!.*([a-zA-ZÁ-ÿ])\1\1)[A-Za-zÁ-ÿ]{3,10}(\s[a-zA-ZÁ-ÿ]{3,20})?/;
        const isValid = passwordRegex.test(password);
        
        if(isValid){
                nombreInput.style.borderColor = 'rgba(26, 255, 0, 0.67)';
                nombreInput.style.borderWidth = '3 px';
        }else{
                nombreInput.style.borderColor = 'red';
                nombreInput.style.borderWidth = '3 px';
        }//FIN DE if else
})//FIN DE apellidoPaternoInput

//VALIDACION DE APELLIDO PATERNO
apellidoPaternoInput.addEventListener('input',()=>{
        const password = apellidoPaternoInput.value;
        const passwordRegex =/^(?!.*([A-Za-zÁ-ÿñÑ])\1\1)[A-Za-zÁ-ÿñÑ]{3,10}/;
        const isValid = passwordRegex.test(password);
        
        if(isValid){
                apellidoPaternoInput.style.borderColor = 'rgba(26, 255, 0, 0.67)';
                apellidoPaternoInput.style.borderWidth = '3 px';
        }else{
                apellidoPaternoInput.style.borderColor = 'red';
                apellidoPaternoInput.style.borderWidth = '3 px';
        }//FIN DE if else
})//FIN DE apellidoPaternoInput

//VALIDACION DE APELLIDO MATERNO
apellidoMaternoInput.addEventListener('input',()=>{
        const password = apellidoMaternoInput.value;
        const passwordRegex =/^(?!.*([A-Za-zÁ-ÿñÑ])\1\1)[A-Za-zÁ-ÿñÑ]{3,10}/;
        const isValid = passwordRegex.test(password);
        
        if(isValid){
                apellidoMaternoInput.style.borderColor = 'rgba(26, 255, 0, 0.67)';
                apellidoMaternoInput.style.borderWidth = '3 px';
        }else{
                apellidoMaternoInput.style.borderColor = 'red';
                apellidoMaternoInput.style.borderWidth = '3 px';
        }//FIN DE if else
})//FIN DE apellidoMaternoInput

//VALIDACION DE FORMATO NOMBRE DE USUARIO
nombreUsuarioInput.addEventListener('input',()=>{
        const password = nombreUsuarioInput.value;
        const passwordRegex = /^[a-zA-Z0-9]{4,20}$/;
        const isValid = passwordRegex.test(password);
        
        if(isValid){
                nombreUsuarioInput.style.borderColor = 'rgba(26, 255, 0, 0.67)';
                nombreUsuarioInput.style.borderWidth = '3 px';
        }else{
                nombreUsuarioInput.style.borderColor = 'red';
                nombreUsuarioInput.style.borderWidth = '3 px';
        }//FIN DE if else
})//FIN DE nombreUsuario

//VALIDACION DE FORMATO CORREO
correoInput.addEventListener('input',()=>{
        const password = correoInput.value;
        const passwordRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
        const isValid = passwordRegex.test(password);
        
        if(isValid){
                correoInput.style.borderColor = 'rgba(26, 255, 0, 0.67)';
                correoInput.style.borderWidth = '3 px';
        }else{
                correoInput.style.borderColor = 'red';
                correoInput.style.borderWidth = '3 px';
        }//FIN DE if else
})//FIN DE correoInput

//VALIDACION DE FORMATO CONTRASEÑA 1
contrasenia1Input.addEventListener('input',()=>{
        const password = contrasenia1Input.value;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const isValid = passwordRegex.test(password);
        
        if(isValid){
                contrasenia1Input.style.borderColor = 'rgba(26, 255, 0, 0.67)';
                contrasenia1Input.style.borderWidth = '3 px';
        }else{
                contrasenia1Input.style.borderColor = 'red';
                contrasenia1Input.style.borderWidth = '3 px';
        }//FIN DE if else
})//FIN DE contrasenia1Input

//VALIDACION DE FORMATO CONTRASEÑA 2
contrasenia2Input.addEventListener('input',()=>{
        const password = contrasenia2Input.value;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const isValid = passwordRegex.test(password);
        
        if(isValid){
                contrasenia2Input.style.borderColor = 'rgba(26, 255, 0, 0.67)';
                contrasenia2Input.style.borderWidth = '3 px';
        }else{
                contrasenia2Input.style.borderColor = 'red';
                contrasenia2Input.style.borderWidth = '3 px';
        }//FIN DE if else
})//FIN DE contrasenia2Input

//VALIDACIÓN DE CONTRASEÑAS IGUALES
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const password = passwd.value;
  const confirmPassword = contrasenia2.value;

  if (password === confirmPassword) {
    form.submit();
  } else {
        contrasenia1Input.style.borderColor = 'red';
        contrasenia1Input.style.borderWidth = '3px';
        contrasenia2Input.style.borderColor = 'red';
        contrasenia2Input.style.borderWidth = '3px';
  }//FIN DE IF ESLSE
});//FIN DE VALIDACIÓN 2 contraseñas


nombreField.addEventListener("blur", validaEmptyField);
apellidoPaternoField.addEventListener("blur", validaEmptyField);
apellidoMaternoField.addEventListener("blur", validaEmptyField);
nombreUsuarioField.addEventListener("blur", validaEmptyField);
correoField.addEventListener("blur", validaEmptyField);
contrasenia1Field.addEventListener("blur", validaEmptyField);
contrasenia2Field.addEventListener("blur", validaEmptyField);

/***************************************************************************************
function validarContrasenia(event){
        var contrasenia_1 = document.getElementById("contrasenia1").value;
        var contrasenia_2 = document.getElementById("contrasenia2").value; 
        var errorMessage = document.getElementById("error-message");
    
     if(contrasenia_1 !== contrasenia_2){
            event.preventDefault();//EVITA QUE EL FORMULARIO SE ENVÍE    
            errorMessage.style.display = "block";
            console.log("Haz coincidir contraseñas!");
    
    }else (contrasenia_1 === contrasenia_2)
            errorMessage.style.display = none;
            console.log("Envía contraseñas!");
    
    }//FIN DE FUNCION validarContraseniaRecuperacion*/