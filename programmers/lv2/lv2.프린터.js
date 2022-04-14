function solution(priorities, location) {
    // 대기열 문서를 내 문서인지 확인하는 boolean isMe와 value를 가진 객체로 변환
    // map,some 때문에 속도가 느려지기 때문에 풀이 1이 더 나은거 같음.
    let list = priorities.map((element, index) => ({
        isMe: index === location,
        val: element,
    }));

    let ranking = 0;

    while (true) {
        // 첫 문서를 빼서 자신보다 중요도가 높은 문서가 하나라도 있으면
        // 대기열 제일 뒤로 보낸다
        let firstPage = list.shift();
        if (list.some((element) => element.val > firstPage.val)) {
            list.push(firstPage);
        } else {
            // 없으면 순위를 갱신하고 그 문서가 자신인지 확인한다.
            // 자신이 맞으면 순위를 return
            ranking++;
            if (firstPage.isMe) return ranking;
        }
    }
}