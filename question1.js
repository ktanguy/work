function sumMultiples3And5(limit) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  const sumOfMultiples = sumMultiples3And5(1000);
  console.log(`The sum of all multiples of 3 or 5 below 1000 is: ${sumOfMultiples}`);
  