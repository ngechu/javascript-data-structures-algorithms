///Find the factorial of a number

function factorial(num) {
  let current = 1;
  for (let i = num; i >= 1; i--) {
    current = i * current;
  }
  return current;
}

console.log('XXXXXXXXXXXXXXXXX', factorial(3));
