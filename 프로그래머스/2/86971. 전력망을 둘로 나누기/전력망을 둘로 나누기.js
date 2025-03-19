function solution(n, wires) {
    var answer = Infinity;
    
    const graph = {};
    
    [...Array(n)].forEach((_,index) => {
        graph[index+1] = [];
    })
    
    wires.forEach((wire)=>{
        const [a, b] = wire;
        
        graph[a].push(b);
        graph[b].push(a);
    })
    
    wires.forEach((wire)=>{
        const [cut_a, cut_b] = wire;
        let length = 1;
        const visited = Array.from({length: n+1}, ()=>false);
        visited[1] = true;
        
        const queue = [1];
        
        while(queue.length > 0) {
            const node = queue.shift();
            
            graph[node].forEach((v)=>{
                if ((node === cut_a && v === cut_b) || (node === cut_b && v === cut_a)) {
                    return;
                }
                
                if (!visited[v]){
                    queue.push(v);
                    visited[v] = true;
                    length++;
                }
            })
        }
        
        answer = Math.min(answer, Math.abs(length-(n-length)));
    })
    
    
    return answer;
}