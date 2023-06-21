const curpField    = document.querySelector("[name=curp]");
const direcField   = document.querySelector("[name=direc]");
const numField     = document.querySelector("[name=num]");

const curpInput   = document.getElementById('curp');
const numInput     = document.getElementById('num');


//VALIDACION DE CAMPOS VACIOS
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

//VALIDACION DE CURP
curpInput.addEventListener('input', () => {
  const password = curpInput.value;
  const passwordRegex = /^[A-Z]{4}[0-9]{6}[H,M][A-Z]{5}[0-9]{2}$/;
  const isValid = passwordRegex.test(password);

  if (isValid) {
    curpInput.style.borderColor = 'green';
    curpInput.style.borderWidth = '3px';
  } else {
    curpInput.style.borderColor = 'red';
    curpInput.style.borderWidth = '3px';
  }
});//FIN DE VALIDACION DE CURP

//VALIDACION DE CURP
numInput.addEventListener('input', () => {
    const password = numInput.value;
    const passwordRegex = /[0-9]{10}/;
    const isValid = passwordRegex.test(password);
  
    if (isValid) {
        numInput.style.borderColor = 'green';
        numInput.style.borderWidth = '3px';
    } else {
        numInput.style.borderColor = 'red';
        numInput.style.borderWidth = '3px';
    }
  });//FIN DE VALIDACION DE CURP

curpField.addEventListener("blur", validaEmptyField);
direcField.addEventListener("blur", validaEmptyField);
numField.addEventListener("blur", validaEmptyField);

