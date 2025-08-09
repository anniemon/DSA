const fs = require('fs');
const inputArr = fs.readFileSync('/dev/stdin').toString().split('\n');

const testCaseCount = Number(inputArr[0]);

let i = 0;
let j = 1;
while(i < testCaseCount) {
  const applicantCount = Number(inputArr[j]);
  j++
  const applicants = inputArr.slice(j, j + applicantCount).map((s) => s.split(' ').map(Number));
  const sortedByFirst = applicants.slice().sort((a, b) => a[0] - b[0]);

  let maxCnt = 1;
  let minValue = sortedByFirst[0][1];
  for(let k = 1; k < sortedByFirst.length; k++) {
    if(sortedByFirst[k][1] < minValue) {
      maxCnt++;
      minValue = Math.min(minValue, sortedByFirst[k][1]);
    }
  }
  console.log(maxCnt)
  j += applicantCount;
  i++;
}



