import {trackingSliderImage} from './src/scripts/aboutSlider.js'

const body = document.body;

const navigation = document.querySelector('.header__navigation');
const navigationBurger = document.querySelector('.header__burger');
const wrapperBurger = document.querySelector('.tablet__wrapper');

const aboutSlider = document.querySelector('.slider__content');
const aboutSliderImage = document.querySelector('.slider__image');
const aboutSliderButtonLeft = document.querySelector('.left');
const aboutSliderButtonRight = document.querySelector('.right');
const aboutSliderRadio = document.querySelectorAll('.radio');
let aboutSliderMarginLeft = 0;


//--------------Burger---------------------

navigationBurger.addEventListener('click', () => {
  navigation.classList.toggle('active');
  navigationBurger.classList.toggle('active');
  wrapperBurger.classList.toggle('display-none');
  body.classList.toggle('lock');
});

wrapperBurger.addEventListener('click', e => {
  if (e.target.classList.contains('tablet__wrapper')) {
    navigation.classList.remove('active');
    navigationBurger.classList.remove('active');
    wrapperBurger.classList.add('display-none');
    body.classList.remove('lock');
  }
})

navigation.querySelectorAll('.navigation__item__link').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('active');
    navigationBurger.classList.remove('active');
    wrapperBurger.classList.add('display-none');
    body.classList.remove('lock');
  })
});


//--------------About-slider---------------------

aboutSliderButtonLeft.addEventListener('click', () => {

  if (+getComputedStyle(aboutSlider).marginLeft.slice(0, -2) < 130 && +aboutSlider.style.marginLeft.slice(0, -2) < 130) {
    aboutSliderMarginLeft += +getComputedStyle(aboutSliderImage).width.slice(0, -2) + ((+getComputedStyle(aboutSlider).width.slice(0, -2) - +getComputedStyle(aboutSliderImage).width.slice(0, -2) * 5) / 4);
  } else {
    aboutSliderMarginLeft += 0
  }

  aboutSlider.style.marginLeft = aboutSliderMarginLeft + 139 + 'px';

  trackingSliderImage()
})

aboutSliderButtonRight.addEventListener('click', () => {

  if (+aboutSlider.style.marginLeft.slice(0, -2) < -2300) {
    aboutSliderMarginLeft -= 0
  } else {
    aboutSliderMarginLeft -= +getComputedStyle(aboutSliderImage).width.slice(0, -2) + ((+getComputedStyle(aboutSlider).width.slice(0, -2) - +getComputedStyle(aboutSliderImage).width.slice(0, -2) * 5) / 4);
  }

  aboutSlider.style.marginLeft = (aboutSliderMarginLeft + 139) + 'px';

  trackingSliderImage()
})

if (document.documentElement.clientWidth <= 768) {
  aboutSliderRadio.forEach((x, i) => {
    x.setAttribute('data-radio', i)
    x.addEventListener('click', (e) => {
        let countRadio = +e.target.closest('.radio').dataset.radio;
  
        aboutSliderMarginLeft = -(+getComputedStyle(aboutSliderImage).width.slice(0, -2) + ((+getComputedStyle(aboutSlider).width.slice(0, -2) - +getComputedStyle(aboutSliderImage).width.slice(0, -2) * 5) / 4)) * countRadio;
  
        aboutSlider.style.marginLeft = (aboutSliderMarginLeft + 139) + 'px';
  
        trackingSliderImage()
    })
  })
} else {
  aboutSliderRadio.forEach((x, i) => {
    x.setAttribute('data-radio', i)
    x.addEventListener('mouseover', (e) => {
      x.querySelector('.radio__circle').style.backgroundColor = '#BB945F'
    })
    x.addEventListener('mouseout', (e) => {
      x.querySelector('.radio__circle').style.backgroundColor = ''
    })
    x.addEventListener('click', (e) => {
        let countRadio = +e.target.closest('.radio').dataset.radio;
  
        aboutSliderMarginLeft = -(+getComputedStyle(aboutSliderImage).width.slice(0, -2) + ((+getComputedStyle(aboutSlider).width.slice(0, -2) - +getComputedStyle(aboutSliderImage).width.slice(0, -2) * 5) / 4)) * countRadio;
  
        aboutSlider.style.marginLeft = aboutSliderMarginLeft + 'px';
  
        trackingSliderImage()
    })
  })
}

