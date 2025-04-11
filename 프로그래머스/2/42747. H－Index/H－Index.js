function solution(citations) {
    let answer = 0;
    
    citations.sort((a, b)=> b - a);
    
    for(let i = 0; i < citations.length; i++) {
        const paper_count = i + 1;
        
        const currentCitation = citations[i];
        
        if (paper_count <= currentCitation){
            answer = paper_count;
        } else {
            break;
        }
    }

    return answer;
}