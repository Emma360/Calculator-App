// this is to generate the first random 100 numbers
let randomNumber = Array.from({length: 100}, () => Math.floor(Math.random() * 100));

document.write('This is the first random nunmbers ' + randomNumber);

// Now the problem here is that I don't know if the genrated numbers here were from the first random numbers
// Help me !
let newRnd = Array.from({randomNumber, length: 10}, () => Math.floor(Math.random() * 10));

document.write('This is the second random numbers ' + newRnd);