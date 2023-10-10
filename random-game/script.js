const body = document.querySelector('body')

const field = document.querySelectorAll('.game')
const scoreCurrent = document.querySelector('.information__score__current__score')
const scoreBest = document.querySelector('.information__score__best__score')
const newGame = document.querySelector('.information__buttons__start')
const sound = document.querySelector('.sound')
const topList = document.querySelectorAll('.score')

const wrapper = document.querySelector('.fon')
const listTopScore = document.querySelector('.top_list')
const buttonTop = document.querySelector('.information__buttons__top')
const buttonCross = document.querySelector('.cross')

const finished = document.querySelector('.finished')
const finishedTitle = document.querySelector('.finished__title')
const finishedText = document.querySelector('.finished__text')
const buttonStartFinished = document.querySelector('.finished__buttons__start')
const buttonContinueFinished = document.querySelector('.finished__buttons__continue')

let main = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

let sum = 0

start()
localSave()
updateField()

let isSound = true
let isFinished = true

buttonContinueFinished.addEventListener('click', () => {
  finished.classList.add('display-none')
  wrapper.classList.toggle('display-none')
})

buttonTop.addEventListener('click', () => {
  localSave()
  listTopScore.classList.toggle('display-none')
  wrapper.classList.toggle('display-none')
})

wrapper.addEventListener('click', () => {
  listTopScore.classList.toggle('display-none')
  wrapper.classList.toggle('display-none')
  finished.classList.add('display-none')
})

buttonCross.addEventListener('click', () => {
  listTopScore.classList.toggle('display-none')
  wrapper.classList.toggle('display-none')
})

function audioSound() {
  const audio = new Audio()
  audio.src = 'assets/sound/whoosh-grainy_gkoaqyn_.mp3'
  audio.volume = 1
  audio.play()
}

sound.addEventListener('click', () => {
  if (isSound) {
    isSound = false
    sound.classList.remove('information__sound')
    sound.classList.add('information__sound_no')
  } else {
    isSound = true
    sound.classList.add('information__sound')
    sound.classList.remove('information__sound_no')
  }
})

window.addEventListener('unload', localSave)

document.addEventListener('keyup', e => {
  if (e.key === 'ArrowUp' || e.key === 'w') {
    e.preventDefault()
    up()
  } else if (e.key === 'ArrowDown' || e.key === 's') {
    e.preventDefault()
    down()
  } else if (e.key === 'ArrowLeft' || e.key === 'a') {
    e.preventDefault()
    left()
  } else if (e.key === 'ArrowRight' || e.key === 'd') {
    e.preventDefault()
    right()
  }
  updateBest()

  let finish = JSON.parse(JSON.stringify(main)).flat(Infinity).sort((a, b) => b - a)

  if (finish[0] === 2048 && isFinished) {
    finished.classList.remove('display-none')
    wrapper.classList.remove('display-none')
    isFinished = false
  }

  let checkArr = JSON.parse(JSON.stringify(main)).flat(Infinity)
  let count = 0
  checkArr.forEach((x, i) => {
    if (((checkArr[i - 1] === x || checkArr[i + 1] === x) && (i % 4 !== 0 && i % 4 !== 3)) || checkArr[i + 4] === x || checkArr[i - 4] === x) {
      count++;
    }
  })

  if (count === 0 && checkArr.filter(x => x === 0).length === 0) {
    finishedFail()
  }
})

function finishedFail() {
  isSound = false
  finished.classList.remove('display-none')
  wrapper.classList.remove('display-none')

  finishedTitle.textContent = `Failure`
  finishedText.textContent = `there are no more possible moves. Your score ${sum}`

  buttonContinueFinished.classList.add('display-none')
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' || e.key === 'w') {
    e.preventDefault()
  } else if (e.key === 'ArrowDown' || e.key === 's') {
    e.preventDefault()
  } else if (e.key === 'ArrowLeft' || e.key === 'a') {
    e.preventDefault()
  } else if (e.key === 'ArrowRight' || e.key === 'd') {
    e.preventDefault()
  }
})

newGame.addEventListener('click', () => {
  main = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
  
  sum = 0

  start()
  localSave()
  updateField()
  updateBest()

  isFinished = true
})

buttonStartFinished.addEventListener('click', () => {
  main = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
  
  sum = 0

  start()
  localSave()
  updateField()
  updateBest()

  isFinished = true
  isSound = true
  finished.classList.add('display-none')
  wrapper.classList.add('display-none')
  buttonContinueFinished.classList.remove('display-none')
})

function updateBest() {
  scoreCurrent.textContent = sum
  if (+scoreBest.textContent < +scoreCurrent.textContent) {
    scoreBest.textContent = sum
  }
}

