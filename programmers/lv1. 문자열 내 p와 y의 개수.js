/*
-- 생각한 풀이과정--
1. 변수 2개(countP, countY)를 초기화 한다
2. charCodeAt()을 이용하여 p와P, y와Y가 나오면 각각 변수를 ++한다
3. 두 변수가 같을 때 true, 아니면 false를 반환
112 == 80(p, P) & 121 == 89(y, Y)
*/
function solution(s){
    var answer = true;
    let countP = 0;
    let countY = 0;
    for(let i = 0; i < s.length; i++) {
        if((s.charCodeAt(i) === 112)||(s.charCodeAt(i) === 80))
            countP++;
        else if((s.charCodeAt(i) === 121)||(s.charCodeAt(i) === 89))
            countY++;
    }
    if(countP === countY)
        return answer;
    else
        return answer = false;
}