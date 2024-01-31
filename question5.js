function smallestMultiple(n) {
    
    let smallestMultiple = 20;
  
   
    for (let i = 2; i <= n; i++) {
     
      if (smallestMultiple % i !== 0) {
        smallestMultiple = lcm(smallestMultiple, i);
      }
    }
  
    return smallestMultiple;
  }
  
  function gcd(a, b) {
    while (b) {
      a, b = b, a % b;
    }
    return a;
  }
  
  function lcm(a, b) {
    return abs(a * b) 
           / gcd(a, b);
  }
  
  
  const smallestNumber = smallestMultiple(20);
  console.log(`The smallest positive number divisible by all numbers from 1 to 20 is: ${smallestNumber}`);
  