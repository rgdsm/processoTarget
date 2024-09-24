function isFibonacci(number) {
    let a = 0, b = 1, temp = 0;
    while(temp < number) {
        temp = a + b;
        a = b;
        b = temp;
    }

    if (temp === number || number === 0) {
        console.log(`${number} pertence à sequencia de Fibonacci`);
    } 
    else {
        console.log(`${number} não pertence à sequencia de Fibonacci`);
    }
}
isFibonacci(21)
isFibonacci(31)
isFibonacci(42)