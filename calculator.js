const display = document.querySelector("#result")

const buttons = document.querySelectorAll(".btn")
const buttonArray = Array.buttons

buttons.forEach(button => {
    button.addEventListener('click', getValue )
});

let calc = document.querySelector(".btn-equal")
calc.addEventListener("click", (e) => {
    if(display.value == ""){
        e.preventDefault()
    }
})

function getValue() {
    let val = this.value
    showInput()

    function showInput(input) {
        input = val

        if(input == "C") {
            return (display.value = "")
        }else if(input == "="){
            let result = eval(display.value)
            return (display.value = result)
        }else if(input == "DEL"){
            display.value = display.value.substring(0, display.value.length - 1)
            return (display.value)
        }else if(input == "X"){
            input = "*"
            return(display.value += input)
        }
        else{
            return (display.value += input)
        }
    }
}