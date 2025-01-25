function solution(tickets) {
    const graph = {};
    
    // 그래프 생성 (각 공항별 도착지 리스트)
    for (const [start, end] of tickets) {
        if (!graph[start]) graph[start] = [];
        graph[start].push(end);
    }
    
    // 각 공항의 도착지 알파벳 역순 정렬 (pop() 사용을 위해)
    for (const airport in graph) {
        graph[airport].sort((a, b) => b.localeCompare(a));
    }
    
    const path = [];
    
    function dfs(airport) {
        while (graph[airport] && graph[airport].length > 0) {
            const nextAirport = graph[airport].pop();
            dfs(nextAirport);
        }
        path.unshift(airport);
    }
    
    dfs('ICN');
    
    return path;
}