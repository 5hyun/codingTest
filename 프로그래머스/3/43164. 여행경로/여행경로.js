function solution(tickets) {
    var answer = [];
    
    const graph = {};
    
    tickets.forEach((ticket)=>{
        const [a, b] = ticket;
        
        if (!graph[a]) {
            graph[a] = [b];
        } else {
            graph[a].push(b);
        }
    });
    
    for (let airport in graph) {
        graph[airport].sort((a,b)=>b.localeCompare(a));
    }
    
    const dfs = (airport) => {
        while (graph[airport] && graph[airport].length > 0) {
            const nextAirport = graph[airport].pop();
            dfs(nextAirport);
        }
        
        answer.unshift(airport)
    }
    
    dfs('ICN')
    
    return answer;
}