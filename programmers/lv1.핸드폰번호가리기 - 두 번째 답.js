function solution(phone_number) {
    var answer = '';
    var sliced = phone_number.slice(-4); //맨 끝 4자리
    var changingnum = phone_number.slice(0,-4); //*로 치환될 번호
    
    for(var i = 0; i < changingnum.length; i++) {
        changingnum = changingnum.replace(changingnum[i],"*");
    }
    answer = changingnum + sliced;
    return answer;
}