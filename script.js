// Imports
import { startGames, restartGames, stopGame } from "./js/functions.js"
import { buttons, btn_start, btn_restart, win_number, choiseText, lose_h1 } from "./js/variables.js"
import { states } from "./js/state.js"

let numbers = [
    1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,
    18,19,20,21,22,23,24,
    25,26,27,28,29,30,31,
    32,33,34,35,36
]

for (let i = 0; i < numbers.length; i++) {
    const btn = document.createElement("button")
    btn.classList.add("btn_number")
    btn.textContent = numbers[i]

    if (numbers[i] % 2 === 0) btn.classList.add("even")
    else btn.classList.add("odd")

    btn.addEventListener("click", function() {
        if (states.counter == 6 && this.style.backgroundColor === "blue") {
            this.style.backgroundColor = "transparent"
            states.counter--
        } else if (states.counter < 6) {
            if (this.style.backgroundColor !== "blue") {
                this.style.backgroundColor = "blue"
                states.counter++
            } else {
                this.style.backgroundColor = "transparent"
                states.counter--
            }
        }
    })

    buttons.append(btn)
}

while (states.newarr.length !== 6) {
    let rand = parseInt(Math.random() * 36 + 1)

    if (states.newarr.indexOf(rand) === -1) {
        states.newarr.push(rand)
        // console.log(states.newarr)

        win_number.forEach((btn, i) => btn.textContent = states.newarr[i])
    }
}

btn_start.addEventListener("click", () => startGames())
btn_restart.addEventListener("click", () => restartGames())
