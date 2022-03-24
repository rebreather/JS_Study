function solution(new_id) {
    let answer = new_id.toLowerCase() //대문자를 소문자로
      .replace(/[^a-z0-9-_.]/gi, '') //알파벳 소문자, 숫자, -, _, . 제외하고 나머지 제거
      .replace(/[.]{2,}/gi, '.') //.가 2번 이상 연속되면 하나만 남도록
      .replace(/^[.]|[.]$/gi,''); // .가 처음이나 끝에 존재하면 제거
    if(answer === '') //빈 문자열이면 a대입
        answer = 'a';
    if(answer.length > 15){ //16자 이상이면 15자로 만들고 끝자리가 .이면 제거
      answer = answer.substring(0, 15);
      answer = answer.replace(/[.]$/gi,'');
    }
    while(answer.length < 3){ //문자열이 3 밑이면 문자열이 3될때까지 제일 끝 문자 반복적으로 붙임
      answer += answer[answer.length-1];
    }
    return answer;
}


console.log(solution('...!@Ba2T#*..y.abcd-ef7ghijkl_m'));