// mackbook memory, storage & delivery default price function
function defaultPrice(id) {
    document.getElementById(id).innerText = 0;
    calculateValue();

};

// mackbook memory upgrade price event
document.getElementById('memory-upgrade-one').addEventListener('click', function () {

    let memorycost = document.getElementById('extra-memory-cost');

    memorycost.innerText = 180;
    calculateValue();

});

// mackbook storage upgrade price event
document.getElementById('storage-upgrade-one').addEventListener('click', function () {

    let storageCost = document.getElementById('extra-storage-cost');
    storageCost.innerText = 100;
    calculateValue();
});

// mackbook storage upgrade price event
document.getElementById('storage-upgrade-two').addEventListener('click', function () {

    let storageCost = document.getElementById('extra-storage-cost');
    storageCost.innerText = 180;
    calculateValue();

});

// mackbook delivery cost event
document.getElementById('fast-delivery').addEventListener('click', function () {

    let deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = 20;
    calculateValue();
});


// Total Price function
function calculateValue() {
    const memoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-charge').innerText);
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total-cost').innerText = totalPrice ;
};

// promo code apply event
document.getElementById('promo-button').addEventListener('click',function(){

   const promoCode =  document.getElementById('input-promo-code').value;

   document.getElementById('input-promo-code').value ="";

   if (promoCode === "stevekaku"){
      const totalCost = parseFloat(document.getElementById('total-cost').innerText);
      const grandTotal = totalCost * (80/100);
      
      document.getElementById('total-cost').innerText = grandTotal ;

      document.getElementById('promo-code').style.display = 'none';
   }
   
   
});