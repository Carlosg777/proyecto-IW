const correoInput = document.getElementById('userOcorreo');
const correoField = document.querySelector("[name=userOcorreo]");

//VALIDACION DE CAMPO VACIO
validaEmptyField = (e) =>{
    const field = e.target; 
    const fieldValue = e.target.value;

    if(fieldValue.trim().length === 0){
            field.classList.add("invalid");
            field.nextElementSibling.classList.add("error"); //AGREGA ELEMENTO AL SIGUIENTE ELEMENTO HERMANO
            //field.nextElementSibling.innerText = `${field.name} is required`;
    }else{
            field.classList.remove("invalid");
            field.nextElementSibling.classList.remove("error"); //AGREGA ELEMENTO AL SIGUIENTE ELEMENTO HERMANO
        }//FIN DE IF ELSE
}//FIN DE validaEmptyField

/*VALIDACION DE FORMATO CORREO
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
*/
correoField.addEventListener("blur", validaEmptyField);
