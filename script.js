let css = document.querySelector('h3')
let color1 = document.querySelector('.color1')
let color2 = document.querySelector('.color2')
let body = document.getElementById('gradient')
let randomColorButton = document.querySelector('#randomColorButton')

let setGradient = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
  css.textContent = body.style.background
}

//Function to generate a random number between 0 and 255 and convert it to hex
let generateRandomHex = () => {
  //random number between 0 and 255
  let randomNumber = Math.floor(Math.random() * 256)
  //convert it to hex
  let hex = randomNumber.toString(16)
  return hex.length == 1 ? '0' + hex : hex //is hex.length = 1? yes return 0 + number, no return hex
}

//Function to generate a random RGB value
let randomHexColor = () =>
  `#${generateRandomHex()}${generateRandomHex()}${generateRandomHex()}`

//Function to generate the background gradient code for the body
let generateGradient = () => {
  color1.value = randomHexColor()
  color2.value = randomHexColor()
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
  css.textContent = body.style.background
}

//Code to assign the gradient when prettying the button
color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)
randomColorButton.addEventListener('click', generateGradient)
setGradient()
