// Imports
import { states } from "./state.js"
import {
    lose_h1, choiseText, btn_start, btn_restart, win_number, win, win_h1, win_h3, choiseNumb, btn_number
} from "./variables.js"


// Exports functions
export function startGames() {
    if (states.counter !== 6) {
        console.log("fill numbers")
        return
    } else {
        document.querySelectorAll('.btn_number').forEach(btn => {
            if (btn.style.backgroundColor === "blue") states.newarr1.push(Number(btn.textContent))
        })

        let winner = 0
        for (let i = 0; i < states.newarr.length; i++) {
            for (let j = 0; j < states.newarr1.length; j++) {
                if (states.newarr[i] === states.newarr1[j]) winner++
            }
        }

        if (winner === 6) {
            win_h3.textContent = 'You guessed 6 number'
            win_h1.textContent = `You win ${states.PrizeFund}`
        } else if (winner === 5) {
            win_h3.textContent = 'You guessed 5 number'
            win_h1.textContent = `You win ${states.PrizeFund - 10000}`
        } else if (winner === 4) {
            win_h3.textContent = 'You guessed 4 number'
            win_h1.textContent = `You win ${states.PrizeFund - 25000}`
        } else if (winner === 3) {
            win_h3.textContent = 'You guessed 3 number'
            win_h1.textContent = `You win ${states.PrizeFund - 45000}`
        }
        else if (winner === 2) lose_h1.textContent = `You Lose, guessed 2 number`
        else if (winner === 1) lose_h1.textContent = `You Lose, guessed 1 number`
        else lose_h1.textContent = `You Lose, guessed 0 number`
    }

    choiseText.style.marginTop = "10px"

    btn_start.style.display = "none"
    btn_restart.style.marginTop = "20px"

    win_number.forEach((btn) => {
        btn.classList.add("win_number_block")
        btn.classList.remove("win_number")
    })

    win.style.display = "block"
    btn_restart.style.marginTop = "-10px"
    lose_h1.style.marginTop = "-10px"
    win_h1.style.marginTop = "-5px"

    choiseText.style.display = "block"

    choiseNumb.style.marginTop = "-30px"
    choiseNumb.textContent = states.newarr1

    stopGame()
}


export function restartGames() {
    localStorage.removeItem("clicked_numbers")
    location.reload()
}


export function stopGame() {
    localStorage.removeItem("clicked_numbers")

    document.querySelectorAll('.btn_number').forEach(btn => {
        btn.style.pointerEvents = "none"
    })
}


// Event Listerners
btn_start.addEventListener("click", () => startGames())
btn_restart.addEventListener("click", () => restartGames())