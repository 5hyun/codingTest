function solution(operations) {
    var answer = [];
    
    const queue = new Map();
    
    operations.forEach((operation) => {
        const [key, num] = operation.split(" ");
        
        if (key === "I") {
            queue.has(+num) ? queue.set(+num, queue.get(+num) + 1) :
                            queue.set(+num, 1);
        } else {
            const temp = [...queue.keys()].sort((a,b)=>a-b);
                  
            if (num === '1') {
                 queue.get(temp[temp.length-1]) > 1 ? 
                    queue.set(temp[temp.length-1], queue.get(temp[temp.length-1]) - 1):
                    queue.delete(temp[temp.length-1]);
            } else {
                 queue.get(temp[0]) > 1 ? 
                    queue.set(temp[0], queue.get(temp[0]) - 1):
                    queue.delete(temp[0]);
            }
        }
    })
    
    const temp = [...queue.keys()].sort((a,b)=>a-b);
    
    
    if (queue.size === 0) {
        return [0, 0];
    } else {
        return [temp[temp.length-1], temp[0]]
    }
}