function sum(a, b) {
  return a+b;
}

console.log(sum(4,6)); // 10

function product(a, b) {
  return a*b;
}

console.log(product(4,6)); // 24

const bigProduct = product(5353, 134534);
console.log(bigProduct);

setTimeout(function () { // anonymous function - passed in as input to another function
    console.log("Hey, you rock!");
}, 1000);

setTimeout(() => { // arrow function - sans 'function' keyword and
    console.log("Hey, you rock!");
}, 1000);

setTimeout(() => console.log("Hey, you rock!"), 1000); // one-line : omit curly braces and semicolon
