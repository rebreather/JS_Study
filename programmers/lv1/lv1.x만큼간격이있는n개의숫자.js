function solution(x, n) {
    var answer = [];
    for(var i = 0; i < n; i++){
        answer[i] = (x*(i+1));
    }
    return answer;
}