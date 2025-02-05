function solution(s) {
    
    const list = s.slice(2, -2).split('},{').map((s)=>s.split(',')).flat();
    
    const map = new Map();
    
    list.forEach((s)=> {
        if (map.has(s)){
            map.set(s, map.get(s)+1)
        } else {
            map.set(s,1)
        }
    })
    
    var answer = Array.from({length: map.size}, () => null);
    
    for(let [value, index] of map){
        answer[map.size - index] = +value
    }
    
    return answer;
}