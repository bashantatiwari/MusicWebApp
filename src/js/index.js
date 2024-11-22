console.log(TotalSongsList)
const first_theme = document.getElementById('theme-first-content')
const second_theme = document.getElementById('theme-second-content')
const third_theme = document.getElementById('theme-third-content')
const body = document.querySelector('body')
const first_text = document.getElementById('first_text')
const second_text = document.getElementById('second_text')
const third_text = document.getElementById('third_text')

// now for the innerHtml text
function writing(name) {
  if (name == 'first_theme') {
    first_text.style.display = 'block'
    first_text.style.color = 'black'

    second_text.style.display = 'none'
    third_text.style.display = 'none'
  } else if (name == 'second_theme') {
    first_text.style.display = 'none'
    second_text.style.display = 'block'
    third_text.style.display = 'none'
  } else if (name == 'third_theme') {
    first_text.style.display = 'none'
    second_text.style.display = 'none'
    third_text.style.display = 'block'
  } else {
    first_text.style.display = 'none'
    second_text.style.display = 'none'
    third_text.style.display = 'none'
  }
}
// changed the background color of the page
const root = document.querySelector(':root')
const background_theme =
  getComputedStyle(root).getPropertyValue('--for-background')
first_theme.addEventListener('click', () => {
  root.style.setProperty(
    '--for-background',
    'linear-gradient(180deg, #f5c6a5 0%, #ffffff 50%, #000000 100%)'
  )
  root.style.setProperty('--for-body-text-color', 'Black')
  root.style.setProperty('--for-boxes-background', 'Black')
  root.style.setProperty('--for-boxes-text-color', 'White')
  writing('first_theme')
})
second_theme.addEventListener('click', () => {
  root.style.setProperty(
    '--for-background',
    'linear-gradient(180deg, #ff66b2 0%, #66ff66 50%, #9370db 100%)'
  )
  root.style.setProperty('--for-body-text-color', 'White')
  root.style.setProperty('--for-boxes-background', 'Purple')
  root.style.setProperty('--for-boxes-text-color', 'White')
  writing('second_theme')
})
third_theme.addEventListener('click', () => {
  root.style.setProperty(
    '--for-background',
    'linear-gradient(180deg, #000000 0%, #7e7e7e 50%, #ffffff 100%)'
  )
  root.style.setProperty('--for-body-text-color', 'White')
  root.style.setProperty('--for-boxes-background', 'White')
  root.style.setProperty('--for-boxes-text-color', 'Black')

  writing('third_theme')
})
// more efficient way to change the background through css variable

// changing front page image of my music app
const img = document.getElementById('front-page-image')
const picturesContentTheme = document.getElementById('pictures-content')
const insidePictureContentTheme =
  picturesContentTheme.querySelectorAll('.picture-content')
function frontPageImageChanger(element, value) {
  element.addEventListener('click', () => {
    img.src = `images/pictures/${value}`
  })
}
const FrontPageImageAddresses = [
  'boy-image.png',
  'girl-image.png',
  'cat-image.png',
]
Array.from(insidePictureContentTheme).forEach((element, index) => {
  const lengthOfArray = insidePictureContentTheme.length
  let i = 0
  while (i <= lengthOfArray) {
    if (index == i) {
      frontPageImageChanger(element, FrontPageImageAddresses[i])
    }
    i = i + 1
  }
})
// FrontPage Image js works finish here

// changing backgrounds of navbar sidebar songbar and footer
const navbar = document.getElementById('navbar')
const sidebar = document.querySelector('.sidebar')
const footer = document.querySelector('footer')
const songbar = document.getElementById('song-bar')
const BackgroundChangerTheme = document.getElementById(
  'background-changer-content'
)
const insideBackgroundChangerTheme = BackgroundChangerTheme.querySelectorAll(
  '.background-content'
)
function backgroundThemeChanger(element, value) {
  element.addEventListener('click', () => {
    backgroundChanger(value)
  })
}
const navbarImageAddress = [
  '3third-background.png',
  '5fifth-background.png',
  '6sixth-background.jpg',
]

function backgroundChanger(value) {
  navbar.style.background = ` linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),url('images/backgrounds/${value}')`

  sidebar.style.background = ` linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),url('images/backgrounds/${value}')`

  songbar.style.background = ` linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),url('images/backgrounds/${value}')`

  footer.style.background = ` linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),url('images/backgrounds/${value}')`
}
Array.from(insideBackgroundChangerTheme).forEach((element, index) => {
  let i = 0
  const lengthOfArray = insideBackgroundChangerTheme.length
  while (i <= lengthOfArray) {
    if (index == i) {
      backgroundThemeChanger(element, navbarImageAddress[i])
    }
    i += 1
  }
})
// changing backgrounds of navbar sidebar songbar and footer js task finished here

