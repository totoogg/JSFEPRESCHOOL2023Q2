const search = document.querySelector('#search');
const button = document.querySelector('.header__form__button');
const cross = document.querySelector('.header__form__cross');
const content = document.querySelector('.wrapper_main');

const buttons = document.querySelectorAll('.button');

buttons.forEach(x => {
  x.addEventListener('click', () => {
    updateMain()
    let url = `https://api.unsplash.com/search/photos?query=${x.innerHTML}&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
    getData(url)
  })
})

button.addEventListener('click', () => {
  event.preventDefault();
  if (search.value) {
    updateMain()
    let url = `https://api.unsplash.com/search/photos?query=${search.value}&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
    getData(url);
  } else {
    updateMain()
  }
})

function updateMain() {
  let images = document.querySelectorAll('.main__image')
    images.forEach(x => x.remove())
}

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  createImage(data.results.map(x => x.urls.regular))
}

function createImage(data) {
  for (let a of data) {
    let elem = document.createElement('div');
    elem.className = "main__image";
    elem.style.backgroundImage = `url(${a})`
    elem.addEventListener('dblclick', () => {
      window.open(a)
    })
    content.append(elem);
  }
}

search.addEventListener('input', () => {
  if (search.value) {
    cross.classList.remove('display-none')
  } else {
    cross.classList.add('display-none')
  }
})

cross.addEventListener('click', () => {
  search.value = '';
  cross.classList.add('display-none');
  search.focus();
})

getData(`https://api.unsplash.com/search/photos?query=cat&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`);