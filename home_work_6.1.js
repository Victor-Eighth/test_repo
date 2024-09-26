const arr = [1,2,3,4,5,6,7,8,9,10]
for(const digit of arr){
    if (digit % 2 === 0){
        console.log(digit*digit)
    } else if (digit % 2 === 1){
        console.log(digit*digit*digit)
    }
}

const arr1 = [1,2,3,4,5]
arr1.push(6) 
arr1.unshift(0)
arr1.splice(2,1)
arr1.pop()
console.log(arr1)

const arr2 = [10,20,30,40,50]
const [digit1, digit2, ...digit3] = arr2;
console.log(digit1, digit2, digit3);

const arr3 = [1,2,3,4,5]
const arr4 = [6,7,8,9,10]
const mergedArray = [...arr3, ...arr4]
console.log(mergedArray)