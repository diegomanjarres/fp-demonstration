const start = new Date().getTime();

const fib = n => (n <= 1 ? n : fib(n - 1) + fib(n - 2));



console.log(fib(46));
console.log(((new Date()).getTime() - start) / 1000);
