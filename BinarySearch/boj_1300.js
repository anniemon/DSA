const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const k = Number(input[1]);

let start = 1;
let end = 10 ** 10;
let result = 0;
while(start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0; // mid보다 작거나 같은 데이터의 갯수
  for(let i = 1; i <=n; i++) { // 각 행마다 mid보다 작은 갯수 계산
    total += Math.min(parseInt(mid / i), n);
  }
  if(total >= k) { // mid보다 작거나 같은 데이터의 갯수가 k이상일 때
    result = mid;
    end = mid - 1; // 가장 작은 mid를 구한다.
  } else {
    start = mid + 1;
  }
}
console.log(result);

