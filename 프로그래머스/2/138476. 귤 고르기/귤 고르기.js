function solution(k, tangerine) {
    let answer = 0;
    
    const map = new Map();
    tangerine.forEach((item)=>{
     map.set(item, (map.get(item) ?? 0) + 1);   
    })
    
    const counts = [...map.values()].sort((a, b) => b-a);
    
    let sum = 0;
    for (let count of counts) {
        if (sum >= k) {
            break;
        }
        
        sum += count;
        answer++;
    }
    
    return answer;
}