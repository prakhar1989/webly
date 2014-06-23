// problem: it is adding all of the numbers to the evenNumbers array
// even though it should only add even numbers
// fix it to only add even numbers!

//answer: The pushing of numbers onto the array was being done regardless of the condition cause the scope of the if was not defined.
// After adding {} it works.

var evenNumbers = []

function addEvensOnly(num) {
    if (num % 2 === 0){
    console.log(num, 'is even, adding!')
    evenNumbers.push(num)
    }
}

addEvensOnly(0)
addEvensOnly(1)
addEvensOnly(2)
addEvensOnly(3)
addEvensOnly(4)

console.log('even numbers: ', evenNumbers)
