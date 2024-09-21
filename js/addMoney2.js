document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
   

    if(isNaN(addMoney)){
        alert('Failed to add money..')
    }

   if(pinNumber === 1234){

    const balance = getTextFieldValueById('account-balance');
    const newBalance = balance + addMoney;
    document.getElementById('account-balance').innerText = newBalance;

    // add to transection history

    const p = document.createElement('p');
    p.innerText = ` Added : ${addMoney} TK. New Balance : ${newBalance}`;

    document.getElementById('transection-container').appendChild(p);
   }
   else{
    alert('Failed to the add money....')
   }
})