let string = ''
let buttons = document.querySelectorAll('.buttons')

Array.from(buttons).forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string).toString()
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML === "RESET") {
            string = ''
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML === "DEL") {
            string = string.slice(0, -1)
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML === "x") {
            string = string + '*'
            document.querySelector('input').value = string
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }
    })
});