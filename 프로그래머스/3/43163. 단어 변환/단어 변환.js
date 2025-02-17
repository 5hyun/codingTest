function solution(begin, target, words) {
    let answer = 0;
    
    if (!words.includes(target)) {
        return 0;
    }
    
    const queue = [[begin, 0]];
    const visited = new Set();
    
    while(queue) {
        const [now, count] = queue.shift();
        
        if (now === target) {
            return count;
        }
        
        for(let word of words) {
            if(!visited.has(word) && check(now, word)) {
                queue.push([word, count+1]);
                visited.add(word)
            }
        }
    }
    
    return 0;
}

function check(a, b) {
    let count = 0;
    
    let tempA = a.split('');
    let tempB = b.split('');
    
    for(let i = 0; i < tempA.length; i++) {
        if (tempA[i] !== tempB[i]){
            count++;
        }
        
        if (count > 1) {
            break;
        }
    }
    
    return count === 1;
}