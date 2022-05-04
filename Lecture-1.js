// array.concat()
const array1 = [0, 1, 10, 11, 100, 101, 110, 111];
const array2 = [2, 20, 22, 200, 202, 220, 222];
const array3 = array1.concat(array2);

console.log(array3);

//ორი ან მეტი array(მასივის) გასაერთიანებლად. არსებულში ცვლილებას არ ახდენს, არამედ აბრუნებს ახლა aaray.

//array.at()
console.log(array1.at(2));
console.log(array1.at(-2));

//ინდექსით აბრუნებს ელემენტს. ლოგიკურად 2-ნიშნავს მესამე ელემენტს. -2-ბოლოდან მეორე ელემენტს.
