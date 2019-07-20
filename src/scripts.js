import RabbitLyrics from "rabbit-lyrics";

const lyrics = document.getElementById("lyrics");
const audioPlayer = document.getElementById("music");
const vocals = document.getElementById("vocals");
const lines = document.getElementsByClassName("rabbit-lyrics__line");

vocals.addEventListener('click', function () {
  if (this.classList.contains("vocals-on")) {
    this.classList.remove("vocals-on");
    audioPlayer.src = 'audio.mp3';
  } else {
    this.classList.add("vocals-on");
    audioPlayer.src = 'audio-vocals.m4a';
  }
  audioPlayer.play();
});

new RabbitLyrics({
  element: lyrics,
  mediaElement: audioPlayer,
});

setTimeout(function(){ 
  for(var i = 0; i < lines.length; i++){
    const line = lines.item(i)
    const start = line.dataset.start;
    line.addEventListener('click', function () {
      audioPlayer.currentTime = start;
    });
  }
}, 3000);
