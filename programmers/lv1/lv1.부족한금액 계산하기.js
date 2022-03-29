function solution(price, money, count) {
    let total = 0;
    let answer = 0;
    for(let i = 1; i <= count; i++) {
        total += (price*i);
    }
    answer = (money - total) > 0 ? 0 : (total - money);
    return answer;
}