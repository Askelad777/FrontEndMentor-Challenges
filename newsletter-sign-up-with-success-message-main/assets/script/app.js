const backdrop = document.getElementById('backdrop');

const btnSubscribe = document.getElementById('btn-subscribe');

const successModal = document.getElementById('success-modal');

const toggleBackdrop = () =>{
  backdrop.classList.toggle('visible');
};


const successModalHandler = () =>{
  toggleBackdrop();
  successModal.classList.add('visible');

};








// EVENTLISTENER

btnSubscribe.addEventListener('click', successModalHandler);
