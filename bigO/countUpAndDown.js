function countUpAndDown(n){
    console.log("Going UP !!")
    for(let i = 0 ; i<n ; i++){
        console.log(i);
    }
    console.log("At the top! \nGoing  down............");
    for(let j = n-1 ; j>=0 ; j--){
        console.log(j);
    }
    console.log("Back down. bye!")
}

countUpAndDown(10)


function printAllPairs(n){
    for(var i = 0 ; i< n; i++){
        for(var j = 0 ; j < n ;  j++){
            console.log(i, j)
        }
    }
}

printAllPairs(12)