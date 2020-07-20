// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 === 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

// 

let num = prompt('Chose area of board') // Get input to determine board size
rowString = "";

for (let heigth = 0; heigth < num; heigth++) {
  for (let width = 0; width < num; width++) {
    if ((heigth + width) % 2 === 0) {
      rowString += "# ";
    }
    else {
      rowString += " ";
    }
  }
  rowString += "\n";
}

console.log(rowString);