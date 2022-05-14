// // დავალება 1.
// const arr1 = [15, 0, 58, 96, 101, 200, 3512, 98, 121, 21];

// //ვარიანტი I
// console.log(Math.max(...arr1));
// console.log(Math.min(...arr1));

// //ვარიანტიII
// let min = arr1[0];
// let max = arr1[0];

// for (let item of arr1){
//   if (item < min){
//     min = item
//   }
//   if (item > max){
//     max = item
//   }
// }
// console.log(min, max);


// // დავალება 2.
// // ვარიანტი I

// let numb1 = 2;
// let numb2 = 7;

// console.log(numb1** numb2)

// // ვარიანტი II

// function myFunc(numb1){
//     const sorting = numb1 ** numb2;
//     return sorting;

// }

// console.log(myFunc(numb1=2, numb2=6));

// //ვარიანტი II

// function test(a, b){
//   return a ** b;
// }

// const result = test(8, 5);
// console.log(result);

// // დავალება 3.
// const arrow = (a, b) => a ** b;
// const result2 = arrow(3, 3);
// console.log(result2);

// // დავალება 4.
// //  do while ქმნის ციკლი მუშაობს მანამ, სანამ რეზულტატი არ იქნება false

// let rezultati = '';
// let i = 0;

// do {
//   i = i + 1;
//   rezultati = rezultati + i;
// } while (i < 28);

// console.log(rezultati);

// // do while ერთხელ  მაინც შესრულდება.

// let i = 10;

// while(i > arr1.length) {
//   console.log(arr1[i]);
//   i++;
// }

// do{
//   console.log(arr1[i]);
//   i++;
// } while(i > arr1.length);