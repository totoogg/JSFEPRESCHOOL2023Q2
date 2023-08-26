const userIcon = document.querySelector('.user-visit');
const userImg = document.querySelector('.profile-icon');

export function pageLogOut() {
  userImg.classList.remove('display-none');
  userIcon.classList.add('display-none');
}