function count(n){
    if(n<=0){
        console.log('done');
        return 0
    }else{
        console.log(n);
        return count(n-1)
    }
}
console.log(count(89))