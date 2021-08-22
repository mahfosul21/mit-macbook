// console.log('Javascript Connected');
const eightGBMemory = document.getElementById('eight-gb-memory');
const sixteenGBMemory = document.getElementById('sixteen-gb-memory');
const twoFiftySixGBStorage = document.getElementById('two-fifty-six-gb-storage');
const fivetwelveGBStorage = document.getElementById('five-twelve-gb-storage');
const oneTBStorage = document.getElementById('one-tb-storage');
const friday25Delivery = document.getElementById('friday-25-delivery');
const friday21Delivery = document.getElementById('friday-21-delivery');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalCost = document.getElementById('total-cost');
const totalPromoCost = document.getElementById('total-with-promo');
const promoSubmitButton = document.getElementById('promo-submit');
const promoCodeInput = document.getElementById('promo-code');
const promoCodeError = document.getElementById('promo-error');
let isPromoAdded = false;

// Promo Calculation
function calculatePromo(total){
  if(isPromoAdded){
    totalPromoCost.innerText = total - (total * 0.20);
  } else{
    totalPromoCost.innerText = total;
  }
}

// Update Total Cost
function updateTotalValue(){
  const total = 1299 + parseInt(
    memoryCost.innerText
  ) + parseInt(
    storageCost.innerText
  ) + parseInt(deliveryCost.innerText);
  
  totalCost.innerText = total;
  calculatePromo(total);
}

// Update Extra Memory Cost
eightGBMemory.addEventListener('click', function (){
  memoryCost.innerText = 0;
  updateTotalValue();
});
sixteenGBMemory.addEventListener('click', function (){
  memoryCost.innerText = 180;
  updateTotalValue();
});

// Update Extra Storage Cost
twoFiftySixGBStorage.addEventListener('click', function (){
  storageCost.innerText = 0;
  updateTotalValue();
});
fivetwelveGBStorage.addEventListener('click', function (){
  storageCost.innerText = 100;
  updateTotalValue();
});
oneTBStorage.addEventListener('click', function (){
  storageCost.innerText = 180;
  updateTotalValue();
});

// Update Extra Delivery Cost
friday25Delivery.addEventListener('click', function (){
  deliveryCost.innerText = 0;
  updateTotalValue();
})
friday21Delivery.addEventListener('click', function (){
  deliveryCost.innerText = 20;
  updateTotalValue();
});

// Update Promo Cost
promoSubmitButton.addEventListener('click', function () {
  let code = promoCodeInput.value;
  if("stevekaku" == code){
    isPromoAdded = true;
    calculatePromo(totalCost.innerText);
    promoCodeInput.value = '';
    promoCodeError.innerText = 'Success';
    promoCodeError.style.color = 'green';
  } else{
    promoCodeInput.value = '';
    promoCodeError.innerText = "The Code you entered is wrong";
  }
});


