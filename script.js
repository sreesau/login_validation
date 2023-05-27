const form = document.querySelector("form");
 nameField = form.querySelector(".field.name-field");
 nameInput = nameField.querySelector(".fname");
 emailField= form.querySelector(".email-field");
 emailInput= emailField.querySelector(".email");
 pswrdField= form.querySelector(".pswrd-field");
 pswrdInput= pswrdField.querySelector(".pswrd");
 phNoField= form.querySelector(".phno-field");
 phNoInput= phNoField.querySelector(".phno");

 function checkName() {
    const namePattern = /^([a-zA-Z ]){2,30}$/;  
      if (!nameInput.value.match(namePattern)) {
         return nameField.classList.add("invalid"); 
} 
       nameField.classList.remove("invalid"); 
}

 function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;  
  if (!emailInput.value.match(emailPattern)) {
   return emailField.classList.add("invalid"); 
   console.log("invalid")
}
     emailField.classList.remove("invalid"); 

}
function checkPass() {
  const pswrdPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (!pswrdInput.value.match(pswrdPattern)) {
    return pswrdField.classList.add("invalid"); 
  }
  pswrdField.classList.remove("invalid"); 
}
function checkPhno() {
  const phnoPattern = /^\d{10}$/;

  if (!phNoInput.value.match(phnoPattern)) {
    return phNoField.classList.add("invalid"); 
  }
  phNoField.classList.remove("invalid"); 
}


   form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkEmail();
    checkName();
    checkPass();
    checkPhno();
    nameInput.addEventListener("keyup", checkEmail);
    emailInput.addEventListener("keyup", checkName);
    pswrdInput.addEventListener("keyup", checkPass);
     phNoInput.addEventListener("keyup", checkPhno);
    if (
      !nameField.classList.contains("invalid") &&
      !emailField.classList.contains("invalid") &&
      !pswrdField.classList.contains("invalid") &&
      !phNoField.classList.contains("invalid")
    ) {
      location.href = form.getAttribute("action");
    }
})

 