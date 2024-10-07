const words = [
    "umbrella",   
    "apple",      
    "ocean",      
    "independent",
    "education",  
    "elephant",   
    "island",     
    "universe",   
    "environment",
    "queue"       
  ];
function countVowels(word) {
    const vowels = ["y", "o", "i", "e", "u", "a"];
    return word.toLowerCase().split("").filter(letter => vowels.includes(letter)).length;
  }
function sortWords(odno){
    return [...odno].sort((a, b) => countVowels(a) - countVowels(b))
}
console.log(sortWords(words))

//   Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
//     Массив должен быть отсортирован по возрастанию количества гласных букв в слове.