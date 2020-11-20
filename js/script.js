const animatedElements = document.querySelectorAll('.animatio')

const scrollSpy = (e) => {
    animatedElements.forEach((element) => {
        if(window.pageYOffset > element.offsetTop ) {
            element.classList.add('show')
        } else {
            element.classList.remove('show')
        }
    })    
}

window.addEventListener('load', scrollSpy)
window.addEventListener('resize', scrollSpy)
window.addEventListener('scroll', scrollSpy)