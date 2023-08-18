const favoriteContent = document.querySelectorAll('.favorites__content__cards')

export function displayNone() {
  favoriteContent.forEach(x => {
    if(x.classList.contains('animation')) {
      x.classList.add('display-none')
    }
    x.removeEventListener('animationend', displayNone)
  })

  const e = document.querySelector('input[type=radio]:checked').value

  if (e === '1') {
    Array.from(favoriteContent).slice(0, 4).forEach(x => {
      x.classList.remove('display-none')
      x.classList.remove('animation')
      x.classList.add('visibility')
    })
  } else if (e === '2') {
    Array.from(favoriteContent).slice(4, 8).forEach(x => {
      x.classList.remove('display-none')
      x.classList.remove('animation')
      x.classList.add('visibility')
    })
  } else if (e === '3') {
    Array.from(favoriteContent).slice(8, 12).forEach(x => {
      x.classList.remove('display-none')
      x.classList.remove('animation')
      x.classList.add('visibility')
    })
  } else {
    Array.from(favoriteContent).slice(12, 16).forEach(x => {
      x.classList.remove('display-none')
      x.classList.remove('animation')
      x.classList.add('visibility')
    })
  }
}