// show the cash out form
document.getElementById('cash-out').addEventListener('click', function () {
    
    // show cash out button clicked
    document.getElementById('cash-out-form').classList.remove('hidden');


    // hide the add money form
    document.getElementById('add-moneyForm').classList.add('hidden');
   

});

// show add money form and hide 
document.getElementById('btn-addMoney-shoew').addEventListener('click', function () {
    
    document.getElementById('add-moneyForm').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
})