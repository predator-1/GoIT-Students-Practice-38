let counter = 0;
// 10474
const func = () => {
  console.log(counter++);
  func();
};

func();
