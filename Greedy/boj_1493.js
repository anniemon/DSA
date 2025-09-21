const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [l, w, h] = input[0].split(' ').map(Number);
const cubeCount = Number(input[1]);

const cubeArr = new Array(19).fill(0);
for(let i = 2; i < 2 + cubeCount; i++) {
  const [len, count] = input[i].split(' ').map(Number);
  cubeArr[len] = count;
}

const getNearestSquare = (x) => {
  let i = 0;
  while(2 ** i <= x) {
    i++;
  }
  return i - 1;
}

// 넣어줄 수 있는 가장 큰 한 변의 길이(2의 i승인 i)를 찾는다.
let length = 19;
length = Math.min(length, getNearestSquare(l));
length = Math.min(length, getNearestSquare(w));
length = Math.min(length, getNearestSquare(h));

let result = 0;
let used = 0;
for(let i = length; i >= 0; i--) {
  // 큐브가 작아질 때마다 8배씩 더 필요함
  used *= 8;
  const curLen = 2 ** i;
  // 현재 큐브로 남은 공간 전체를 채운다고 가정할 때 필요한 큐브 갯수
  const required = parseInt(l / curLen) * parseInt(w / curLen) * parseInt(h / curLen) - used;
  // 실제 넣을 수 있는 큐브 갯수
  const available = Math.min(required, cubeArr[i]);

  result += available;
  used += available;
}
if(used === l * w * h) {
  console.log(result)
} else {
  console.log(-1)
}
