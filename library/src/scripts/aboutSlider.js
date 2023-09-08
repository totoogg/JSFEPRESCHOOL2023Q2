const aboutSlider = document.querySelector('.slider__content');
const aboutSliderRadioCircle = document.querySelectorAll('.radio__circle');

export function trackingSliderImage() {
  let position = +aboutSlider.style.marginLeft.slice(0, -2);

  aboutSliderRadioCircle.forEach(x => x.classList.remove('checked'))

  if (document.documentElement.clientWidth <= 768) {
    if (position >= 0 && position < 140) {
      aboutSliderRadioCircle[0].classList.add('checked')
    } else if (position < 0 && position > -472) {
      aboutSliderRadioCircle[1].classList.add('checked')
    } else if (position < -472 && position > -1083) {
      aboutSliderRadioCircle[2].classList.add('checked')
    } else if (position < -1083 && position > -1693) {
      aboutSliderRadioCircle[3].classList.add('checked')
    } else {
      aboutSliderRadioCircle[4].classList.add('checked')
    }
  } else {
    if (position === 0) {
      aboutSliderRadioCircle[0].classList.add('checked')
    } else if (position < 0 && position > -476) {
      aboutSliderRadioCircle[1].classList.add('checked')
    } else {
      aboutSliderRadioCircle[2].classList.add('checked')
    }
  }
}

