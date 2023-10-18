
document.getElementById('btn-deposit').addEventListener('click', function(){
   const depositField = document.getElementById('deposit-field');
   const newDepositAmoundString = depositField.value;
   const newDepositAmound = parseFloat(newDepositAmoundString);

   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
   const previousDepositTotal = parseFloat(previousDepositTotalString);
   //depositTotalElement.innerText = depositAmound;

   const currentDepositTotal = previousDepositTotal + newDepositAmound;

   depositTotalElement.innerText = currentDepositTotal;

   // balance total

   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   const currentBalanceTotal = previousBalanceTotal + newDepositAmound;

   balanceTotalElement.innerText = currentBalanceTotal;

   depositField.value = '';
  


})