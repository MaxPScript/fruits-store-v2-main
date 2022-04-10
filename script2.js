import { coordinatesInfo } from '../moduls/coordinates_info.js'

// coordinatesInfo()

var log = console.log


window.oncontextmenu = (event) => {
    event.preventDefault()
    event.stopPropagation()
    return false
}

document.addEventListener('DOMContentLoaded', () => {
    var main = document.querySelector('.main')
    var slider = document.querySelector('.slider')
    log(slider)
    // log(sliderRect)

    var imagesSliderList = document.querySelectorAll('.main img')
    imagesSliderList.forEach(item => {
        item.ondragstart = () => false
    })

    // main.addEventListener('pointerdown', pointerDown)
    // main.addEventListener('pointerup', pointerUp)
    slider.addEventListener('pointerdown', pointerDown)
    slider.addEventListener('pointerup', pointerUp)

    function pointerDown() {
        log('down')
        slider.addEventListener('pointermove', pointerMove)

        // pointerMove.throttle(500)
    }
    function pointerUp() {
        log('up')
        slider.removeEventListener('pointermove', pointerMove)
    }
    function pointerMove() {
        log('move')
        // slider.style.left = -100 + 'px'
        slider.classList.add('slider-animation')
        // log(sliderRect.x)
        // log(slider.clientLeft)
        log(slider.style.transform)
    }
})

//     function pointerDown() {
//         log('down')
//         main.addEventListener('pointermove', pointerMove)
//         slider.addEventListener('pointermove', pointerMove)
//         setTimeout(() => {

//             slider.removeEventListener('pointermove', pointerMove)
//         }, 300)
//     }

//     function pointerUp() {
//         slider.removeEventListener('pointermove', pointerMove)
//         // main.removeEventListener('pointermove', pointerMove)
//         log('up')
//     }

//     var pos = 0
//     var prevPos = 0
//     function pointerMove(event) {
//         requestAnimationFrame(animate)
//         let id = requestAnimationFrame(animate)
//         cancelAnimationFrame(id)
//         pos = 0
//     }
//     function animate() {
//         pos--
//         slider.style.left = prevPos + pos + 'px'
//         if (pos > -100) {
//             requestAnimationFrame(animate)
//         } else {
//             cancelAnimationFrame(id)
//         }
//         log(pos)
//     }
//     prevPos = pos
// })