function updateField() {
  setTimeout(() => {
    field.forEach((x, i) => {
      x.textContent = main.flat(Infinity)[i] === 0 ? ``: `${main.flat(Infinity)[i]}`
      if (x.textContent === '2') {
        x.style.background = '#fb7185'
      } else if (x.textContent === '4') {
        x.style.background = '#f472b6'
      } else if (x.textContent === '8') {
        x.style.background = '#e879f9'
      } else if (x.textContent === '16') {
        x.style.background = '#c084fc'
      } else if (x.textContent === '32') {
        x.style.background = '#a78bfa'
      } else if (x.textContent === '64') {
        x.style.background = '#818cf8'
      } else if (x.textContent === '128') {
        x.style.background = '#60a5fa'
      } else if (x.textContent === '256') {
        x.style.background = '#38bdf8'
      } else if (x.textContent === '512') {
        x.style.background = '#22d3ee'
      } else if (x.textContent === '1024') {
        x.style.background = '#2dd4bf'
      } else if (x.textContent === '2048') {
        x.style.background = '#34d399'
      } else if (x.textContent === '4096') {
        x.style.background = '#4ade80'
      } else if (x.textContent === '8192') {
        x.style.background = '#a3e635'
      } else if (x.textContent === '16384') {
        x.style.background = '#facc15'
      } else if (x.textContent === '32768') {
        x.style.background = '#fbbf24'
      } else if (x.textContent === '65536') {
        x.style.background = '#fb923c'
      } else if (x.textContent === '131072') {
        x.style.background = '#f87171'
      }
    })
  }, 100)
  setTimeout(() => {
    field.forEach(x => {
      if (x.textContent === '') {
        x.style.background = ''
      }
    })
  }, 100)
}

