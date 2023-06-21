//VARIABLES PARA CAMPOS VACIOS
const passField         = document.querySelector("[name=pass]");
const contrasenia2Field = document.querySelector("[name=pass1]");

//VARIABLES PARA VALIDAR MISMA CONTRASEÑA
const passInput         = document.getElementById('pass');
const pass1Input        = document.getElementById('pass1');
const form              = document.getElementById('formulario');

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
                field.classList.add("valid");
        }//FIN DE IF ELSE
}//FIN DE validaEmptyField

//VALIDACION DE pass
passInput.addEventListener('input', () => {
  const password = passInput.value;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const isValid = passwordRegex.test(password);

  if (isValid) {
        passInput.style.borderColor = 'green';
        passInput.style.borderWidth = '3px';
  } else {
        passInput.style.borderColor = 'red';
        passInput.style.borderWidth = '3px';
  }//FIN DE IF ELSE
});//FIN DE VALIDACION pass

//VALIDACION DE pass1
pass1Input.addEventListener('input', () => {
        const password = pass1Input.value;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const isValid = passwordRegex.test(password);
      
        if (isValid) {
              pass1Input.style.borderColor = 'green';
              pass1Input.style.borderWidth = '3px';
        } else {
              pass1Input.style.borderColor = 'red';
              pass1Input.style.borderWidth = '3px';
        }//FIN DE IF ELSE
      });//FIN DE VALIDACION pass1


//VALIDACIÓN DE CONTRASEÑAS IGUALES
form.addEventListener('submit', (event) => {
        event.preventDefault();
      
        const password = pass.value;
        const confirmPassword = pass1.value;
      
        if (password === confirmPassword) {
                form.submit();
        } else {
                passInput.style.borderColor = 'red';
                passInput.style.borderWidth = '3px';
                pass1Input.style.borderColor = 'red';
                pass1Input.style.borderWidth = '3px';
        }
});//FIN DE VALIDACIÓN 2 contraseñas


passField.addEventListener("blur", validaEmptyField);
contrasenia2Field.addEventListener("blur", validaEmptyField);
