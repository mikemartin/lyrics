import RabbitLyrics from "rabbit-lyrics";

const lyrics = document.getElementById("lyrics");
const audioPlayer = document.getElementById("music");
const lines = document.getElementsByClassName("rabbit-lyrics__line");

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
