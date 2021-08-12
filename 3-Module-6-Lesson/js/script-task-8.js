/**
 * Find all methods in objects
 */

const findAllMethods = obj => {
  const keys = Object.keys(obj);
  const result = [];
  for (const key of keys) {
    if (typeof obj[key] === 'function') result.push(key);
  }
  return result;
};

console.log(
  findAllMethods({
    n: 1,
    t: 2,
    func1() {},
    func2() {},
  }),
);
