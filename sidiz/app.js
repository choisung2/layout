function slideOn () {
    const slide = document.querySelector('.slide-wrap');
    const item = slide.getElementsByClassName('slide-contents');
    const firstSlide = item[0];

    firstSlide.classList.add('onSlide');
}

slideOn();

const second = setInterval(slideGo, 5000);

function slideGo() {
    const currentItem = document.querySelector('.onSlide');
    currentItem.classList.remove('onSlide');

    if (!currentItem.nextElementSibling) {
        item[0].classList.add('onSlide');
    } else {
        currentItem.nextElementSibling.classList.add('onSlide');
    }
}
