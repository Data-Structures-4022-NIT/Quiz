function findFibonacciIndex(n, a = 0, b = 1, index = 0) {
    if (n < 0) 
        return -1; //Invalid input
    
    if (n === a) 
        return index;
    
    if (a > n) 
        return -1; //Mismatch
    
    return findFibonacciIndex(n, b, a + b, index + 1);
}

const number = parseInt(process.argv[2]);
console.log(`The position of ${number} in the Fibonacci sequence is: ${findFibonacciIndex(number)}`);
