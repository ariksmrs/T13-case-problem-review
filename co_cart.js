"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: 
   Date:   
   
   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 
window.addEventListner("load", function() {

  calcCart();

  cartForm.elements.modelQty.onchange = calcCart;
  
  var shippingOptions = document.querySelectorALL('input[name="shipping"]');

  for(var i = 0; i < shippingOptions.length; i++) {
    shippingOptions[i].onclick = calcCart;
  }
  
});
function calcCart() {
  
}








function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
