function fib(s) {
    if(s == 0) return [0];
    if(s < 2) {
        return [0,1];
    }
    if(s < 3) {
        return [0,1,1];
    } 
    else {
      
        var resultArr = fib(s-1);
        resultArr.push(resultArr[s-2]+resultArr[s-1]);
        return resultArr;
    }
}
console.log(fib(10));
// get help from TA

//Invariant
/**
 * What I think is always true is the new array element is the sum of the previous two numbers,
 *  So something is a new array item pushed into the old array = (arr[n-1]+arr[n-2])
 */
