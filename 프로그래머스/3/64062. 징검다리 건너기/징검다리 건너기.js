function solution(stones, k) {
    let left = 0;
    let right = 200_000_000;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        const isCross = can_cross(stones, k, mid);
        if (isCross) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
}

function can_cross(stones, k, people) {
    let count = 0;
    
    for (let i = 0; i < stones.length; i++) {
        if (stones[i] < people) {
            count++;
        } else {
            count = 0;
        }
        
        if (count >= k) {
            return false;
        }
    }
    
    return true;
}