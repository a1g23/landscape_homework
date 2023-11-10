console.log("landscaper")

// first lets give the option with a prompt, for the player to log how many lawns they cut today
const lawnsCutTeeth = prompt("Working today? How many lawns did you cut with your teeth?", 0)

// if the player cut more than one lawn with their teeth, they made $1 multiplied by how many lawns they cut
if(lawnsCutTeeth > 0 && lawnsCutTeeth < 5) {
    alert("we made $" + (lawnsCutTeeth * 1) + " today")
} else if (lawnsCutTeeth >= 5) {
    const scissors = prompt("we made $" + (lawnsCutTeeth * 1) + " today. Do want to up your game with some scissors?", "yes") 
    if(scissors === "yes") {
        alert("great investment, you'll make $5 per lawn now!")
    }
}












// the player starts at 0 lawns

