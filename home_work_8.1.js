const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31]
numbers.forEach((element) => {
    if (element % 3 === 0){
        console.log(element)
    }
  });
  const mapArray = numbers.map((element, index, array) => {
  return element - array.length;
});
console.log(mapArray);

const newFilter = numbers.filter((element, index, array) => {
    return element > array[index -1];
  });
  console.log(newFilter);

const find = numbers.find((element, index, array) => {
    return element == index;
  });
  console.log(find);

const newSort = numbers.toSorted((a, b) => a - b);
console.log(newSort);

const newReduce = numbers.reduce((accumulator, element) => {
    return accumulator + element;
  }, 0);
  console.log(newReduce);

const newSome = numbers.some((element) => element > 90);
  console.log(newSome);

const newEvery = numbers.every((element) => element > 9 && element < 100);
console.log(newEvery);