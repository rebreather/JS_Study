function solution(numbers) {
    let sum = 0;
    for(let i = 0; i < 10; i++) {
        if(numbers.indexOf(i) === -1)
            sum += i;
    }
    return sum;
}