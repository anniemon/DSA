const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const lines = input.slice(1).map((s) => s.split(' ').map(Number)).sort((a, b) => {
  if(a[1] === b[1]) {
    return a[0] - b[0]
  } else {
    return a[1] - b[1]
  }
})

let cnt = 1, cur = 0;
for(let i = 1; i < lines.length; i++) {
  if(lines[cur][1] <= lines[i][0]) {
    cur = i;
    cnt += 1;
  }
}
console.log(cnt)
