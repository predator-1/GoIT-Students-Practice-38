'use strict';
/**
 * Fix errors
 */

//  manufactured: {
//   country: 'China',
//   showCountry() {
//     console.log(this.country);
//   },
// },

const product = {
  price: 5000,

  manufactured: {
    country: 'China',
    showCountry() {
      console.log(this.country);
    },
  },
  showPrice() {
    console.log(this.price);
  },
};

// function callAction(action) {
//   action();
// }

// callAction(() => product.showPrice());
// const action = product.showPrice;
// action();

product.manufactured.showCountry();
