'use strict'

const animation = document.getElementsByClassName('animation');

for (let i = 0; i < animation.length; i++) {
    animation[i].style.opacity = 0;
}

window.addEventListener('scroll', (event) => {
    for (let i = 0; i < animation.length; i++) {
        if (window.innerHeight + window.scrollY - animation[i].offsetTop > 0) {
            animation[i].classList.add('fadein');
        }
    }
});
