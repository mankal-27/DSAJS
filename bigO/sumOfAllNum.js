function addUpto(n){
    let total = 0;
    for(let i = 1; i<= n ; i++){
        total += i;
    }
    return total
}

function addUptoN(n){
    return n * (n + 1) / 2;
}

var firstFunction = addUpto(4)
var secondFunction = addUptoN(4)

console.log(`FirstFunction value : ${firstFunction}`)
console.log(`SecondFunction value : ${secondFunction}`)
