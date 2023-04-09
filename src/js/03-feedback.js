import throttle from 'lodash.throttle';
const STORAGE_KEY = `feedback-form-state`;
const form = document.querySelector(`.feedback-form`);


form.addEventListener(`input`, throttle(onInputChange, 500));
form.addEventListener(`submit`, onBtnSubmitClick);

checkStorageContent();

function onInputChange(evt){
const fedbackForm = {
    email:form.email.value,
    message:form.message.value
}

const fedbackFormJSON = JSON.stringify(fedbackForm);

localStorage.setItem(STORAGE_KEY,  fedbackFormJSON);

};


function checkStorageContent (){
const savedfedbackForm = localStorage.getItem(STORAGE_KEY);
if(savedfedbackForm){
}
try {
    const fedbackForm = JSON.parse(savedfedbackForm);
    form.email.value = fedbackForm.email;
    form.message.value = fedbackForm.message;
  } catch (error) {
    console.log(error.name); 
    console.log(error.message); 
  }

};

function onBtnSubmitClick(evt){
    evt.preventDefault();
    const savedfedbackForm = localStorage.getItem(STORAGE_KEY);
    try {
        const fedbackForm = JSON.parse(savedfedbackForm);
       console.log(fedbackForm);
      } catch (error) {
        console.log(error.name); 
        console.log(error.message); 
      }
      if (form.email.value === "" || form.message.value === "") {
        return alert ("Please fill in all the fields!");
      }

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    

};