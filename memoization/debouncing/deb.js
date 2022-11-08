
function debouncing(call,d){
    let timer=d;

    return function(...args){
        if(timer) clearTimeout(timer)
        setTimeout(()=>{
            console.log("args"+args)
            call(args)
        },d)
    }
}
function search(e){

    console.log("search key :: "+e)
}


const deb=debouncing(search,1000)


