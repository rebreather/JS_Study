function solution(seoul) {
    var answer = '김서방은 ';
    for(let i = 0; i<seoul.length; i++) {
        if(seoul[i] === "Kim")
            answer += i;
    }
    answer +='에 있다';
    return answer;
}