document.getElementById('btn-cash-money').addEventListener('click', function (event) {
    event.preventDefault;

    const inputCashOut = document.getElementById('input-cashOut-money').value;
    const inputCashOutNumber = parseFloat(inputCashOut);
    const inputPin = document.getElementById('input-cashOut-pin-number').value;
    console.log(inputCashOutNumber, inputPin);
    
    if (inputPin === '1234') {
        const balance = document.getElementById('cash-out-balance');
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - inputCashOutNumber;
        
        document.getElementById('cash-out-balance').innerText = newBalance;

    }else{
        alert('Failed to cash Out, Please try again')
    }
    
})