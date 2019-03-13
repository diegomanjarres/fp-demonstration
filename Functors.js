const assert = require('assert');


const firstAxiom = (obj) => {
  const identity = a => a;
  assert.deepEqual(
    // F(idA) = idF(A)

    // F(idA)
    obj.map(identity),

    // idF(A)
    identity(obj),

  );
};

const secondAxiom = (obj) => {
  const f = x => x * 2;
  const g = x => x ** 3;
  assert.deepEqual(
    // F(f o g) = F(f) o F(g)

    // F(f o g)
    obj.map(x => f(g(x))),

    // F(f) o F(g)
    obj.map(g).map(f),
  );
};

firstAxiom([1, 2, 3]);
secondAxiom([1, 2, 3]);
