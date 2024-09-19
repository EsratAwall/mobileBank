
// search: form submit reloading the page

// document.getElementById()
// step-1: set Event handler
document.getElementById('button-login').addEventListener('click', function (event) {
    // step-2: prevent default behavior (prevent reloading browser)
   event.preventDefault();   //<---------------Vejal to beginners
   console.log('login');
   
//    step-3: get the phone number and the pin number
     const phoneNumber = document.getElementById('phone-number');
     const phoneNumberValue = phoneNumber.value;
     const pinNumber = document.getElementById('pin-number');
     const pinNumberValue = pinNumber.value;
     
     console.log(phoneNumberValue, pinNumberValue);
     
    //  step-4: validation phone and pin(bad way)
    //  this is temporary. you should do like this
     if (phoneNumberValue === '5' && pinNumberValue === '1234') {
        console.log('you are logged in');
        window.location.href = './home.html'
        // step-5: allow user to use the website
     }else{
        alert('wrong phone number and pin number')
     }
    

})
