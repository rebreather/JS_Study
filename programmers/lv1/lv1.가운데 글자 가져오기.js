function solution(s) {
    let answer = '';
    let arr = s.split('');
    if(s.length % 2 === 1) { // 문자열 길이가 홀수일 때
        for(let i = 0; i<parseInt(s.length/2); i++) {
            arr.pop();
            arr.shift();
        }
        answer = arr.join('');
    }
    else { //짝수
        for(let i = 0; i<(s.length/2) - 1; i++) {
            arr.pop();
            arr.shift();
        }
        answer = arr.join('');
    }
    return answer;
}