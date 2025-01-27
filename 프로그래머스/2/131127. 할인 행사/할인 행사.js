function solution(want, number, discount) {
    var answer = 0;
    
    const checkList = (wants, sales) => {
        if (wants.size > sales.size) return false
        
        let flag = true
        
        for (let [product, productCount] of wants) {
            const salesCount = sales.get(product)
            if (!salesCount || salesCount < productCount) {
                flag = false;
                break;
            }
        }
        
        return flag
    }
    
    const wants = new Map();
    want.forEach((w, index)=>{
        wants.set(w, number[index])
    })
    
    const sales = new Map();
    discount.slice(0,10).forEach((d)=>{
        if (sales.has(d)){
            sales.set(d, sales.get(d) + 1)
        } else {
            sales.set(d, 1)
        }
    })
    
    if (checkList(wants, sales)) {
        answer++;
    }
    
    for (let i = 10; i < discount.length; i++) {
        const prevProduct = discount[i-10];
        if (sales.get(prevProduct) === 1) {
            sales.delete(prevProduct)
        } else {
            sales.set(prevProduct, sales.get(prevProduct) - 1)
        }
        
        const newProduct = discount[i];
        if (sales.has(newProduct)){
            sales.set(newProduct, sales.get(newProduct) + 1)
        } else {
            sales.set(newProduct, 1)
        }
        
        if (checkList(wants, sales)) {
            answer++;
        }
    }
    
    return answer;
}