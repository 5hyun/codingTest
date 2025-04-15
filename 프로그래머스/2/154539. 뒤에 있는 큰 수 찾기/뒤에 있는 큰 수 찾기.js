function solution(numbers) {
    var answer = Array.from({length: numbers.length}, () => -1);
    
    const stack = [];
    
    for(let i = 0; i < numbers.length; i++) {
        while (stack.length > 0 && numbers[i] > numbers[stack[stack.length-1]]) {
           answer[stack.pop()] = numbers[i];
        }
        
        stack.push(i);
    }
    
    return answer;
}