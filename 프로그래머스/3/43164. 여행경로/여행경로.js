function solution(tickets) {
    var answer = [];
    
    const graph = {};
    
    tickets.forEach((ticket) => {
        const [a, b] = ticket;
        
        graph[a] ? graph[a].push(b) : graph[a] = [b];
    })
    
    for (let g in graph) {
        graph[g].sort((a,b)=>b.localeCompare(a));
    }
    
    const dfs = (airport) => {
        while(graph[airport]?.length > 0){
            const nextAirport = graph[airport].pop();
            dfs(nextAirport);
        }
        
        answer.unshift(airport);
    }
    
    dfs('ICN')
    
    return answer;
}