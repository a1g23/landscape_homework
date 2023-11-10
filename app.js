console.log("landscaper")

// first lets give the option with a prompt, for the player to log how many lawns they cut today
const lawnsCutTeeth = prompt("Working today? How many lawns did you cut with your teeth?", 0)

// if the player cut more than one lawn with their teeth, they made $1 multiplied by how many lawns they cut. If they
// make more than $5 dollars, they can buy scissors and make $5 per lawn
if(lawnsCutTeeth > 0 && lawnsCutTeeth < 5) {
    alert("we made $" + (lawnsCutTeeth * 1) + " today")
} else if (lawnsCutTeeth >= 5) {
    const scissors = prompt("we made $" + (lawnsCutTeeth * 1) + " today. Do want to up your game with some scissors?", "yes") 
    if(scissors === "yes") {
        alert("great investment, you'll make $5 per lawn now!")
    }
}

const teethOrScissors = prompt("Back at it! Did you use teeth or scissors today?","scissors")

if(teethOrScissors === "scissors") {
    const lawnsCutScissors = prompt("Good choice, how many lawns did you cut?",0)
    if(lawnsCutScissors > 0 && lawnsCutScissors < 5) {
        alert("we made $" + (lawnsCutScissors * 5) + " today")
    } else if (lawnsCutScissors >= 5) {
        const lawnmower = prompt("we made $" + (lawnsCutScissors * 5) + " today. Do want to up your game with a old lawnmower?", "yes") 
        if(lawnmower === "yes") {
            alert("great investment, you'll make $50 per lawn now!")
        }
    }
}












// the player starts at 0 lawns

