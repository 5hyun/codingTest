function solution(prices) {
    var answer = Array.from({length: prices.length}, () => 0);
    
    const stack = [];
    
    for (let i = 0; i < prices.length; i++) {
        while(stack.length > 0 && prices[stack[stack.length-1]] > prices[i] ) {
            const prevIndex = stack.pop()
            answer[prevIndex] = i-prevIndex;
        }
        
        stack.push(i);
    }
    
    stack.forEach((s)=> {
        answer[s] = prices.length - s - 1;
    })
    
    return answer;
}