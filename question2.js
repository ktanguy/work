function sumEvenFibonacci(limit) {
    let sum = 0;
    let a = 1, b = 2, next;
    while (a < limit) {
      if (a % 2 === 0) {
        sum += a;
      }
      next = a + b;
      a = b;
      b = next;
    }
    return sum;
  }
  

  const sumOfEvenFibs = sumEvenFibonacci(100);
  console.log(`The sum of even Fibonacci numbers below 100 is: ${sumOfEvenFibs}`);
  