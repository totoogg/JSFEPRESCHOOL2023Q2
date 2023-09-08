import {trackingSliderImage} from './src/scripts/aboutSlider.js'
import {displayNone} from './src/scripts/favorite.js'
import {getUserLocalStorage} from './src/scripts/userLocal.js'
import {randomNumberCard} from './src/scripts/randomNumber.js'
import {pageLogOut} from './src/scripts/pageLogOut.js'
import {currentUserProfile} from './src/scripts/currentUserProfile.js'
import {loginUser} from './src/scripts/loginUser.js'

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
const favoriteContentBooks = document.querySelector('.favorites__content')

const userIcon = document.querySelector('.user-visit');

const dropMenu = document.querySelector('.header__drop-menu');
const userHead = document.querySelector('.header__profile');
const userImg = document.querySelector('.profile-icon');
const dropMenuText1 = document.querySelector('.text-1');
const dropMenuText2 = document.querySelector('.text-2');
const dropMenuTittle = document.querySelector('.drop-menu__title')

let login = false;
let currentUser = {};

const modalRegister = document.querySelector('.header__modal')
const modalButtonRegister = document.querySelector('.form__button');
const modalCross = document.querySelector('.modal__cross');
const modalInput = document.querySelectorAll('.modal__form > input');
const modalFirstName = document.querySelector('#first');
const modalLastName = document.querySelector('#second');
const modalMail = document.querySelector('#mail');
const modalPassword = document.querySelector('#password');
const modalInputError = document.querySelectorAll('.form__input__error');
const modalInputErrorMail = document.querySelector('.error__mail');
const modalRegisterLinkLogin = document.querySelector('.link__login')

const modalLogin = document.querySelector('.header__modal__login')
const modalButtonLogin = document.querySelector('.form__button__login');
const modalCrossLogin = document.querySelector('.modal__cross__login');
const modalInputLogin = document.querySelectorAll('.modal__form__login > input');
const modalNameLogin = document.querySelector('#first__login');
const modalPasswordLogin = document.querySelector('#password__login');
const modalInputErrorLogin = document.querySelectorAll('.form__input__error__login');
const modalInputErrorLoginRiders = document.querySelector('.readers-card__error');
const modalLoginLinkRegister = document.querySelector('.link__register')

const digitalSignUp = document.querySelector('.get-digital-card__buttons__link')
const digitalLogin = document.querySelector('.digit__login')
const digitalFormButtonWrapper = document.querySelector('.digit-button')
const digitalFormButton = document.querySelector('.form-button')
const digitalFormInfo = document.querySelector('.info-reader')
const digitalFormNumberCard = document.querySelector('.form__number-card')
const digitalFormName = document.querySelector('.form__reader-name')
const digitalFormVisit = document.querySelector('.info-reader__block__title.visit__count')
const digitalFormBonuses = document.querySelector('.info-reader__block__title.bonuses__count')
const digitalFormBooks = document.querySelector('.info-reader__block__title.books__count')
const digitError = document.querySelector('.info-reader__error')

const profileModal = document.querySelector('.profile')
const profileModalCross = document.querySelector('.profile__cross')
const profileModalCardNumber = document.querySelector('.card__number')
const profileModalCardCopy = document.querySelector('.card__copy')

const modalBuyCard = document.querySelector('.buy_card')
const modalBuyCardCross = document.querySelector('.buy_card__cross')
const modalBuyCardButton = document.querySelector('.form_footer__button')
const modalBuyCardInput = document.querySelectorAll('.buy_card__content__form input')
const modalBuyCardInputError = document.querySelectorAll('.form__card_number__error')


//--------------Burger---------------------


navigationBurger.addEventListener('click', () => {
  navigation.classList.toggle('active');
  navigationBurger.classList.toggle('active');
  modalRegister.classList.add('display-none');
  modalLogin.classList.add('display-none');
  profileModal.classList.add('display-none');
  if (navigation.classList.contains('active')) {
    wrapperBurger.classList.remove('display-none');
    body.classList.add('lock');
  } else {
    wrapperBurger.classList.add('display-none');
    body.classList.remove('lock');
  }
});

