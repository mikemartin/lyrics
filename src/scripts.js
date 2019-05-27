import RabbitLyrics from "rabbit-lyrics";

var audioPlayer = document.getElementById("music");
var vocals = document.getElementById("vocals");

vocals.addEventListener('click', function () {
  if (this.classList.contains("vocals-on")) {
    this.classList.remove("vocals-on");
    audioPlayer.src = 'audio.mp3';
  } else {
    this.classList.add("vocals-on");
    audioPlayer.src = 'audio-vocals.mp3';
  }
  audioPlayer.play();
});

new RabbitLyrics({
  element: document.getElementById("lyrics"),
  mediaElement: audioPlayer
});