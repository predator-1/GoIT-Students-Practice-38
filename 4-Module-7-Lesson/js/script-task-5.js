'use strict';
/**
 * Fix errors
 */

const product = {
  price: 5000,
  showPrice() {
    console.log(price);
  },
};

function callAction(action) {
  action();
}

callAction(product.showPrice);
