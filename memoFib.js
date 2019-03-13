const start = new Date().getTime();
let fib = n => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

const memoize = (fn) => {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    cache[n] = fn(n);
    return cache[n];
  };
};

fib = memoize(fib);

console.log(fib(48));
console.log(((new Date()).getTime() - start) / 1000);
