function solution(operations) {
    var answer = [];
    
    const queue = [];
    
    operations.forEach((operation)=>{
        const [key, num] = operation.split(' ');
        
        if (key === 'I') {
            queue.push(+num);
            queue.sort((a,b)=>a-b)
        } else if (key === 'D') {
            if (queue.length !== 0){
                +num === 1 ?  
                      queue.pop() : queue.shift(); 
            }
                
        }
    })
    
    
    if (queue.length === 0) {
        return [0, 0];
    } else {
        return [queue[queue.length - 1], queue[0]]
    }
}