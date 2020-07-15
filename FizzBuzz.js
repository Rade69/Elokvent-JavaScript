//1-Nacin

// for (let i=1;i<=100;i+=1) {
//   if  (i % 3 === 0 && i % 5 === 0)  {
//     console.log('FizzBuzz');
//   }else if (i % 3 === 0) {
//     console.log('Fizz');
//   }else if (i % 5 === 0) {
//     console.log('Buzz');
//   }else {
//     console.log(i);
//   }
// }

// 2-Drugin nacin

for (let num =1;num <= 100;num++) {
  console.log(num % 3 === 0 && num % 5 === 0 ? 'FizzBuzz' : (num % 3 === 0 ? 'Fizz' :
  (num % 5 === 0 && num % 3!= 0 ? 'Buzz':num )));
}

// 3-Treci nacin

// [...Array(100).keys()].map(n => n + 1).map(n =>(n % 3 ? "" : "Fizz") + 
// (n % 5 ? "" : "Buzz") || n).join("\n")
