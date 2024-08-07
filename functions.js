
// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if ( coffeeIsGrinding ) {
//         console.log("stop");
//     } else {
//         console.log("grinding beans for 20 seconds");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();



// const favcolor = () => {
//     console.log("my favorite color is red")
// }

// favcolor()

// parameters

// function square (number){
//     return number * number;
// };

//  square (5);

// activity1
// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));


// activity2
// let orderCounter = 0;
// const takeOrder = (topping1, topping2, topping3) => {
//     console.log(`can i have a pizza with ${topping1} & ${topping2} & ${topping3}`);
//         orderCounter++}

// takeOrder("chicken", "sweetcorn", "pineapple")

// activity 3

const cashWithdrawal = (amount = 800, accnum = 1234) => {
    if (accnum !== 1234){
        console.log("incorerect pin")
        return;
}
   
    
if (accnum === 1234 && amount <= 800){
    console.log(`withdrawing ; ${amount} from account ${accnum}`);

} else {
    console.log("not enough funds")
}
}

cashWithdrawal(800, 1234);
