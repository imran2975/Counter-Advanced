// set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        //getting the classes list
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            count--
        } else if (styles.contains('increase')) {
            count++
        } else {
            count = 0
        }

        //setting color for our counter value
        if (count < 0) {
            value.style.color = 'red'
        } else if (count > 0) {
            value.style.color = 'rgb(3, 212, 38)'
        } else {
            value.style.color = '#222'
        }
        value.textContent = count
    })
})