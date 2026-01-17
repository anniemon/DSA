const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for(let i = 0; i < input.length - 1; i++) {
  const [k, ...numbers] = input[i].split(' ').map(Number);

  const result = [];
  const dfs = (depth, start) => {
    if(depth === 6) {
      console.log(result.join(' '));
      return;
    }
    for(let i = start; i < k; i++) {
      result.push(numbers[i]);
      dfs(depth + 1, i + 1);
      result.pop();
    }
  }
  dfs(0, 0);
  console.log();
}

