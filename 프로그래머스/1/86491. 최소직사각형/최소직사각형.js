function solution(sizes) {
    var answer = 0;
    
    sizes = sizes.map((v)=>{
        const [a,b] = v;
        if (a < b) {
            return [b, a]
        } else return [a,b]
    })
    
    let x = -Infinity;
    let y = -Infinity;
    
    sizes.map(([a, b])=>{
        x = Math.max(x, a);
        y = Math.max(y, b);
    })
    
    return x * y;
}