function solution(prices) {
    var answer = Array.from({length: prices.length}, () => 0);
    let stack = [];
    
    for (let i = 0; i < prices.length; i++) {
        let now = prices[i];
        while (stack.length > 0 && prices[stack[stack.length - 1]] > now) {
            let j = stack.pop();
            answer[j] = i - j;
        }
        
        stack.push(i);
    }
    
    while(stack.length > 0) {
        let j = stack.pop();
        answer[j] = prices.length - 1 -j;
    }
    
    return answer;
}