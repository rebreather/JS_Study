function solution(n, m) {
    var answer = [];
    var greatest = (a, b) => {  
        if (b === 0) {
            return a
        }               
        return greatest(b, a % b)  
    }
    var least = (a, b) => (a*b) / greatest(a,b)
    return [greatest(n,m), least(n,m)];
}