function solution(n) {
    var answer = '';
    
    while(n > 0) {
        const div = n % 3;
        if (div === 0){
            n = parseInt(n/3) - 1;
            answer = 4 + answer;
        } else if (div === 1){
            n = parseInt(n/3);
            answer = 1 + answer;
        } else if (div === 2){
            n = parseInt(n/3);
            answer = 2 + answer;
        }
    }
    return answer;
}