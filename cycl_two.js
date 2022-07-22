let arr = [ "a", "b", 3, "a", null, NaN, 'abrakadabra ', '3', 30, undefined,3,3,"3",3,"3"]

function count(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "3" ) {
            sum++
        }
    }
    return sum
    
}

console.log(count(arr)) 