function solution(d, budget) {
    let sum = 0;
        answer = 0;
    let dpment = d.sort((a,b) => a-b);
    dpment.forEach((e) => {
        sum +=e;
        if(sum <= budget)
            answer++;
    });
    return answer;
}