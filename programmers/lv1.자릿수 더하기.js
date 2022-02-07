function solution(n) {
    var answer = 0;
    let arr = n.toString().split("").map(Number);
    for(let i = 0; i<arr.length; i++) {
        answer +=arr[i];
    }
    return answer;
}