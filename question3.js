function largestPrimeFactor(n) {

    while (n % 2 === 0) {
      n /= 2;
    }
  
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      while (n % i === 0) {
        n /= i;
      }
    }
  
    return n;
  }
  
  const largestFactor = largestPrimeFactor(600851475143);
  console.log(`The largest prime factor of 600851475143 is: ${largestFactor}`);
  