
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name = email]');
const textarea = document.querySelector('textarea[name = message]');

const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
const data = (saveData !== null && saveData !== undefined) ? saveData : { email: '', message: '' };
  
email.value = data.email;
textarea.value = data.message;

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));


function onFormSubmit(e) {
  e.preventDefault();
  if (!email.value || !textarea.value) {
    alert('Заповніть всі поля');
    return;
  }
  console.log(data);
  email.value = '';
  textarea.value = '';
  data.email = '';
  data.message = '';
  localStorage.clear();
}


function onFormInput(e) {
  
data[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}