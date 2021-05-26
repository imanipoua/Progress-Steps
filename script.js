const progress = document.getElementById('progress')//grabs the id
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') //put's all circles classes into an array

let currentActive = 1

//This will make sure that currentActive does not go above 4
next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()

})

//This will make sure that currentActive does not go below 1
prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()


})

//This will add the active CSS class for the circles
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })

    //initializing actives constant or variable
    const actives = document.querySelectorAll('.active')

    //getting CSS progress class to fill the bar to each circle
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    }
    else if (currentActive === circles.length) {
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }
}
