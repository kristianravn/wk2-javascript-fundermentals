
// let coffeeOrder = [
//     "Alex - Cortado",
//     "ben - Cortado",
//     "Charlie - Whats new",
// ];
// console.log(coffeeOrder);

// activity 1
// let faveSongs = [
//     "dancing Queen",
//     "girl On Fire",
//     "stand by me",
//     "walking on sunshine"
// ];

// for (let i = 0; i <  faveSongs.length; i++){
//     console.log(faveSongs[i]);
// }


// let randomNum = [];

// for (let i = 0; i < 30; i++){
//     if (i % 2 == 0){
//         randomNum.push(i);
//     }
    
// }
// console.log(`Numbers divisible by 2: ${randomNum}.`);



// let age = 10;
// while(age < 18 ){
//     console.log("you are a child")
//     age++
// }



// let cards = [ "Diamonds", "Spade", "Heart", "Club" ];
// let currentCard = "Club";
//  while ( currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
//     }

//     console.log(currentCard);

// activity1

// let films =[ "die hard","the matrix","lord of the rings","rumble in the bronx"];
// let currentFilm ="lord of the rings";

// while (currentFilm != "die hard"){

//     console.log(currentFilm);
//     currentFilm = films[Math.floor(Math.random()*3)];
// }


// console.log (currentFilm);

// coffeshop

// let coffeeShop = {
//     branch: "costa",
//     drinksList : ["coffee", 2.50, "tea", 1.50],
//     foodList : ["cake", 3, "ice cream", 4],
//     drinksOrdered(drink){
//       let total = 0;  
//       for (let i = 0; i < drink.length; i++){
//          let indexOfItem = this.drinksList.indexOf( drink [i])
           
//             if(indexOfItem !== -1){
//                 total += this.drinksList[indexOfItem + 1 ]
//                 console.log(`${drink[i]} £${this.drinksList[ indexOfItem + 1 ].toFixed(2)}` )
//             }

//         }


//         console.log(`Total: £${total.toFixed(2)}`)
//     }
// }

// coffeeShop.drinksOrdered(["coffee", "tea", "coffee", "water"])


