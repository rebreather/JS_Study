function solution(n) {
    var answer = 0;
    let trit = n.toString(3).split('').reverse().join('');
    for(let i = 0; i < trit.length; i++) {
        answer += (trit[i]*3**(trit.length-1-i));
    }
    return answer;
}