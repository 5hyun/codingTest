function solution(word) {
    let answer = 0;
    
    const table = {
        'A' : 0,
        'E' : 1,
        'I' : 2,
        'O' : 3,
        'U' : 4,
    }
    
    const weight = [1];
    
    
    for(let i = 1; i < 5; i++){
        weight.unshift(5 ** i + weight[0]);
    }
    
    const list = word.split('');
    list.forEach((w, index)=>{
        answer += (table[w] * weight[index]) + 1; 
    })
    
    return answer;
}