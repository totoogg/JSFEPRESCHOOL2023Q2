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

const digitalFormVisit = document.querySelector('.info-reader__block__title.visit__count')
const digitalFormBonuses = document.querySelector('.info-reader__block__title.bonuses__count')
const digitalFormBooks = document.querySelector('.info-reader__block__title.books__count')


export function loginUser(currentUser) {
  digitalFormInfo.classList.remove('display-none')
  digitalFormButtonWrapper.classList.add('information')
  digitalFormButton.classList.add('display-none')

  digitalFormName.value = `${currentUser.firstName[0].toUpperCase() + currentUser.firstName.slice(1)} ${currentUser.lastName[0].toUpperCase() + currentUser.lastName.slice(1)}`
  digitalFormName.disabled = 'true'

  digitalFormNumberCard.value = `${currentUser.cardNumber.toUpperCase()}`
  digitalFormNumberCard.disabled = 'true'

  digitalFormVisit.innerHTML = `${currentUser.profile.visit}`
  digitalFormBonuses.innerHTML = `${currentUser.profile.bonuses}`
  digitalFormBooks.innerHTML = `${currentUser.profile.books.length}`

  digitalFormTitle.innerHTML = `Your Library card`

  digitalTitle.innerHTML = `Visit your profile`
  digitalText.innerHTML = `With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.`

  digitalSignUp.classList.add('display-none')

  digitalLogin.innerHTML = `Profile`
}