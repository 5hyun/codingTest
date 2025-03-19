function solution(k, dungeons) {
    let answer = -1;
    const n = dungeons.length;
    const visited = Array.from({length: n}, ()=>false);
    
    function dfs(k, count) {
        answer = Math.max(answer, count)
        
        for (let i = 0; i < n; i++) {
            const [need, use] = dungeons[i];
            
            if (!visited[i] && k >= need) {
                visited[i] = true;
                dfs(k-use, count + 1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    
    return answer;
}