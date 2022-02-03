/*
만약 배열의 길이가 1이라면 비교할 수 있는 대상이 없으므로 answer배열에 -1을 넣어서 리턴한다.
arr 안에서 가장 작은 수를 min을 구한다.
for문을 돌려서 min의 인덱스에 왔을 때 그 값을 제거한다. 
*/

function solution(arr) {
    var answer = [];
    if(arr.length == 1) {
        answer.push(-1);
    }
    else {
        var min = Math.min.apply(null,arr);
        for(var i = 0; i< arr.length; i++) {
            if(arr[i] == min) {
                arr.splice(i,1);
            }
        }
        answer = arr;
    }
    return answer;
}