const albums = [
  {
    cover: 'https://musicmeta-phinf.pstatic.net/album/010/035/10035234.jpg?type=r480Fll&v=20230728215540',
    author: 'New Jeans',
    title: 'ETA',
    genre: 'KPOP',
    likes: 10000,
  },
  {
    cover: 'https://musicmeta-phinf.pstatic.net/album/010/197/10197837.jpg?type=r480Fll&v=20230821125934',
    author: '악뮤',
    title: 'Love Lee',
    genre: 'KPOP',
    likes: 100,
  },
  {
    cover: 'https://musicmeta-phinf.pstatic.net/album/010/048/10048448.jpg?type=r480Fll&v=20230728215533',
    author: '정국',
    title: 'Seven (feat. Latto) - Clean Ver.',
    genre: 'KPOP',
    likes: 100200,
  },
  {
    cover: 'https://musicmeta-phinf.pstatic.net/album/009/637/9637036.jpg?type=r480Fll&v=20230728215909',
    author: 'G-Idle',
    title: 'Queencard',
    genre: 'KPOP',
    likes: 1000,
  }
];

const HIDDEN_CLASS = "hidden";

const musicListScreen = document.querySelector('.music-list-screen');
const musicPlayScreen = document.querySelector('.music-play-screen');


function setSongItem(index) {

  const song = albums[index];
  const cover = document.querySelector(`.song__cover:nth-child(${index + 1})`);
  const author = document.querySelector(`.song__author:nth-child(${index + 1})`);
  const title = document.querySelector(`.song__title:nth-child(${index + 1})`);

  console.log(`cover: ${cover}, author: ${author}, title: ${title}`);

  cover.src = song.cover;
  author.innerText = song.author;
  title.innerText = song.title;
}

let selectedIndex = 0;

function onSongSelected(index) {
  console.log(`Song ${albums[index].title} selected`);
  musicListScreen.classList.add(HIDDEN_CLASS);
  musicPlayScreen.classList.remove(HIDDEN_CLASS);

  /// bind song info to play-screen
  const song = albums[index];
  musicPlayScreen.querySelector('.playing-cover__img img').src = song.cover;
  musicPlayScreen.querySelector('.playing-info span:first-child').innerText = song.title;
  musicPlayScreen.querySelector('.playing-info span:last-child').innerText = song.author;


}

function setupAllMusic() {
  document.querySelectorAll(".song").forEach((e, index) => {
    e.addEventListener('click', function(event) {
      onSongSelected(index);
    });
    const cover = e.querySelector('.song__cover');
    cover.src = albums[index].cover;
    const title = e.querySelector('.song__title');
    const author = e.querySelector('.song__author');
    title.innerText = albums[index].title;
    author.innerText = albums[index].author;
  });
}

function selectMusic(index) {
  console.log('selecMusic : ' + index);
  selectedIndex = index;
  const song = albums[selectedIndex];

  document.querySelector('.avatar').src = song.cover;
  document.querySelector('.music-title').innerText = song.title;
  document.querySelector('.music-genre').innerText = song.genre;
}

document.addEventListener('DOMContentLoaded', function() {
  selectMusic(0);
  setupAllMusic();
});
