var list = [5,4,5,4,5,4,5,3,3,2,2,1,5];

function nthMostRare(array, value) {
    var count = 0;
    array.forEach((n) => (n === value && count++));
    return count;
}

console.log(nthMostRare(list, 2));