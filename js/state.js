export const storage = {
    selectedNumbers: JSON.parse(localStorage.getItem("clicked_numbers")) || []
}

export const states = {
    PrizeFund: 50000,
    counter: storage.selectedNumbers.length,
    newarr: [],
    newarr1: [],
}

export const numb_Array = {
    numbers: [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,
        15,16,17,18,19,20,21,22,23,24,25,
        26,27,28,29,30,31,32,33,34,35,36
    ]
}