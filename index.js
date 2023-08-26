let countEl = document.getElementById("count-el")
let prevEl = document.getElementById("prev-el")

let count = 0

function Increment() {
    count += 1
    countEl.textContent = count
}

function saveEntries() {
    prevEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}
