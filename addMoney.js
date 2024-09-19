/**
 * 1.add event listener to the add Money button (form submit)
 * make sure to preventDefault so that page doesn't reloads
 * 2.get the money user wants to add
 * also, get the pin number provided
 * 3.verify the pin number. for, wrong pin number ==> failed to add for right pin number,allow to add the number to the account balance
 * 4.get the current Balance
 * 5.add money to be added with the current balance
 * 6.display/update the balance in the DOM/UI
 */

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();


    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney)
    const pinNumber = document.getElementById('input-pin-number').value;

    if (pinNumber === '1234') {
     const balance = document.getElementById('account-balance').innerText;
     console.log(balance);

     const balanceNumber = parseFloat(balance);
    const updateBalance = balanceNumber + addMoneyNumber;
    
     console.log(updateBalance);
     document.getElementById('account-balance').innerText = updateBalance
     
        
    }
    else{
        alert('Failed to add money')
    }
})