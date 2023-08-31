const backdrop = document.getElementById('backdrop');

const btnSubscribe = document.getElementById('btn-subscribe');

const successModal = document.getElementById('success-modal');

const btnDsmMsg = document.getElementById('dismiss-button');

const emailInput = document.getElementById('userEmail');
const emailInputValue = document.getElementById('userEmail').value;


const ErrorMessage = document.getElementById('Email-validation-message');

const confirmationMessage = document.getElementById('confirmation-message')


// FUNCTION
const toggleBackdrop = () =>{
  backdrop.classList.toggle('visible');
}


const backdropHandler = () =>{
  backdrop.classList.remove('visible')
  successModal.classList.remove('visible');

};


const showSuccessModal = () =>{  
  toggleBackdrop();
  successModal.classList.add('visible');  
};


const closeSuccessModalHandler = ()=>{
    backdropHandler();

};


// VALIDATION FIELD 

const emailValidation = () =>{
  if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

    ErrorMessage.classList.add('visible');
    ErrorMessage.innerHTML = 'Invalid Email';
    return false;

  }
  ErrorMessage.innerHTML = 'Valid Email';
  ErrorMessage.style.color = 'green';
  showSuccessModal();
  return true;
};


const showSuccessModalHandler = () => {
  emailValidation();
};




// EVENTLISTENER

backdrop.addEventListener('click',backdropHandler);

btnSubscribe.addEventListener('click', showSuccessModalHandler);


btnDsmMsg.addEventListener('click', closeSuccessModalHandler)
