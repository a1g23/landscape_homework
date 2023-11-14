// adding a player object to track money, the method they currently have and if they won the game
const player = {
    money: 0,
    methodArr: 0,
    wonGame: false
}

// adding a method object as an array to track method and how much you make from that method

const method = [
    {name: "Teeth", cost: 0, revenue: 1},
    {name: "Scissors", cost: 5, revenue: 5},
    {name: "Lawnmower", cost: 25, revenue: 50},
    {name: "Fancy Lawnmower", cost: 250, revenue: 100},
    {name: "Starving Students", cost: 500, revenue: 250}
]


// function to cut lawn, we want an alert to ask how many lawns cut and then alert them with progress
function cutLawn(){
    const tool = method[player.methodArr]
    player.money = player.money + tool.revenue
    alert("You've made " + player.money + " dollars and you're using " + tool.name)
}

// function to upgrade your tool. you'll get the next tool in the array and the player will have to subtract from their funds
function upgrade() {
    const tool2 = method[player.methodArr + 1]
    if (player.money >= tool2.cost) {
    player.money = player.money -= tool2.cost
    player.methodArr = player.methodArr + 1
    alert("Congrats! you just bought a " + tool2.name + "! Keep Going! You'll start making more money now")
    } else {
        alert("Not enough money to upgrade! Keep working hard!")
    }
}

// function to win the game
// player has to have more than 1000 and the method array they are using needs to be greater than the length of the array (ie the last method)
function gameWon() {
    if (player.money >= 1000 && player.methodArr === (method.length - 1)) {
        player.wonGame = true
        alert("You won the game!!!")
    }
}
// I can remove the second else part of the gamewon function, shouldnt run  if the if conditions arent met
// games are loops. We need to continue to ask for feedback on if the player wants to cut the lawn or upgrade until they have won the game
while(player.wonGame === false) {
    const playerDecision = prompt("do you want to cut a lawn or upgrade your tool?", "cut a lawn")
    if(playerDecision === "cut a lawn") {

        cutLawn()
        
    } else if(playerDecision === "upgrade" || playerDecision === "upgrade tool") {
        
        upgrade()
        
    } else {
        alert("You'll need to type 'cut a lawn' or 'upgrade tool' to continue!")
    }

    gameWon()
}




// first lets give the option with a prompt, for the player to log how many lawns they cut today
// const lawnsCutTeeth = prompt("Working today? How many lawns did you cut with your teeth?", 0)


// // if the player cut more than one lawn with their teeth, they made $1 multiplied by how many lawns they cut. If they
// // make more than $5 dollars, they can buy scissors and make $5 per lawn
// if(lawnsCutTeeth > 0 && lawnsCutTeeth < 5) {
//     alert("we made $" + (lawnsCutTeeth * 1) + " today")
// } else if (lawnsCutTeeth >= 5) {
//     const scissors = prompt("we made $" + (lawnsCutTeeth * 1) + " today. Do want to up your game with some scissors?", "yes") 
//     if(scissors === "yes") {
//         alert("great investment, you'll make $5 per lawn now!")
//     }
// }

// // if the player bought scissors, we can ask them what the
// const teethOrScissors = prompt("Back at it! Did you use teeth or scissors today?","scissors")

// if(teethOrScissors === "scissors") {
//     const lawnsCutScissors = prompt("Good choice, how many lawns did you cut?",0)
//     if(lawnsCutScissors > 0 && lawnsCutScissors < 5) {
//         alert("we made $" + (lawnsCutScissors * 5) + " today")
//     } else if (lawnsCutScissors >= 5) {
//         const lawnmower = prompt("we made $" + (lawnsCutScissors * 5) + " today. Do want to up your game with a old lawnmower?", "yes") 
//         if(lawnmower === "yes") {
//             alert("great investment, you'll make $50 per lawn now!")
//         }
//     }
// } else {
//     alert("come on! you won't make it in this business unless you invest in better equipment!")
// }

