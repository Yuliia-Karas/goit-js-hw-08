import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const allData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormData, 500));

function onFormData(event) {
  allData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
}

function onFormSubmit(event) {
    event.preventDefault();

  const allElements = event.currentTarget.elements; 
    const email = allElements.email.value;
    const message = allElements.message.value;

// Check if all fields are filled
    
    if (!email || !message) {
        alert("Please fill all fields");
        return;
    }
    // if all fields are filled,send a form
  localStorage.removeItem(STORAGE_KEY);
  
  const formAll = {
      email: email,
      password: message,
  };
    
  console.log(formAll);
  event.currentTarget.reset();
}

function fillAllData() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data.email) {
    email.value = data.email;
  }
  if (data.message) {
    message.value = data.message;
  }
}
fillAllData();
