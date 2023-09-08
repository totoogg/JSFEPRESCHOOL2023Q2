const userIcon = document.querySelector('.user-visit');
const userImg = document.querySelector('.profile-icon');

const favoriteContent = document.querySelectorAll('.favorites__content__cards')

export function getUserLocalStorage(data) {
  userImg.classList.add('display-none');
  userIcon.classList.remove('display-none');
  let user = JSON.parse(localStorage.getItem(data))
  userIcon.innerHTML = `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`

  let arr = user.profile.books.map(x => x.name)

  favoriteContent.forEach(x => {
    if (arr.includes(x.children[1].innerHTML)) {
      x.children[4].classList.add('own')
      x.children[4].innerHTML = 'Own'
    }
  })
}