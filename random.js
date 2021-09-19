// this is to generate the first random 100 numbers

let randomNumbers = Array.from({length: 100}, () => Math.floor(Math.random() * 100));

console.log(' This is the first random numbers ' + randomNumbers );

// Now the problem here is that I don't know if the genrated numbers here were from the first random numbers
// Help me !
let newRandomNumbers = Array.from({randomNumbers, length: 10}, () => Math.floor(Math.random() * 10));

console.log(' This is the second random numbers ' + newRandomNumbers);

