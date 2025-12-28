const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const tcCount = input[0];
const operands = [' ', '+', '-'];

for(let i = 1; i <= tcCount; i++) {
  const tc = input[i];
  const arr = [];
  for(let j = 1; j <= tc; j++) {
    arr.push(j);
  }
  dfs(0, [], arr);
  console.log('');
}

function dfs(depth, result, arr) {
  if(depth === arr.length - 1) {
    let str = '';
    for(let i = 0; i < arr.length - 1; i++) {
      str = str + arr[i] + result[i];
    }
    str += arr[arr.length - 1];
    if(eval(str.split(' ').join('')) === 0) {
      console.log(str);
    }
    return;
  }
  for(let op of operands) {
    result.push(op);
    dfs(depth + 1, result, arr);
    result.pop(op);
  }
}
