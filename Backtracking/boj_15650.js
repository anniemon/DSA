const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const [n, m] = input.split(' ').map(Number);

const arr = [];
for(let i = 1; i <=n; i++) {
    arr.push(i);
}

let answer = "";
const dfs = (depth, at, selected) => {  
        if(depth === m) {
            answer += selected.join(" ")
            answer += '\n'
            return;
        }

    for(let i = at; i < n; i++) {
            selected.push(arr[i]);
            dfs(depth + 1, i+1, selected);
            selected.pop();
    }
}
dfs(0, 0, [])
console.log(answer)
