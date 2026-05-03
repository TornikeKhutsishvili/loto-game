import { states, storage, numb_Array } from "./state.js"
import { buttons, win_number } from "./variables.js"

for (let i = 0; i < numb_Array.numbers.length; i++) {
    const btn = document.createElement("button")
    btn.classList.add("btn_number")

    btn.textContent = numb_Array.numbers[i]

    if (numb_Array.numbers[i] % 2 === 0) btn.classList.add("even")
    else btn.classList.add("odd")

    btn.addEventListener("click", function() {
        const value = Number(this.textContent)

        if (states.counter == 6 && this.style.backgroundColor === "blue") {
            this.style.backgroundColor = "transparent"
            states.counter--

            storage.selectedNumbers = storage.selectedNumbers.filter(num => num !== value)
        } else if (states.counter < 6) {
            if (this.style.backgroundColor !== "blue") {
                this.style.backgroundColor = "blue"
                states.counter++

                storage.selectedNumbers.push(value)
            } else {
                this.style.backgroundColor = "transparent"
                states.counter--

                storage.selectedNumbers = storage.selectedNumbers.filter(num => num !== value)
            }
        }

        localStorage.setItem("clicked_numbers", JSON.stringify(storage.selectedNumbers))
    })

    buttons.append(btn)
}


while (states.newarr.length !== 6) {
    let rand = parseInt(Math.random() * 36 + 1)

    if (states.newarr.indexOf(rand) === -1) {
        states.newarr.push(rand)

        win_number.forEach((btn, i) => btn.textContent = states.newarr[i])
    }
}
