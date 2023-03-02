const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"]
const save = document.getElementById("save")
let color
const list = document.getElementById("list")

function randomColor() {
    let block = document.getElementById("block")
    let display = document.getElementById("display")
    color = ""
    display.textContent = "#"
    
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * characters.length)
        display.textContent += characters[random]
    
    }
    block.style.backgroundColor = display.textContent;
    display.style.color = display.textContent 
    color = display.textContent

    
}

save.addEventListener("click", function() {
    list.innerHTML += `<li style="color:${display.textContent};"> ${color} </li>`
    
})

