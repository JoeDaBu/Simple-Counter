let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = ""
        if (!(saveEl.textContent.endsWith(':') || saveEl.textContent.endsWith(': '))) {
        countStr += " -"
    }
    countStr += " " + count
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}

function myDelete() {
    if(saveEl.textContent.endsWith(':') || saveEl.textContent.endsWith(': ')) {
        return
    }
    if(saveEl.textContent.substring(saveEl.textContent.length-3, saveEl.textContent.length-2) == ":") {
        saveEl.textContent = saveEl.textContent.substring(0, saveEl.textContent.length-2)
    } else {
        saveEl.textContent = saveEl.textContent.substring(0, saveEl.textContent.length-4)
    }
    
}