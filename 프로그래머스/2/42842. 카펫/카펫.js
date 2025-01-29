function solution(brown, yellow) {
    var answer = [];
    const total = brown + yellow;
    
    for(let width = 3; width <= total; width++) {
        if (total % width === 0) {
            const height = total / width;
            
            if ((width - 2) * (height - 2) === yellow) {
                width > height ?
                (answer = [width, height]) :
                (answer = [height, width])
                break;
            }
        }
    }
    
    return answer;
}