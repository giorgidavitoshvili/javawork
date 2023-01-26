// 1

let number = 7;

let reminder = (number % 2);

if (reminder == 0)
{
    console.log(false)
}
else {
    console.log(true)
}


// 2

function NameLength(currency) {
if (currency === "USD") {
    console.log("$");
    return "$";
  }
  if (currency === "EURO") {
    console.log("€");
    return "€";
  }
  if (currency === "GEL") {
    console.log("ლ");
    return "ლ";
  }
}

NameLength("USD");



// 3

let name = 'MY NAME IS JOHN';

console.log(name.toLowerCase());


// 4

const numbers = [6, 14, 5, 7, 12, 11, 23];
const odds = numbers.filter((num) => num % 2 !== 1);
console.log(odds);


// 5

const getName = function (name) {
console.log(${name});
};

getName("Giorgi");
getName("Noka");
getName("Lado");


// 6

function calcExpense(income, expense) {
    const profit = income - expense;
    return profit;
  }
  
  const jan = calcExpense(100, 20);
  const Feb = calcExpense(300, 150); 
  const mar = calcExpense(400, 150); 
  const apr = calcExpense(100, 250); 
  const may = calcExpense(700, 550); 

  const sumOfProfit = jan + Feb + mar + apr + may;
  console.log(sumOfProfit);