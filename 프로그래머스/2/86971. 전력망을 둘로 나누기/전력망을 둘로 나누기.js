function solution(n, wires) {
    var answer = Infinity;
    
    const graph = {};
    
    for(let i = 1; i <= n; i++) {
        graph[i] = [];
    }
    
    wires.forEach((wire) => {
        const [a, b] = wire;
        
        graph[a].push(b);
        graph[b].push(a);
    })
    
    wires.forEach((wire)=> {
        const [cut_a, cut_b] = wire;
        let length = 1;
        const visited = Array.from({length: n+1}, () => false);
        visited[1] = true;
        
        const queue = [1];
        
        while(queue.length > 0) {
            const node = queue.shift();
            
            graph[node].forEach((g) => {
                if ((g === cut_a && node === cut_b) || (g === cut_b && node === cut_a)){
                    return;
                }
                
                if (!visited[g]) {
                    visited[g] = true;
                    queue.push(g);
                    
                    length++;
                }
            })   
        }
        
        answer = Math.min(answer, Math.abs(length - (n - length)));
    })
    
    return answer;
}