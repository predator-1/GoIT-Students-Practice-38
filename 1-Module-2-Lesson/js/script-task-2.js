// когда switch когда if else

const dish = 'french fries'; // 'chiken', 'french fries', 'burger'

switch (dish) {
  case 'chicken':
    console.log("it's a chicken!");
    break;
  case 'french fries':
    console.log("it's a french fries!");
    break;
  case 'donat':
    console.log("it's a donat!");
    break;
  case 'burger':
    console.log("it's a burger!");
    break;
  default:
    console.log("I don't know");
}

// один тип условия
if (dish === 'chicken') {
  console.log("it's a chicken!");
} else if (dish === 'french fries') {
  console.log("it's a french fries!");
} else if (dish === 'donat') {
  console.log("it's a donat!");
} else if (dish === 'burger') {
  console.log("it's a burger!");
} else {
  console.log("I don't know");
}
