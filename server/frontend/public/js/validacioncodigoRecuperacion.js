const codigoField = document.querySelector("[name=codigo]");
const codigoInput = document.getElementById('codigo');

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

//VALIDACION DE CODIGO
codigoInput.addEventListener('input',()=>{
    const password = codigoInput.value;
    const passwordRegex =/[0-9]{6}/;
    const isValid = passwordRegex.test(password);
    
    if(isValid){
        codigoInput.style.borderColor = 'rgba(26, 255, 0, 0.67)';
        codigoInput.style.borderWidth = '3 px';
    }else{
        codigoInput.style.borderColor = 'red';
        codigoInput.style.borderWidth = '3 px';
    }//FIN DE if else
})//FIN DE VALIDACION DE CODIGO

codigoField.addEventListener("blur", validaEmptyField);