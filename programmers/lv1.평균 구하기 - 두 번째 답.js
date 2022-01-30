function solution(arr) {
    var answer = 0;
    var sum = arr.reduce((acc,i) => acc + i, 0);
    answer = sum/arr.length;
    return answer;
}