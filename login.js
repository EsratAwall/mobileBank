
// search: form submit reloading the page

// document.getElementById()
// step-1: set Event handler
document.getElementById('button-login').addEventListener('click', function (event) {
    // step-2: prevent default behavior (prevent reloading browser)
   event.preventDefault();   //<---------------Vejal to beginners
   console.log('login');
   
//    step-3: get the phone number
     const phoneNumber = document.getElementById('phone-number');
     const phoneNumberValue = phoneNumber.value;
     console.log(phoneNumberValue);
     
    
})
