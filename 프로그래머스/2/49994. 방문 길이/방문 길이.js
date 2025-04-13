function solution(dirs) {
    var answer = 0;
    
    const enums = {
        'U': [0, 1],
        'D': [0, -1],
        'R': [1, 0],
        'L': [-1, 0],
    };
    
    let x = 0;
    let y = 0;
    
    const road = [];
    
    dirs.split('').forEach((dir)=>{
        const [dx, dy] = enums[dir];
        
        let nx = x + dx;
        let ny = y + dy;
        
        if (nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5) {
            if (!road.includes(JSON.stringify([[x, y], [nx, ny]]))) {
                road.push(JSON.stringify([[x, y], [nx, ny]]));
                road.push(JSON.stringify([[nx, ny], [x, y]]));
                
                answer++;
            } 
            
            x = nx;
            y = ny;
            
        }
    })
    
    return answer;
}