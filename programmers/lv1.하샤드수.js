/*
    ===생각한 풀이과정===
    숫자를 문자열로 변환한 뒤 split으로 잘라내고 각 인덱스의 값의 총합을 구한다.
    x를 총합으로 나누었을 때 0이면 true반환하고, 아니면 false를 반환한다.
*/
function solution(x) {
    var answer = true;
    var sum = 0;
    var arrx = x.toString().split("");
    for(var i = 0; i< arrx.length; i++) {
        sum += Number(arrx[i]);
    }
    if((x % sum) == 0)
        return answer;
    else
        return !answer;
}