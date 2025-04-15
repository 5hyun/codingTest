function solution(k, dungeons) {
    var answer = -1;
    
    const n = dungeons.length;
    const visited = Array.from({length: n}, () => false);
    
    const bfs = (k , count) => {
        answer = Math.max(answer, count);
        
        for (let i = 0; i < n; i++) {
            const [need, use] = dungeons[i];
            
            if (!visited[i] && k >= need) {
                
                visited[i] = true;
                bfs(k - use, count + 1);
                visited[i] = false;
            }
        }
    }
    
    bfs(k, 0);
    
    return answer;
}