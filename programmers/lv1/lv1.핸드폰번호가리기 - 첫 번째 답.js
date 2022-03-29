function solution(phone_number) {
    var unsliced = '';
    var num = phone_number.split(""); //['0','1',...]
    var count = 0;
    var sliced = num.slice(0,-4); // [0,1,0,6,2,7,9]
    var remained = num.slice(-4); //[2,6,7,9]
    
    count = sliced.length; //잘려진 배열의 길이
    
    for(var i = 0; i < count; i++) {
        remained.unshift('*'); 
        //잘려진 배열의 길이만큼 남아있는 remained 배열에 * 넣기
    }
    sliced = remained.join("");
    return sliced;
}