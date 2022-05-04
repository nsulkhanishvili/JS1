// დავალება 1.
const arr1 = [15, 0, 58, 96, 101, 200, 3512, 98, 121, 21];


console.log(Math.max(...arr1));
console.log(Math.min(...arr1));

// დავალება 2.
// ვარიანტი I

let numb1 = 2;
let numb2 = 7;

console.log(numb1** numb2)

// ვარიანტი II

function myFunc(numb1){
    const sorting = numb1 ** numb2;
    return sorting;

}

console.log(myFunc(numb1=2, numb2=6));

// დავალება 3.

let a = 4;
let b = 4;
function myArrow(){
  return a ** b;
}
console.log(myArrow());

// დავალება 4.
//  do while ქმნის ციკლი მუშაობს მანამ, სანამ რეზულტატი არ იქნება false

let rezultati = '';
let i = 0;

do {
  i = i + 1;
  rezultati = rezultati + i;
} while (i < 28);

console.log(rezultati);
