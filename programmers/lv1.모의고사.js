/*
1번 수포자 : 1 2 3 4 5 반복
2번 수포자 : 2 1 2 3 2 4 2 5 반복
3번 수포자 : 3 3 1 1 2 2 4 4 5 5 반복
*/

function solution(answers) {
    var answer = [];
    let supo1 = Array(answers.length).join('12345').split('').map(Number);
    let supo2 = Array(answers.length).join('21232425').split('').map(Number);
    let supo3 = Array(answers.length).join('3311224455').split('').map(Number);

    let idx1 = 0;
        idx2 = 0;
        idx3 = 0;
    
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === supo1[i])
            idx1++;
        if(answers[i] === supo2[i])
            idx2++;
        if(answers[i] === supo3[i])
            idx3++;
    }
    let max = Math.max(idx1, idx2, idx3);

    if(idx2 === idx1 && idx2 === idx3)
        answer.push(1,2,3);
    else if(max === idx1 && max === idx2 && max !== idx3)
        answer.push(1,2);
    else if(max === idx2 && max === idx3 && max !== idx1)
        answer.push(2,3);
    else if(max === idx1 && max === idx3 && max !== idx2)
        answer.push(1,3);
    else if(max === idx1 && max !== idx3 && max !== idx2)
        answer.push(1);
    else if(max !== idx1 && max === idx2 && max !== idx3)
        answer.push(2);
    else if(max !== idx2 && max === idx3 && max !== idx1)
        answer.push(3);

    return answer;
    
}