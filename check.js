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
const lengthCheck = method.length
console.log(lengthCheck) // equals 5. winner is when length is method.length - 1