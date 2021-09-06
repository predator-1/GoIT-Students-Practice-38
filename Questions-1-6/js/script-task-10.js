const getCounter = () => {
  let counter = 0;
  return () => {
    const increment = ++counter;
    return { increment };
  };
};

const conter1 = getCounter();
console.log(conter1());

const conter2 = getCounter();
console.log(conter2());
