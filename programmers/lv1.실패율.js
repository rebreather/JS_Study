function solution(N, stages) {
    let answer = [];
    let people = stages.length; //총 사용자 수
    for (let i = 1; i <= N+1; i++) {
        let tmp = stages.filter(n => n === i).length; //각 스테이지에 있는 사용자 수
        answer.push([i, tmp / people]); //answer = [[스테이지, 실패율]]
        people -= tmp;
    }
    answer.pop(); //N+1번째는 전부 다 클리어 한 사람들이기 때문에 배열에서 없앤다.
    answer = answer.sort((a,b) => b[1] - a[1]); //answer의 실패율 기준으로 내림차순 정렬
    return answer.map(a => a[0]);
}