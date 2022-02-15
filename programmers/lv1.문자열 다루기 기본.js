function solution(s) {
    let result = parseInt(s);
    let answer = true;
    console.log(result);
    if ((s.length === 4 || s.length === 6) && s == result) {
      answer = true;
    } else {
      answer = false;
    }
    return answer;
}