const body = document.querySelector('body');

const listSongs = document.querySelectorAll('.song');
const posterPlayer = document.querySelector('.player__poster');
const author = document.querySelector('.controls__info__author');
const songName = document.querySelector('.controls__info__name_song');
const play = document.querySelector('.controls__play');
const switchingSound = document.querySelector('.controls__switching');
const timeEnd = document.querySelector('.time__end');
const timeStart = document.querySelector('.time__start');
const soundButton = document.querySelector('.sound__button');
const timeline = document.querySelector("#timeline");
const volumeSlider = document.querySelector('#volume');

const audio = new Audio();
let isPlay = false;
let currentVolume = 1;

const arrSongs = [
  {
    id: 1,
    singer: 'Katy Perry',
    nameSong: 'Dark Horse',
    song: 'assets/music/Кэти Перри feat. TEE - Dark Horse.mp3',
    poster: 'assets/posters/dark-horse.jpg',
  },
  {
    id: 2,
    singer: 'Maroon 5',
    nameSong: 'Animals',
    song: 'assets/music/Maroon 5 - Animals.mp3',
    poster: 'assets/posters/maroon5.jpg',
  },
  {
    id: 3,
    singer: 'Rixton',
    nameSong: 'Me And My Broken Heart',
    song: 'assets/music/Rixton - Me And My Broken Heart.mp3',
    poster: 'assets/posters/rixton.jpg',
  },
];

listSongs.forEach((x) => {
  x.addEventListener('click', checkSong)
})

function checkSong() {

  let countSound = Array.from(listSongs).indexOf(event.target);

  upload(countSound);
}

switchingSound.addEventListener('click', switchedSound);

function switchedSound() {
  let currentSound;

  arrSongs.forEach(x => {
    if (author.innerHTML === x.singer) currentSound = x;
  })

  if (event.target.classList.contains('controls__switching__next')) {
    if (currentSound.id === 3) {
      upload(0);
    } else {
      upload(currentSound.id)
    }
  }

  if (event.target.classList.contains('controls__switching__prev')) {
    if (currentSound.id === 1) {
      upload(2);
    } else {
      upload(currentSound.id - 2)
    }
  }
}

function playAudio(source) {
  audio.src = source;
  audio.currentTime = 0;
}

play.addEventListener('click', playMusic);

function playMusic() {
  if (isPlay) {
    play.style.backgroundImage = 'url(assets/svg/play.svg)';
    audio.pause();
    isPlay = false;
  } else {
    play.style.backgroundImage = 'url(assets/svg/pause.svg)';
    audio.play();
    isPlay = true;
  }
}

function upload(number) {
  listSongs.forEach((x) => {
    x.classList.remove('checked_song');
  })

  listSongs[number].classList.add('checked_song')

  body.style.backgroundImage = `url(${arrSongs[number].poster})`;
  posterPlayer.style.backgroundImage = `url(${arrSongs[number].poster})`;
  author.innerHTML = `${arrSongs[number].singer}`;
  songName.innerHTML = `${arrSongs[number].nameSong}`;

  playAudio(arrSongs[number].song)
  
  audio.addEventListener("loadeddata", () => {
      timeEnd.innerHTML = uploadInfo(audio.duration);
      audio.volume = currentVolume;
    }
  );

  if (isPlay) {
    play.style.backgroundImage = 'url(assets/svg/pause.svg)';
    audio.play();
  }
}

audio.addEventListener('ended', () => {
  let currentSound;

  arrSongs.forEach(x => {
    if (author.innerHTML === x.singer) currentSound = x;
  })

  if (currentSound.id === 3) {
    upload(0);
  } else {
    upload(currentSound.id)
  }
})

function uploadInfo(number) {
  let sec = parseInt(number);
  let min = parseInt(sec / 60);

  return `0${min}:${String(sec % 60).padStart(2, 0)}`
}

timeline.addEventListener("click", e => {
  audio.currentTime = e.offsetX / parseInt(window.getComputedStyle(timeline).width) * audio.duration;
});

setInterval(() => {
  timeline.value = audio.currentTime / audio.duration * 100;
  timeStart.innerHTML = uploadInfo(audio.currentTime);
}, 500);

soundButton.addEventListener('click', () => {
  if (volumeSlider.value > 0) {
    currentVolume = audio.volume;
    soundButton.style.backgroundImage = `url(assets/svg/not-sound.svg)`
    audio.volume = 0;
    volumeSlider.value = 0;
  } else {
    if(currentVolume > 0) {
      soundButton.style.backgroundImage = `url(assets/svg/sound.svg)`
      audio.volume = currentVolume;
      volumeSlider.value = currentVolume * 100;
    }
  }
})

volumeSlider.addEventListener('click', e => {
  let newVolume = e.offsetX / parseInt(window.getComputedStyle(volumeSlider).width);
  if (newVolume <= 0) {
    newVolume = 0;
    soundButton.style.backgroundImage = `url(assets/svg/not-sound.svg)`
  } else if (newVolume >= 1) {
    newVolume = 1;
    soundButton.style.backgroundImage = `url(assets/svg/sound.svg)`
  } else {
    soundButton.style.backgroundImage = `url(assets/svg/sound.svg)`
  }
  audio.volume = newVolume ;
  volumeSlider.value = newVolume * 100;
  currentVolume = newVolume;
})

listSongs.forEach((x, i) => {
  x.classList.remove('checked_song');
  if (i === 0) listSongs[0].classList.add('checked_song')
})

upload(0);