function localSave() {
  if (localStorage.getItem('topScoreGame2048') === null) {
    localStorage.setItem('topScoreGame2048', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  } else {
    let score = localStorage.getItem('topScoreGame2048').split(',');
    score.push(sum)
    score.sort((a, b) => b - a)
    localStorage.setItem('topScoreGame2048', score.slice(0, 10))
  }
  scoreBest.textContent = localStorage.getItem('topScoreGame2048').split(',')[0]
  let topScores = localStorage.getItem('topScoreGame2048').split(',')
  topList.forEach((x, i) => {
    x.textContent = topScores[i]
  })
}

function randomPlace() {
  let arrFull = main.flat(Infinity)
  let arrEmptyPlaces = arrFull.map((x, i) => {
    if (x === 0) return i;
    return undefined
  }).filter(x => x !== undefined)
  let index = arrEmptyPlaces[random(0, arrEmptyPlaces.length - 1)]

  main[Math.floor(index / 4)][index % 4] = randomNumber()
  updateField()

  if (isSound) audioSound()
}

function randomNumber() {
  let num = random(1, 10)
  if (num === 10) return 4;
  return 2
}

function start() {
  main = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  main[random(0, 3)][random(0, 3)] = 2
}

function checkArr(originArr) {
  console.log(`originArr`, originArr)
  console.log(`main`, main)
  return originArr.toString() !== main.toString()
}

function up() {
  let originArr = JSON.parse(JSON.stringify(main))
  for(let i = 0; i < main.length; i++) {
    let a = originArr.map(x => x[i]).filter(x => x !== 0)
    let b = a.map((x, i) => {
      if (x === a[i - 1]) {
        return x * 2
      }
      return x
    })
    let c = []
    b.forEach((x, i) => {
      if (x !== a[i]) {
        c.push(x)
      } else if (x !== a[i + 1]) {
        c.push(x)
      }
    })
    if (c.length < 4) c.push(Array(4 - c.length).fill(0))
    let t = c.flat(Infinity)
    for (let j = 0; j < main.length; j++) {
      main[j][i] = t[j]
    }
    updateField()
  }
  if (checkArr(originArr)) randomPlace()
}

/* function up() {
  let transposition = false;
  for (let i = 0; i < main.length; i++) {
    for (let j = 0; j < main[i].length; j++) {
      if (main[i][j] !== 0 && i !== 0) {
        let o = i
        while (main[o - 1] !== undefined && main[o - 1][j] === 0) { 
          main[o - 1][j] = main[o][j]
          main[o][j] = 0
          o--
          transposition = true;
          updateField()
        }
        console.log(main[i][j])
        if (main[o - 1] !== undefined && main[o - 1][j] === main[o][j]) {
          sum += main[o][j]
          main[o - 1][j] += main[o][j]
          main[o][j] = 0
          transposition = true;
          updateField()
        }
      }
    }
  }
  if (transposition) randomPlace()
} */

function down() {
  let originArr = JSON.parse(JSON.stringify(main))
  for(let i = 0; i < main.length; i++) {
    let a = originArr.map(x => x[i]).filter(x => x !== 0)
    let b = a.map((x, i) => {
      if (x === a[i - 1]) {
        return x * 2
      }
      return x
    })
    let c = []
    b.forEach((x, i) => {
      if (x !== a[i]) {
        c.push(x)
      } else if (x !== a[i + 1]) {
        c.push(x)
      }
    })
    let y = []
    if (c.length < 4) {
      y = Array(4 - c.length).fill(0)
    }
    y.push(c)
    let t = y.flat(Infinity)
    for (let j = 0; j < main.length; j++) {
      main[j][i] = t[j]
    }
    updateField()
  }
  if (checkArr(originArr)) randomPlace()
}

/* function down() {
  let transposition = false;
  for (let i = main.length - 1; i >= 0; i--) {
    for (let j = 0; j < main[i].length; j++) {
      if (main[i][j] !== 0) {
        let o = i
        while (main[o + 1] !== undefined && main[o + 1][j] === 0) {
          main[o + 1][j] = main[o][j]
          main[o][j] = 0
          o++
          transposition = true;
          updateField()
        }
        if (main[o + 1] !== undefined && main[o + 1][j] === main[o][j]) {
          sum += main[o][j]
          main[o + 1][j] += main[o][j]
          main[o][j] = 0
          transposition = true;
          updateField()
        }
      }
    }
  }
  if (transposition) randomPlace()
} */

function left() {
  let originArr = JSON.parse(JSON.stringify(main))
  for(let i = 0; i < main.length; i++) {
    let a = originArr[i].filter(x => x !== 0)
    let b = a.map((x, i) => {
      if (x === a[i - 1]) {
        return x * 2
      }
      return x
    })
    let c = []
    b.forEach((x, i) => {
      if (x !== a[i]) {
        c.push(x)
      } else if (x !== a[i + 1]) {
        c.push(x)
      }
    })

    if (c.length < 4) {
      c.push(Array(4 - c.length).fill(0))
    }
    let t = c.flat(Infinity)
    for (let j = 0; j < main.length; j++) {
      main[i][j] = t[j]
    }
    updateField()
  }
  if (checkArr(originArr)) randomPlace()
}

/* function left() {
  let transposition = false;
  for (let i = 0; i < main.length; i++) {
    for (let j = 0; j < main[i].length; j++) {
      if (main[i][j] !== 0 && j !== 0) {
        let o = j
        while (main[i][o - 1] !== undefined && main[i][o - 1] === 0) {
          main[i][o - 1] = main[i][o]
          main[i][o] = 0
          o--
          transposition = true;
          updateField()
        }
        if (main[i][o - 1] !== undefined && main[i][o - 1] === main[i][o]) {
          sum += main[i][o]
          main[i][o - 1] += main[i][o]
          main[i][o] = 0
          transposition = true;
          updateField()
        }
      }
    }
  }
  if (transposition) randomPlace()
} */

function right() {
  let originArr = JSON.parse(JSON.stringify(main))
  for(let i = 0; i < main.length; i++) {
    let a = originArr[i].filter(x => x !== 0)
    let b = a.map((x, i) => {
      if (x === a[i - 1]) {
        return x * 2
      }
      return x
    })
    let c = []
    b.forEach((x, i) => {
      if (x !== a[i]) {
        c.push(x)
      } else if (x !== a[i + 1]) {
        c.push(x)
      }
    })
    let y = []
    if (c.length < 4) {
      y = Array(4 - c.length).fill(0)
    }
    y.push(c)
    let t = y.flat(Infinity)
    for (let j = 0; j < main.length; j++) {
      main[i][j] = t[j]
    }
    updateField()
  }
  if (checkArr(originArr)) randomPlace()
}

/* function right() {
  let transposition = false;
  for (let i = 0; i < main.length; i++) {
    for (let j = main[i].length - 1; j >= 0; j--) {
      if (main[i][j] !== 0) {
        let o = j
        while (main[i][o + 1] !== undefined && main[i][o + 1] === 0) {
          main[i][o + 1] = main[i][o]
          main[i][o] = 0
          o++
          transposition = true;
          updateField()
        }
        if (main[i][o + 1] !== undefined && main[i][o + 1] === main[i][o]) {
          sum += main[i][o]
          main[i][o + 1] += main[i][o]
          main[i][o] = 0
          transposition = true;
          updateField()
        }
      }
    }
  }
  if (transposition) randomPlace()
} */

function random(min, max) {
  let index = min + Math.random() * (max + 1 - min);
  return Math.floor(index);
}