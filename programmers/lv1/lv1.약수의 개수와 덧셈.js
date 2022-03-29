function solution(left, right) {
    var answer = 0;
    let numArr = [];
    for(let i = left; i<=right; i++) { //left부터 right까지
        for(let j = 1; j<=i; j++) { // 나눠야 할 수
            if(i%j === 0) //약수 찾기
                numArr.push(j);
        }
        if(numArr.length % 2 === 0) //약수의 갯수가 짝수일 때
            answer += i;
        else
            answer -= i;
        numArr = [];
    }
    return answer;
}