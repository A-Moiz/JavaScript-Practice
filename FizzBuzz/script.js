function FizzBuzz() {
  // For loop to go through 1-100
  // Check if its divisible by both, by 3, or by 5
  // If any return the relevant output
  // If none return the number
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(FizzBuzz());
