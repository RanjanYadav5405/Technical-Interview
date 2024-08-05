function revNumber(num){
    let rev = 0;
    while(num != 0){
        rev = rev * 10 + (num % 10);
        console.log(rev)
        num = Math.floor(num/10)
        
    }
    return rev
}

let number = 12345;
console.log(revNumber(number));