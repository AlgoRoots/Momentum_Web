let currentMusic = 0;

const music = document.querySelector("#audio");

const seekBar = document.querySelector(".seek-bar");
const songName = document.querySelector(".music_name");
const artist = document.querySelector(".artist");
const disk = document.querySelector(".disk");

const currentTime = document.querySelector(".current_time");
const musicDuration = document.querySelector(".song_duration");

const playBtn = document.querySelector(".play_btn");
const forwardBtn = document.querySelector(".forward_btn");
const backwardBtn = document.querySelector(".backward_btn");

playBtn.addEventListener("click", () => {
  if (playBtn.className.includes("pause")) {
    music.play();
  } else {
    music.pause();
  }
  playBtn.classList.toggle("pause");
  disk.classList.toggle("play");
});

// setup music

const setMusic = (i) => {
  seekBar.value = 0;
  let song = songs[i];
  currentMusic = i;
  music.src = song.path;

  songName.innerHTML = song.name;
  artist.innerHTML = song.artist;
  disk.style.backgroundImage = `url(${song.cover})`;

  currentTime.innerHTML = `00:00`;

  // music.addEventListener("loadeddata", () => {
  //   seekBar.max = music.duration;
  //   musicDuration.innerHTML = formatTime(music.duration);
  // });
  setTimeout(() => {
    seekBar.max = music.duration;
    musicDuration.innerText = formatTime(music.duration);
  }, 300);
};

setMusic(0);

// // formating time in min and seconds format

function formatTime(time) {
  var min = Math.floor(time / 60);
  var sec = Math.floor(time % 60);
  return (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
}

// // seek bar
setInterval(() => {
  seekBar.value = music.currentTime;
  currentTime.innerHTML = formatTime(music.currentTime);
  if (Math.floor(music.currentTime) == Math.floor(seekBar.max)) {
    forwardBtn.click();
  }
}, 500);

seekBar.addEventListener("change", () => {
  music.currentTime = seekBar.value;
});

const playMusic = () => {
  music.play();
  playBtn.classList.remove("pause");
  disk.classList.add("play");
};

// forward and backward
forwardBtn.addEventListener("click", () => {
  if (currentMusic >= songs.length - 1) {
    currentMusic = 0;
  } else {
    currentMusic++;
  }
  setMusic(currentMusic);
  playMusic();
});

backwardBtn.addEventListener("click", () => {
  if (currentMusic <= 0) {
    currentMusic = songs.length - 1;
  } else {
    currentMusic--;
  }
  setMusic(currentMusic);
  playMusic();
});
