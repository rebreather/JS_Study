/*
생각한 풀이과정
문자열 s에서 짝수번째 인덱스에 해당하는 글자는 toUpperCase()를 사용하여 새로운 변수 answer에 더한다. (홀수도 똑같이)
그 후 index++ 한다(s의 인덱스번호와 index의 값이 같이 올라가야 함)
공백을 만나면 index를 다시 0으로 초기화 시키고 answer에 공백을 더한다.
*/
function solution(s) {
    let answer = "";
    let index = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === " ") {
            index = 0;
            answer += " ";
        }
        else {
            if(index % 2 === 0) {
                answer += s[i].toUpperCase();
            }
            else {
                answer += s[i].toLowerCase();
            }
            index++;
        }
    }
    return answer;
}