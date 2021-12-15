const board = document.querySelector('#board')
const squares_number = 500
const colors = ['rgb(230, 40, 40)', 'rgb(230, 164, 40)', 'rgb(189, 230, 40)', 'rgb(230, 211, 40)', 'rgb(100, 230, 40)','rgb(230, 40, 119)', 'rgb(230, 40, 221)', 'rgb(129, 40, 230)', 'rgb(75, 40, 230)','rgb(40, 170, 230)', 'rgb(40, 230, 103)', 'rgb(46, 230, 40)']


for (let i = 0; i < squares_number; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    element.style.border = `1px solid ${color}`
    changeBackground(color)
}

function removeColor(element) {
    const color = getRandomColor()
    getRandomColor()
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor () {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}

function changeBackground(color) {
    document.body.style.backgroundColor = color
}