import {trackingSliderImage} from './src/scripts/aboutSlider.js'
import {displayNone} from './src/scripts/favorite.js'

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

const favoriteRadio = document.querySelectorAll('input[type=radio]')
const favoriteContent = document.querySelectorAll('.favorites__content__cards')

const dropMenu = document.querySelector('.header__drop-menu');
const userHead = document.querySelector('.header__profile');
const userImg = document.querySelector('.profile-icon');
const dropMenuText1 = document.querySelector('.text-1');
const dropMenuText2 = document.querySelector('.text-2');

//--------------Burger---------------------


navigationBurger.addEventListener('click', () => {
  navigation.classList.toggle('active');
  navigationBurger.classList.toggle('active');
  wrapperBurger.classList.toggle('display-none');
  body.classList.toggle('lock');
  dropMenu.classList.remove('drop-menu__active')
});

wrapperBurger.addEventListener('click', e => {
  if (e.target.classList.contains('tablet__wrapper')) {
    navigation.classList.remove('active');
    navigationBurger.classList.remove('active');
    wrapperBurger.classList.add('display-none');
    body.classList.remove('lock');
    dropMenu.classList.remove('drop-menu__active')
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


//--------------Favorite-slider---------------------


let currentRadio = document.querySelector('input[type=radio]:checked').value;

favoriteRadio.forEach(x => {
  x.addEventListener('click', (e) => {
    if (currentRadio !== e.target.value) {
      currentRadio = e.target.value;
      favoriteContent.forEach(x => {
        x.classList.remove('visibility')
        x.classList.add('animation')   
        x.addEventListener('animationend', displayNone)
      })
    }
  })
})


//--------------Drop-menu---------------------


userHead.addEventListener('click', () => {
  dropMenu.classList.toggle('drop-menu__active');
  if (navigation.classList.contains('active')) {
    navigation.classList.toggle('active');
    navigationBurger.classList.toggle('active');
    wrapperBurger.classList.toggle('display-none');
    body.classList.toggle('lock');
  }
})

body.addEventListener('click', e => {
  if (!e.target.closest('.header__drop-menu') && !e.target.classList.contains('profile-icon')) {
    dropMenu.classList.remove('drop-menu__active');
  }
})