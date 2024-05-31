let a = parseInt(prompt("enter a first number"))
let b = parseInt(prompt("enter a second number"))
let op = prompt("enter operation +,-,*,/")

let ob = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}
op = ob[op] 

alert(`${a} ${op} ${b} Result: ${eval(`${a} ${op} ${b}`)}`)
