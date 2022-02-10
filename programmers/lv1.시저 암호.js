/*
s의 길이만큼 for문을 돌리고 공백이 나오면 공백을 answer에 더한다.
공백이 아니면 -> 문자의 아스키코드 번호를 구하고 -> n만큼 ++해서 다시 문자 출력
주의사항) z와 Z의 아스키코드를 넘어갔을 경우 -> 다시 a와 A의 아스키코드로 돌림
*/
function solution(s, n) {
    var answer = '';
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            answer += ' ';
        }
        else {
            let num = s.charCodeAt(i);
            for(let j = 0; j < n; j++) {
                if(num === 90) // Z 일때
                    num = 65;
                else if(num === 122) //z 일때
                    num = 97;
                else
                    num++;
            }
            answer += String.fromCharCode(num);
        }
    }
    return answer;
}