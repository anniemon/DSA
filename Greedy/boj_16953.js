const fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let steps = 1;
while(b > a) {
  if(Number.isInteger((b - 1) / 10)) {
    b = (b - 1) / 10;
    steps += 1;
  } else if(Number.isInteger(b / 2)) {
    b = b / 2;
    steps += 1;
  } else {
    console.log(-1);
    return;
  }
}

if(b === a) {
  console.log(steps);
} else {
  console.log(-1);
}


