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

var size = 8;
var grid = "";

for (i = 1; i <= size; i++) {
  if (i % 2 === 0)
    grid += "# ".repeat(size / 2) + "\n";
  else
    grid += " #".repeat(size / 2) + "\n";
}

console.log(grid);