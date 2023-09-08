const userIcon = document.querySelector('.user-visit');
const userImg = document.querySelector('.profile-icon');

const favoriteContent = document.querySelectorAll('.favorites__content__cards')

const digitalTitle = document.querySelector('.get-digital-card__headline')
const digitalText = document.querySelector('.get-digital-card__text')
const digitalSignUp = document.querySelector('.digital__singup')
const digitalLogin = document.querySelector('.digit__login')
const digitalFormButtonWrapper = document.querySelector('.digit-button')
const digitalFormButton = document.querySelector('.form-button')
const digitalFormInfo = document.querySelector('.info-reader')
const digitalFormNumberCard = document.querySelector('.form__number-card')
const digitalFormName = document.querySelector('.form__reader-name')
const digitalFormTitle = document.querySelector('.digital-card__headline')

export function pageLogOut() {
  userImg.classList.remove('display-none');
  userIcon.classList.add('display-none');

  favoriteContent.forEach(x => {
    x.children[4].classList.remove('own')
    x.children[4].innerHTML = 'Buy'
  })

  digitalFormInfo.classList.add('display-none')
  digitalFormButtonWrapper.classList.remove('information')
  digitalFormButton.classList.remove('display-none')
  digitalFormNumberCard.value = ''
  digitalFormName.value = ''
  digitalFormNumberCard.removeAttribute('disabled')
  digitalFormName.removeAttribute('disabled')

  digitalFormTitle.innerHTML = `Find your Library card`

  digitalTitle.innerHTML = `Get a reader card`
  digitalText.innerHTML = `You will be able to see a reader card after logging into account or you can register a new account`

  digitalSignUp.classList.remove('display-none')

  digitalLogin.innerHTML = `Log in`
}