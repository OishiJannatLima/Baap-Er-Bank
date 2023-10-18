document.getElementById('btn-withdraw').addEventListener('click', function(){
    //console.log('withdraw btn clicked')
    const withdrawField = document.getElementById('withdraw-field');
    newWithDrawAmoundString = withdrawField.value;
    const newWithDrawAmound = parseFloat(newWithDrawAmoundString);

    const withdrawTotalElememnt = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElememnt.innerText;
    previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmound;
    withdrawTotalElememnt.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithDrawAmound;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawField.value = '';
})