wrapperBurger.addEventListener('click', e => {
  if (e.target.classList.contains('tablet__wrapper')) {
    navigation.classList.remove('active');
    navigationBurger.classList.remove('active');
    wrapperBurger.classList.add('display-none');
    body.classList.remove('lock');
    dropMenu.classList.remove('drop-menu__active');
    modalRegister.classList.add('display-none');
    modalLogin.classList.add('display-none');
    profileModal.classList.add('display-none')
    modalBuyCard.classList.add('display-none')
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


//--------------Favorite-books---------------------


favoriteContentBooks.addEventListener('click', e => {
  if (!login) {
    if(e.target.closest('.card__button')) {
      modalRegister.classList.add('display-none')
      dropMenu.classList.remove('drop-menu__active');
      wrapperBurger.classList.remove('display-none');
      body.classList.add('lock');
      modalLogin.classList.toggle('display-none');
    }
  } else {
    if (!currentUser.libraryCard) {
      modalBuyCard.classList.remove('display-none')
      wrapperBurger.classList.remove('display-none');
      body.classList.add('lock');
    } else {
      if (e.target.classList.contains('card__button')) {
        let button = e.target
        button.classList.add('own')
        button.innerHTML = 'Own'
        let book = {
          name: button.offsetParent.children[1].innerHTML,
          author: button.offsetParent.children[2].innerHTML.slice(3),
        }
        currentUser.profile.books.push(book)

        currentUserProfile(currentUser)
      }
    }
  }
})

modalBuyCardCross.addEventListener('click', () => {
  modalBuyCard.classList.add('display-none')
  wrapperBurger.classList.add('display-none');
  body.classList.remove('lock');
})


//--------------Drop-menu---------------------


userHead.addEventListener('click', (e) => {
  if (e.target.classList.contains('user-visit')) {
    dropMenuTittle.innerHTML = `${currentUser.cardNumber}`
    dropMenuText1.innerHTML = 'My profile'
    dropMenuText2.innerHTML = 'Log Out'
  } else {
    dropMenuTittle.innerHTML = 'Profile'
    dropMenuText1.innerHTML = 'Log In'
    dropMenuText2.innerHTML = 'Register'
  }

  dropMenu.classList.toggle('drop-menu__active');
})

body.addEventListener('click', e => {
  if (!e.target.closest('.header__drop-menu') && !e.target.classList.contains('profile-icon') && !e.target.classList.contains('user-visit')) {
    dropMenu.classList.remove('drop-menu__active');
  }
})


//--------------Modal-register---------------------


dropMenuText2.addEventListener('click', () => {
  if (!login) {
    navigation.classList.remove('active');
    navigationBurger.classList.remove('active');
    modalLogin.classList.add('display-none')
    dropMenu.classList.remove('drop-menu__active');
    wrapperBurger.classList.remove('display-none');
    body.classList.add('lock');
    modalRegister.classList.toggle('display-none');
  } else {
    navigation.classList.remove('active');
    navigationBurger.classList.remove('active');
    modalLogin.classList.add('display-none')
    dropMenu.classList.remove('drop-menu__active');
    wrapperBurger.classList.add('display-none');
    body.classList.remove('lock');
    profileModal.classList.add('display-none');

    login = false;
    currentUser = {};

    pageLogOut()
  }
})

modalCross.addEventListener('click', () => {
  modalRegister.classList.add('display-none');
  wrapperBurger.classList.add('display-none');
  body.classList.remove('lock');
})

modalRegisterLinkLogin.addEventListener('click', () => {
  event.preventDefault();
  modalRegister.classList.add('display-none')
  dropMenu.classList.remove('drop-menu__active');
  wrapperBurger.classList.remove('display-none');
  body.classList.add('lock');
  modalLogin.classList.toggle('display-none');
})

digitalSignUp.addEventListener('click', () => {
  wrapperBurger.classList.toggle('display-none');
  body.classList.toggle('lock');
  modalRegister.classList.toggle('display-none');
})

modalInput.forEach((x, i) => {
  x.addEventListener('blur', () => {
    if (x.value.length === 0) {
      modalInputError[i].innerHTML = 'Пожалуйста, заполните поле.';
    } else if (x.id === 'password') {
      if (x.value.length < 8) {
        modalInputError[i].innerHTML = 'Пароль должен быть не короче 8 символов.';
      }
    } else if (x.id === 'mail') {
      if(!x.value.includes('@')) {
        modalInputError[i].innerHTML = 'Введите правильный email.';
      }
    }
  })

  x.addEventListener('focus', () => {
    modalInputError[i].innerHTML = '';
  })
})

modalButtonRegister.addEventListener('click', () => {
  event.preventDefault();
  if (modalFirstName.value.length === 0 || modalLastName.value.length === 0 || modalMail.value.length === 0 || modalPassword.value.length === 0) {
    modalInput.forEach((x, i) => {
      if (x.value.length === 0) {
        modalInputError[i].innerHTML = 'Пожалуйста, заполните поле.';
      }
    })
  } else if (modalPassword.value.length >= 8 && modalMail.value.includes('@')) {
    for (let i = 0; i < localStorage.length; i++) {
      if (!localStorage.key(i).includes(' ')) continue
      let item = JSON.parse(localStorage.getItem(localStorage.key(i)))
      if (typeof item === 'object') {
        if (modalMail.value.toLowerCase() === item.mail) {
          modalInputErrorMail.innerHTML = 'email уже существует.'
          return 
        }
      }
    }
    login = true;

    modalRegister.classList.add('display-none');
    wrapperBurger.classList.add('display-none');
    body.classList.remove('lock');

    let user = {
      firstName: modalFirstName.value.toLowerCase(),
      lastName: modalLastName.value.toLowerCase(),
      mail: modalMail.value.toLowerCase(),
      password: modalPassword.value,
      cardNumber: randomNumberCard(),
      profile: {
        visit: 1,
        bonuses: 0,
        books: [],
      },
      libraryCard: false,
    };

    currentUser = user

    userIcon.title = `${currentUser.firstName[0].toUpperCase() + currentUser.firstName.slice(1)} ${currentUser.lastName[0].toUpperCase() + currentUser.lastName.slice(1)}`

    let jsonStr = JSON.stringify(user);
    
    localStorage.setItem(`${modalFirstName.value.toLowerCase()} ${modalLastName.value.toLowerCase()}`, jsonStr);

    getUserLocalStorage(`${modalFirstName.value.toLowerCase()} ${modalLastName.value.toLowerCase()}`)

    currentUserProfile(currentUser)

    loginUser(currentUser)
  }
})


//--------------Modal-login---------------------


dropMenuText1.addEventListener('click', () => {
  if (!login) {
    navigation.classList.remove('active');
    navigationBurger.classList.remove('active');
    modalRegister.classList.add('display-none')
    dropMenu.classList.remove('drop-menu__active');
    wrapperBurger.classList.remove('display-none');
    body.classList.add('lock');
    modalLogin.classList.toggle('display-none');
  } else {
    profileModal.classList.remove('display-none')
    navigation.classList.remove('active');
    navigationBurger.classList.remove('active');
    modalRegister.classList.add('display-none')
    dropMenu.classList.remove('drop-menu__active');
    wrapperBurger.classList.remove('display-none');
    body.classList.add('lock');
  }
})

modalCrossLogin.addEventListener('click', () => {
  modalLogin.classList.add('display-none');
  wrapperBurger.classList.add('display-none');
  body.classList.remove('lock');
})

modalLoginLinkRegister.addEventListener('click', () => {
  event.preventDefault();
  modalLogin.classList.add('display-none')
  dropMenu.classList.remove('drop-menu__active');
  wrapperBurger.classList.remove('display-none');
  body.classList.add('lock');
  modalRegister.classList.toggle('display-none');
})

digitalLogin.addEventListener('click', () => {
  if (!login) {
    wrapperBurger.classList.toggle('display-none');
    body.classList.toggle('lock');
    modalLogin.classList.toggle('display-none');
  } else {
    profileModal.classList.remove('display-none')
    navigation.classList.remove('active');
    navigationBurger.classList.remove('active');
    modalRegister.classList.add('display-none')
    dropMenu.classList.remove('drop-menu__active');
    wrapperBurger.classList.remove('display-none');
    body.classList.add('lock');
  }
})

modalInputLogin.forEach((x, i) => {
  x.addEventListener('blur', () => {
    if (x.value.length === 0) {
      modalInputErrorLogin[i].innerHTML = 'Пожалуйста, заполните поле.';
    } else if (x.id === 'password__login') {
      if (x.value.length < 8) {
        modalInputErrorLogin[i].innerHTML = 'Пароль должен быть не короче 8 символов.';
      }
    }
  })

  x.addEventListener('focus', () => {
    modalInputErrorLogin[i].innerHTML = '';
  })
})

modalButtonLogin.addEventListener('click', () => {
  event.preventDefault();
  if (modalNameLogin.value.length === 0 || modalPasswordLogin.value.length === 0) {
    modalInputLogin.forEach((x, i) => {
      if (x.value.length === 0) {
        modalInputErrorLogin[i].innerHTML = 'Пожалуйста, заполните поле.';
      }
    })
  } else if (modalPasswordLogin.value.length >= 8) {
    for (let i = 0; i < localStorage.length; i++) {
      if (!localStorage.key(i).includes(' ')) continue
      let item = JSON.parse(localStorage.getItem(localStorage.key(i)))
      if (typeof item === 'object') {
        if ((modalNameLogin.value.toLowerCase() === item.mail || modalNameLogin.value.toLowerCase() === item.cardNumber) && modalPasswordLogin.value === item.password) {
          login = true;

          item.profile.visit++
          let jsonStr = JSON.stringify(item);
          localStorage.setItem(`${item.firstName} ${item.lastName}`, jsonStr);
          currentUser = item

          userIcon.title = `${currentUser.firstName[0].toUpperCase() + currentUser.firstName.slice(1)} ${currentUser.lastName[0].toUpperCase() + currentUser.lastName.slice(1)}`

          getUserLocalStorage(`${item.firstName} ${item.lastName}`)
          
          modalLogin.classList.add('display-none');
          wrapperBurger.classList.add('display-none');
          body.classList.remove('lock');

          currentUserProfile(currentUser)

          loginUser(currentUser)

          return
        }
      }
    }
    modalInputErrorLoginRiders.innerHTML = 'Пользователя не существует.'
  }
})


//--------------Digital-card---------------------


digitalFormButton.addEventListener('click', () => {
  event.preventDefault();

  let user = JSON.parse(localStorage.getItem(digitalFormName.value.toLowerCase()))
  
  if (user !== null && digitalFormNumberCard.value === user.cardNumber) {
    digitalFormInfo.classList.remove('display-none')
    digitalFormButtonWrapper.classList.add('information')
    digitalFormButton.classList.add('display-none')
    digitalFormVisit.innerHTML = `${currentUser.profile.visit}`
    digitalFormBonuses.innerHTML = `${currentUser.profile.bonuses}`
    digitalFormBooks.innerHTML = `${currentUser.profile.books.length}`

    setTimeout(() => {
      digitalFormInfo.classList.add('display-none')
      digitalFormButtonWrapper.classList.remove('information')
      digitalFormButton.classList.remove('display-none')
      digitalFormNumberCard.value = ''
      digitalFormName.value = ''
    }, 10000)
  } else {
    digitError.innerHTML = `Пользователь не найден.`
  }
})

digitalFormName.addEventListener('focus', () => {
  digitError.innerHTML = ``
})

digitalFormNumberCard.addEventListener('focus', () => {
  digitError.innerHTML = ``
})


//--------------Profile---------------------


profileModalCross.addEventListener('click', () => {
  wrapperBurger.classList.toggle('display-none');
  body.classList.toggle('lock');
  profileModal.classList.add('display-none');
})

profileModalCardCopy.addEventListener('click', () => {
  document.getSelection().removeAllRanges();
  document.getSelection().selectAllChildren(profileModalCardNumber)
  document.execCommand("copy")
  document.getSelection().removeAllRanges();
})


//--------------Modal buy card---------------------


modalBuyCardInput.forEach((x, i) => {
  x.addEventListener('blur', () => {
    if (x.value.length === 0) {
      if (i <= 1) {
        modalBuyCardInputError[i].innerHTML = 'Пожалуйста, заполните поле.';
      } else {
        modalBuyCardInputError[i - 1].innerHTML = 'Пожалуйста, заполните поле.';
      }
    } else if (x.id === 'card_number') {
      let currentInput = x.value.split('').filter(x => x !== ' ').join('')
      if (isNaN(currentInput) || typeof +currentInput !== 'number' || currentInput.length !== 16) {
        modalBuyCardInputError[i].innerHTML = 'Поле должно содержать 16 цифр.';
      }
    } else if (x.id === 'expiration' || x.id === 'expiration_2') {
      let currentInput = x.value.split('').filter(x => x !== ' ').join('')
      if (isNaN(currentInput) || typeof +currentInput !== 'number' || currentInput.length !== 2) {
        if (i === 1) {
          modalBuyCardInputError[i].innerHTML = 'Поля должны содержать 2 цифры.';
        } else {
          modalBuyCardInputError[i - 1].innerHTML = 'Поля должны содержать 2 цифры.';
        }
      }
    } else if (x.id === 'cvc') {
      let currentInput = x.value.split('').filter(x => x !== ' ').join('')
      if (isNaN(currentInput) || typeof +currentInput !== 'number' || currentInput.length !== 3) {
        modalBuyCardInputError[i - 1].innerHTML = 'Поле должно содержать 3 цифры.'
      }
    }
  })

  x.addEventListener('focus', () => {
    if (i <= 1) {
      modalBuyCardInputError[i].innerHTML = '';
    } else {
      modalBuyCardInputError[i - 1].innerHTML = '';
    }
  })
})

modalBuyCardButton.addEventListener('click', () => {
  event.preventDefault();

  modalBuyCardInput.forEach((x, i) => {
    if (x.value.length === 0) {
      if (i <= 1) {
        modalBuyCardInputError[i].innerHTML = 'Пожалуйста, заполните поле.';
      } else {
        modalBuyCardInputError[i - 1].innerHTML = 'Пожалуйста, заполните поле.';
      }
    } else if (x.id === 'card_number') {
      let currentInput = x.value.split('').filter(x => x !== ' ').join('')
      if (isNaN(currentInput) || typeof +currentInput !== 'number' || currentInput.length !== 16) {
        modalBuyCardInputError[i].innerHTML = 'Поле должно содержать 16 цифр.';
      }
    } else if (x.id === 'expiration' || x.id === 'expiration_2') {
      let currentInput = x.value.split('').filter(x => x !== ' ').join('')
      if (isNaN(currentInput) || typeof +currentInput !== 'number' || currentInput.length !== 2) {
        if (i === 1) {
          modalBuyCardInputError[i].innerHTML = 'Поля должны содержать 2 цифры.';
        } else {
          modalBuyCardInputError[i - 1].innerHTML = 'Поля должны содержать 2 цифры.';
        }
      }
    } else if (x.id === 'cvc') {
      let currentInput = x.value.split('').filter(x => x !== ' ').join('')
      if (isNaN(currentInput) || typeof +currentInput !== 'number' || currentInput.length !== 3) {
        modalBuyCardInputError[i - 1].innerHTML = 'Поле должно содержать 3 цифры.'
      }
    }
  })

  let buy = true

  modalBuyCardInputError.forEach(x => {
    if (x.innerHTML !== '') {
      buy = false
    }
  })

  if (buy) {
    currentUser.libraryCard = true

    currentUserProfile(currentUser)

    modalBuyCard.classList.add('display-none')
    wrapperBurger.classList.add('display-none');
    body.classList.remove('lock');
  }
})
