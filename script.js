// mousedown; mouseup
let isClick = false
let isVedro = false
let paint = document.querySelector('.paint')
let body = document.querySelector('body')
let pixelAmount = 625
let red = document.querySelector('.red')
let green = document.querySelector('.green')
let blue = document.querySelector('.blue')
let black = document.querySelector('.black')
let white = document.querySelector('.white')
let yellow = document.querySelector('.yellow')
let purple = document.querySelector('.purple')
let orange = document.querySelector('.orange')
let gray = document.querySelector('.gray')
let selectedColor = 'red'
let lastik = document.querySelector('.clear')
let zalivka = document.querySelector('.zalivka')
let colorText = document.querySelector('.selected-color')
let colors = document.querySelectorAll('.selector')
let arrows = document.querySelectorAll('.arrow')
let vedroArrow = document.querySelector('.vedro-arrow')


document.addEventListener('mousedown', function() {
    isClick = true
})

document.addEventListener('mouseup', function() {
    isClick = false
})

zalivka.addEventListener('click', function () {
    if (isVedro) {
        isVedro = false
        vedroArrow.innerHTML = ''
    } else {
        isVedro = true
        vedroArrow.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H10.75V12.75H20C20.4142 12.75 20.75 12.4142 20.75 12Z" fill="#000000"></path> <path d="M10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V18Z" fill="#000000"></path> </g></svg>'
    }
    // isVedro = !isVedro //эта строка == строки сверху
})

for (let i = 0; i < pixelAmount; i += 1) {
    let pixel = document.createElement('div')
    pixel.classList.add('pixel')
    paint.appendChild(pixel)
}

let pixels = document.querySelectorAll('.pixel')


for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', function () {
        selectedColor = colors[i].getAttribute('data-color')
        colorText.style.color = selectedColor
        for (let j =0; j < arrows.length; j += 1) {
            arrows[j].innerHTML = ''
        }
        arrows[i].innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H10.75V12.75H20C20.4142 12.75 20.75 12.4142 20.75 12Z" fill="#ff0000"></path> <path d="M10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V18Z" fill="#ff0000"></path> </g></svg>'
    })
}

for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('mouseover', function () {
        if (isClick) {
            pixels[i].style.backgroundColor = selectedColor  
        }
    })
    pixels[i].addEventListener('click',function () {
        if (isVedro) {
            for (let j = 0; j < pixels.length; j += 1) {
                pixels[j].style.backgroundColor = selectedColor
            }
            isVedro = false
        }
    })
}

for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function () {
        pixels[i].style.backgroundColor = selectedColor  
    })
}






