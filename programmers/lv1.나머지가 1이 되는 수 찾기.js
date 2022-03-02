function solution(n) {
    let index = 0;
    for(let i = 1; i<n; i++) {
        index++;
        if(n % i === 1)
            break;
    }
    return index;
}