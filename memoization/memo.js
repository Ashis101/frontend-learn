// Implementing Memoization in jabvascript
// memoization is an optimization technique that can be used to reduce
// time-consuming calculations by saving previous input to somthing called cache and 
// returning that result from it


const calc=(n)=>{
    let sum=0;

    for(let x=0;x<n;x++){
        sum+=1;
    }
    return sum;
}

const memoize=(fun)=>{
    let cache={}
    return function(...args){
        let n=args[0];
        if(n in cache){
            console.log("in cache")
            return cache[n]
        }else{
            console.log("store in cache")
            let result=fun(n)
            cache[n]=result
            return result
        }
    }
}



console.time()
console.log(memoize(calc)(5))
console.timeEnd()