// thumbnail changer for played audio
const first_song = document.getElementById('1')
const second_song = document.getElementById('2')
const third_song = document.getElementById('3')
const fourth_song = document.getElementById('4')
const fifth_song = document.getElementById('5')
const sixth_song = document.getElementById('6')
const seventh_song = document.getElementById('7')

// to install the title of the songs from the javascript so that i can add through js

const songTitleMainDiv = document.getElementById('songsLists')
const songTitleInsideDivs = songTitleMainDiv.querySelectorAll('.play-song')

songTitleInsideDivs.forEach((element, index) => {
  element.innerHTML = TotalSongsList[index].title
})
// //making automatic song play
// songTitleInsideDivs.forEach((element, index) => {
//   element.innerHTML = TotalSongsList[index].title
//   for (let i = 0; i <= length(TotalSongsList); i++) {
//     if (i == index) {
//       element.addEventListener('click', () => {
//         musicPlaying(index)
//       })
//     }
//   }
// })

// -----task completed----
const thumbnailImage = document.getElementById('thumbnail-display')

first_song.addEventListener('click', () => {
  musicPlaying(0)
})
second_song.addEventListener('click', () => {
  musicPlaying(1)
})
third_song.addEventListener('click', () => {
  musicPlaying(2)
})
fourth_song.addEventListener('click', () => {
  musicPlaying(3)
})
fifth_song.addEventListener('click', () => {
  musicPlaying(4)
})
sixth_song.addEventListener('click', () => {
  musicPlaying(5)
})
seventh_song.addEventListener('click', () => {
  musicPlaying(6)
})
let songIndex = 0
let musicPlay = document.getElementById('play-music')
let musicProgressBar = document.getElementById('music-range')
let audioElement = new Audio('mp3/1.mp3')
musicPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play()
    musicPlay.classList.remove('fa-play-circle')
    musicPlay.classList.add('fa-pause-circle')
  } else {
    audioElement.pause()
    musicPlay.classList.add('fa-play-circle')
    musicPlay.classList.remove('fa-pause-circle')
  }
})
audioElement.addEventListener('timeupdate', () => {
  const progressBarPercent = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  )
  musicProgressBar.value = progressBarPercent
  console.log(musicProgressBar.value)
  if (musicProgressBar.value == 100) {
    if (songIndex >= 6) {
      songIndex = 0
    } else {
      songIndex += 1
    }
    musicPlaying(songIndex)
  }
})

musicProgressBar.addEventListener('change', () => {
  audioElement.currentTime =
    (audioElement.duration * musicProgressBar.value) / 100
})

function musicPlaying(index) {
  thumbnailImage.src = TotalSongsList[index].thumbnailaddress
  songIndex = index
  audioElement.src = `mp3/${songIndex + 1}.mp3`
  audioElement.currentTime = 0
  audioElement.play()
  musicPlay.classList.remove('fa-play-circle')
  musicPlay.classList.add('fa-pause-circle')
}

document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 6) {
    songIndex = 0
  } else {
    songIndex += 1
  }
  musicPlaying(songIndex)
})

document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = 0
  } else {
    songIndex -= 1
  }
  musicPlaying(songIndex)
})

// this is for songscards
const cardOfSongs = document.getElementsByClassName('songs-cards')
Array.from(cardOfSongs).forEach((element, i) => {
  const songCardImage = element.querySelector('img')
  const songCardTitle = element.querySelector('.song-card-title')
  const songCardSinger = element.querySelector('.song-card-singer')
  const songCardViews = element.querySelector('.song-card-Views')
  const songCardDate = element.querySelector('.song-card-dates')
  songCardImage.src = TotalSongsList[i].thumbnailaddress
  console.log(songCardImage.src)
  songCardTitle.innerHTML = `Title: ${TotalSongsList[i].title}`
  songCardSinger.innerHTML = `Singer: ${TotalSongsList[i].singer} `
  songCardViews.innerHTML = `Views: ${TotalSongsList[i].youtubeViews}`
  songCardDate.innerHTML = `Release Date: ${TotalSongsList[i].relaseDate}`
  console.log('Hello World')
})
// hidden playlists for each and evey playlists
const mainDivOfVideoTitle = document.getElementById('songsListsForVideoPlay')
const videotitles = mainDivOfVideoTitle.querySelectorAll('.play-video')
const videoplayer = document.getElementById('video-player')
const videoChanger = videoplayer.querySelector('iframe')
const SeparatedPlaylists = document.getElementById('separatedPlaylists')
const InsideSeparatedPlaylists =
  SeparatedPlaylists.querySelectorAll('.realplaylists')
