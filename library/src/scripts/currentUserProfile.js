const icon = document.querySelector('.icon__sqrt');
const fullName = document.querySelector('.icon__full_name');
const cardNumber = document.querySelector('.card__number');
const visitCount = document.querySelector('.visit__count');
const bonusesCount = document.querySelector('.bonuses__count');
const booksCount = document.querySelector('.books__count');
const listBooks = document.querySelector('.list_books');

export function currentUserProfile(currentUser) {

  icon.innerHTML = `${currentUser.firstName[0].toUpperCase()}${currentUser.lastName[0].toUpperCase()}`

  fullName.innerHTML = `${currentUser.firstName[0].toUpperCase() + currentUser.firstName.slice(1)} ${currentUser.lastName[0].toUpperCase() + currentUser.lastName.slice(1)}`

  cardNumber.innerHTML = `${currentUser.cardNumber.toUpperCase()}`

  visitCount.innerHTML = `${currentUser.profile.visit}`

  bonusesCount.innerHTML = `${currentUser.profile.bonuses}`

  booksCount.innerHTML = `${currentUser.profile.books.length}`

  if (currentUser.profile.books.length === 0) {
    listBooks.innerHTML = ''
  } else {
    listBooks.innerHTML = ''

    for (let key of currentUser.profile.books) {
      let elem = document.createElement('li')
      elem.classList.add('list_books__item')
      elem.innerHTML = `${key.name}, ${key.author}`
      listBooks.append(elem)
    }
  }

  let jsonStr = JSON.stringify(currentUser);
    
  localStorage.setItem(`${currentUser.firstName} ${currentUser.lastName}`, jsonStr);
}