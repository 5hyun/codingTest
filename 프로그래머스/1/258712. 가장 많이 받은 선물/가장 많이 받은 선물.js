function solution(friends, gifts) {
    var answer = 0;
    
    let lists = {};
    friends.forEach(friend => {
        const temp = new Map()
        
        temp.set('count', 0)
        lists[friend] = temp
    })
    
    gifts.forEach((gift) => {
        const [a,b] = gift.split(' ')
        const a_list = lists[a]
        const b_list = lists[b]
        
        if (a_list.has(b)){
            a_list.set(b, a_list.get(b) + 1)
        } else {
            a_list.set(b, 1)
        }
        a_list.set('count', a_list.get('count')+1)
        b_list.set('count', b_list.get('count')-1)
        
        lists[a] = a_list
        lists[b] = b_list
    })

    const answerList = {}
    friends.forEach((friend) => {
        answerList[friend] = 0
    })

    for(let i = 0; i < friends.length; i++) {
        for(let j = i + 1; j < friends.length; j++ ) {
            const a = friends[i];
            const b = friends[j];
            
            const a_temp = lists[a].get(b) ?? -1
            const b_temp = lists[b].get(a) ?? -1 

            if (a_temp > b_temp) {
                answerList[a] += 1
            } else if (a_temp < b_temp) {
                answerList[b] += 1
            } else {
                const a_count = lists[a].get('count') 
                const b_count = lists[b].get('count') 

                if (a_count > b_count) {
                    answerList[a] += 1
                } else if (a_count < b_count) {
                    answerList[b] += 1
                } 
            }
        }
    }
    
    return Math.max(...Object.values(answerList))
}