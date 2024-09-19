// add money to the account
/**
 * step-1: add event handler
 * prevent page reload after form submit
 * step-2: get money to be added to the account balance
 * get the pin number
 * step-3:varify pin number
 */

// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
.addEventListener('click', function (event) {
    // prevent page reload after form submit
    event.preventDefault();
    
    // step-2: get money to be added to the account
    const inputAddMoney = document.getElementById('input-add-money').value;
    console.log(inputAddMoney);

    // get the pin number provided
    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(inputPinNumber);

    // step-3: verify pin number
    // wrong way to validate pin number
    if (inputPinNumber === '1234') {
        console.log('adding money to your account');
        
        // step-4: get the current balance
        const balance = document.getElementById('account-balance').innerText
        console.log(balance);

        // step-5: add inputAddMoney with balance
        const addMoneyNumber = parseFloat(inputAddMoney);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);
        
        // step-6: update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance
        
    }else{
        alert('Failed to add money to your account')
    }
    
    
    
});
