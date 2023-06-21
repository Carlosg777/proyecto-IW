//INICIAR SESION
const emailField        = document.querySelector("[name=user]");
const passwordField     = document.querySelector("[name=passwd]");

const passwordInput     = document.getElementById('passwd');

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



passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const isValid = passwordRegex.test(password);

  if (isValid) {
    passwordInput.style.borderColor = 'green';
    passwordInput.style.borderWidth = '3px';
  } else {
    passwordInput.style.borderColor = 'red';
    passwordInput.style.borderWidth = '3px';
  }
});

emailField.addEventListener("blur", validaEmptyField);
passwordField.addEventListener("blur",validaEmptyField);