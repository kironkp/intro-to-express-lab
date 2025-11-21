
const randomNum = (num) => {
    if (typeof num !== 'number') {
    return ('That is not a number')
   }

    else if (typeof num == 'number') {
    return Math.floor(Math.random() * num)
   }
    
   

} 

// console.log(typeof 'pizza')

// console.log(typeof 1)

console.log(randomNum(5))