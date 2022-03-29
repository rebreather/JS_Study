/*
--생각한 풀이과정--
1. for문으로 arr1, arr2의 원소들을 이진법으로 변환(string), padStart(n, '0') 함수 사용
2. 이중 for문으로 0이면 공백, 1이면 #으로 암호화하여 arr3, arr4에 push()하기
4. 이중 for문과 if문을 사용하여 둘다 각 인덱스의 문자열이 공백이면 공백, 그 외엔 #을 더함
5. answer 배열에 새로운 문자열 push() 
*/

function solution(n, arr1, arr2) {
    let answer = [];
    let firstNum, secondNum; //arr1, arr2의 숫자들을 이진법으로 변환해서 넣는 문자열
    let firstNum_map, secondNum_map; //이진수로 변환된 문자열을 암호화된 문자열로 변환
    let arr3 = [];
        arr4 = []; // firstNum_map과 secondeNum_map을 각각 넣을 배열
    let mapCode; // arr3과 arr4 안에 각 문자열들을 합친 새로운 암호화된 배열
    
    for(let i = 0; i<arr1.length; i++) { //arr1 처리
        firstNum_map = "";
        firstNum = arr1[i].toString(2).padStart(n, '0');
        for(let j = 0; j<n; j++) {
            if(firstNum[j] === '0')
                firstNum_map += ' ';
            else
                firstNum_map += '#';
        }
        arr3.push(firstNum_map);
    }

    for(let i = 0; i<arr2.length; i++) { //arr2 처리
        secondNum_map = "";
        secondNum = arr2[i].toString(2).padStart(n, '0');
        for(let j = 0; j<n; j++) {
            if(secondNum[j] === '0')
                secondNum_map += ' ';
            else
                secondNum_map += '#';
        }
        arr4.push(secondNum_map);
    }
    
    for(let k = 0; k < n; k++) { //두 map을 비교
        mapCode = '';
        for(let l = 0; l <n; l++) {
            if((arr3[k][l] === ' ') && (arr4[k][l] === ' '))
                mapCode += ' ';
            else
                mapCode += '#';
        }
        answer.push(mapCode);
    }
    return answer;
}