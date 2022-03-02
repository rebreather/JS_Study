function solution(numbers) {
    let arr = [];
        answer = [];
    for(let i = 0; i<numbers.length; i++) {
        for(let j = i+1; j<numbers.length; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }
    answer = arr.filter((value, i) => { //arr배열에서 중복되는 원소 제거
        return arr.indexOf(value) === i;
    });
    return answer.sort((a, b) => a-b); //오름차순으로 재배열
}