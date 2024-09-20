document.getElementById('btn-cash-money').addEventListener('click', function (event) {
    event.preventDefault;

    const inputCashOut = document.getElementById('input-cashOut-money').value;
    const inputCashOutNumber = parseFloat(inputCashOut);
    const inputPin = document.getElementById('input-cashOut-pin-number').value;
    console.log(inputCashOutNumber, inputPin);
    
    if (inputPin === '1234') {
        const balance = document.getElementById('cash-out-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - inputCashOutNumber;
        
        document.getElementById('cash-out-balance').innerText = newBalance;

    }else{
        alert('Failed to cash Out, Please try again')
    }
    
})

document.getElementById('btn-add-money')
.addEventListener('click', function (event) {
    event.preventDefault();
    const inputAddMoney = document.getElementById('input-add-money').value;
    console.log(inputAddMoney);
    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(inputPinNumber);
    if (inputPinNumber === '1234') {
        console.log('adding money to your account');
        const balance = document.getElementById('account-balance').innerText
        console.log(balance);
        const addMoneyNumber = parseFloat(inputAddMoney);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance
        
    }else{
        alert('Failed to add money to your account')
    }
    
    
    
});
