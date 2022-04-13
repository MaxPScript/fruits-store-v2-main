log = console.log

log(5)

var sectionImage = document.querySelectorAll('.section__image')

log(sectionImage)

sectionImage.forEach(item => {
    item.addEventListener('click', popUpOpen)
})

var popup = document.querySelector('.popup')
function popUpOpen() {
    popup.classList.toggle('display-none')
}

var btnClose = document.querySelector('.popup-close')
btnClose.addEventListener('click', popUpClose)

function popUpClose() {
    popup.classList.toggle('display-none')
}