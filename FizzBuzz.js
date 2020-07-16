for (let num = 1; num <= 101; num++) {
  console.log(num);
  if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  }

}

