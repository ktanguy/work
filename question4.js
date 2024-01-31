function isPalindrome(n) {
    const str = n.toString();
  
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  function largestPalindromeProduct() {
    let largestPalindrome = 0;
  
    
    for (let i = 100; i < 1000; i++) {
      for (let j = i; j < 1000; j++) {
        const product = i * j;
  
        
        if (isPalindrome(product) && product > largestPalindrome) {
          largestPalindrome = product;
        }
      }
    }
  
    return largestPalindrome;
  }
  
  
  const largestProduct = largestPalindromeProduct();
  console.log(`The largest palindrome product of two 3-digit numbers is: ${largestProduct}`);
  