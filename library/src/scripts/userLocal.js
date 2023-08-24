const userIcon = document.querySelector('.user-visit');
const userImg = document.querySelector('.profile-icon');

export function getUserLocalStorage(data) {
  userImg.classList.add('display-none');
  userIcon.classList.remove('display-none');
  let user = JSON.parse(localStorage.getItem(data))
  userIcon.innerHTML = `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`
}