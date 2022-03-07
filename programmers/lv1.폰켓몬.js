function solution(nums) {
    var answer = 0;
    let arr = nums.filter((e, idx) => nums.indexOf(e) === idx);
    if(arr.length > nums.length/2)
        answer = nums.length/2;
    else
        answer = arr.length;
    return answer;
}