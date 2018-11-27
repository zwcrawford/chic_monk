for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // multiples of 7 will appear as "monkey"
    if (currentNumber % 7 === 0) {
        let monkey = "monkey"
        console.log(monkey); 
    } 
    // multiples of 5 will appear as "chicken" (whether they end in 5 or 0)
    else if (currentNumber % 5 === 0 || currentNumber % 5 === 5) {
        let chicken = "chicken"
        console.log(chicken); 
    } 
    // print all other number that do not meet the above conditions
    else {
        console.log(currentNumber);
    }
}