const closeButton = document.getElementById('close-btn')
Array.from(videotitles).forEach((element, i) => {
  element.style.display = 'flex'
  element.innerHTML = TotalSongsList[i].title
  element.addEventListener('click', () => {
    videoChanger.src = TotalSongsList[i].video
  })
})
function CloseButtonAction(element) {
  closeButton.addEventListener('click', () => {
    element.style.display = 'flex'
    closeButton.style.display = 'none'
  })
}
function divBoxWritten(element, i) {
  element.style.display = 'flex'
  element.style.height = '15%'
  element.innerHTML = TotalSongsList[i].title
  element.addEventListener('click', () => {
    videoChanger.src = TotalSongsList[i].video
  })
}
Array.from(InsideSeparatedPlaylists).forEach((element, i) => {
  element.addEventListener('click', () => {
    if (i == 0) {
      Array.from(videotitles).forEach((element, i) => {
        element.style.display = 'none'
        closeButton.style.display = 'flex'
        if (TotalSongsList[i].playListTitle == 'Breakup') {
          divBoxWritten(element, i)
        }
        CloseButtonAction(element)
      })
    } else if (i == 1) {
      Array.from(videotitles).forEach((element, i) => {
        element.style.display = 'none'
        closeButton.style.display = 'flex'
        if (TotalSongsList[i].playListTitle == 'OneSidedLove') {
          divBoxWritten(element, i)
        }
        CloseButtonAction(element)
      })
    } else if (i == 2) {
      Array.from(videotitles).forEach((element, i) => {
        element.style.display = 'none'
        closeButton.style.display = 'flex'
        if (TotalSongsList[i].playListTitle == 'Lovesongs') {
          divBoxWritten(element, i)
        }
        CloseButtonAction(element)
      })
    } else if (i == 3) {
      Array.from(videotitles).forEach((element, i) => {
        element.style.display = 'none'
        closeButton.style.display = 'flex'
        if (TotalSongsList[i].playListTitle == 'Englishsongs') {
          divBoxWritten(element, i)
        }
        CloseButtonAction(element)
      })
    } else if (i == 4) {
      Array.from(videotitles).forEach((element, i) => {
        element.style.display = 'none'
        closeButton.style.display = 'flex'
        if (TotalSongsList[i].playListTitle == 'Nepalisongs') {
          divBoxWritten(element, i)
        }
        CloseButtonAction(element)
      })
    } else if (i == 5) {
      Array.from(videotitles).forEach((element, i) => {
        element.style.display = 'none'
        closeButton.style.display = 'flex'
        if (TotalSongsList[i].playListTitle == 'Hindisongs') {
          divBoxWritten(element, i)
        }
        CloseButtonAction(element)
      })
    }
  })
})

// for reloading the page to create what was it before

const topHeaderIcon = document.getElementById('logo')
topHeaderIcon.addEventListener('click', () => {
  location.reload()
})

// for hiding the pages as it seems to much to be in the front page

const albmBtn = document.getElementById('albumPage')
const thirdPage = document.getElementById('third-page')
const aboutBtn = document.getElementById('aboutPage')
const fifthPage = document.getElementById('fifth-page')
const PlaylistBox = document.getElementsByClassName(
  'fourth-page-second-part-first-content'
)
const playlistCloseBtn = document.getElementById('Playlists-close-btn')
const PlaylistBtn = document.getElementById('box1-title')
albmBtn.addEventListener('click', () => {
  thirdPage.style.display = 'Flex'
})
aboutBtn.addEventListener('click', () => {
  fifthPage.style.display = 'Flex'
})

// for background changer of first page
const backgroundVideo = [
  'Aesthetic Mood',
  'Discotheme Mood',
  'Earth Mood',
  'Greenary Mood',
  'GuitarVibe Mood',
  'Godtheme Mood',
]
const backgroundVideoUrl = document.getElementById('backgroundVideo')
const suggestionBox = document.getElementById('frontPageSearch')
const Suggestions = document.getElementById('moodsValue')
suggestionBox.addEventListener('input', (e) => {
  Suggestions.style.display = 'flex'
  const input = e.target.value
  const filteredSuggestions = backgroundVideo.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase())
  )
  Suggestions.innerHTML = ''
  filteredSuggestions.forEach((item) => {
    const li = document.createElement('li')
    li.textContent = item
    Suggestions.appendChild(li)
  })
  Suggestions.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
      suggestionBox.value = e.target.textContent
      Suggestions.innerHTML = ''
      if (suggestionBox.value == 'Aesthetic Mood') {
        backgroundVideoUrl.src = './video/aesthetic.mp4'
      } else if (suggestionBox.value == 'Discotheme Mood') {
        backgroundVideoUrl.src = './video/Discotheme.mp4'
      } else if (suggestionBox.value == 'Earth Mood') {
        backgroundVideoUrl.src = './video/earth.mp4'
      } else if (suggestionBox.value == 'Greenary Mood') {
        backgroundVideoUrl.src = './video/greenary.mp4'
      } else if (suggestionBox.value == 'GuitarVibe Mood') {
        backgroundVideoUrl.src = './video/guitarVibe.mp4'
      } else if (suggestionBox.value == 'Godtheme Mood') {
        backgroundVideoUrl.src = './video/Godtheme.mp4'
      }
    }
  })
})
