/*
1

1 2

1,2  1,2,3



1~3

2

1


1 2 1
2 4 5

1

1+1

1+1+1
1+2+1

1+2+1+1
1+2+2+1

1+2+2+1+1
1+2+2+2+1
1+2+3+2+1

1+2+3+2+1+1
1+2+3+2+2+1
1+2+3+3+2+1

1+2+3+3+2+1+1
1+2+3+3+2+2+1
1+2+3+3+3+2+1
1+2+3+4+3+2+1

1+2+3+4+3+2+1+1
1+2+3+4+3+2+2+1
1+2+3+4+3+3+2+1
1+2+3+4+4+3+2+1

1+2+3+4+4+3+2+1+1
1+2+3+4+4+3+2+2+1
1+2+3+4+4+3+3+2+1
1+2+3+4+4+4+3+2+1
1+2+3+4+5+4+3+2+1

1+2+3+4+5+4+3+2+1+1
1+2+3+4+5+4+3+2+2+1
1+2+3+4+5+4+3+3+2+1
1+2+3+4+5+4+4+3+2+1
1+2+3+4+5+5+4+3+2+1

1+2+3+4+5+5+4+3+2+1+1
1+2+3+4+5+5+4+3+2+2+1
1+2+3+4+5+5+4+3+3+2+1
1+2+3+4+5+5+4+4+3+2+1
1+2+3+4+5+5+5+4+3+2+1
1+2+3+4+5+6+5+4+3+2+1

1+2+3+4+5+6+5+4+3+2+1+1

1 2 3 3 4 4 5 5 5 6 6 6 7 7 7 7 8 8 8 8 9 9 9 9 9 10 10 10 10 10 : 작동횟수
1 1 2 2 2 2 3 3 3 3 3 3 4 4 4 4 4 4 4 4 : 중복 갯수
1 2 3 4 5 6 7 8 9 1011121314151617181920 : 거리

거리   중복횟수
1 2    1
3 6    2
7 12   3
13 20  4
21 30  5
*/

function solution(data) {
    const testCase = parseInt(data[0]);

    for (let i = 1; i <= testCase; i++) {
        let sp = data[i].split(' ').map(el => parseInt(el));
        let x = sp[0];
        let y = sp[1];

        let distance = (y - x);
        let term = Math.round(Math.sqrt(distance));

        let end = term * term + term;
        let start = end - 2 * term + 1;
        let mid = (start + end) / 2;
        
        
        if (distance < mid) {
            console.log(2 * term - 1);
        }
        else {
            console.log(2 * term);
        }
    }
}


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(input);


solution(['3', '0 3', '1 5', '45 50'])