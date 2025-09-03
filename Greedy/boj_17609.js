const fs = require('fs');
const inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(inputLines[0]);

const palindrome = (s) => {
  for (let l = 0, r = s.length - 1; l < r; l++, r--) {
    if (s[l] !== s[r]) return l;
  }
  return -1;
};

for (let i = 1; i <= T; i++) {
  const candi = inputLines[i].trim();

  const idx = palindrome(candi);
  if (idx === -1) {
    console.log(0);
    continue;
  }

  const j = candi.length - 1 - idx;

  const leftRemoved = candi.slice(0, idx) + candi.slice(idx + 1);
  const rightRemoved = candi.slice(0, j) + candi.slice(j + 1);

  if (palindrome(leftRemoved) === -1 || palindrome(rightRemoved) === -1) {
    console.log(1);
  } else {
    console.log(2);
  }
}
