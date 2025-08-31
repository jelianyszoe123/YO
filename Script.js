document.querySelector(".profile img").addEventListener("click", () => {
  alert("¡Hola, soy Salomé!");
});


const player = document.getElementById("player");

function playAudio() {
  player.play();
}

function pauseAudio() {
  player.pause();
}

function changeTrack(track) {
  player.src = track;
  player.load();
  player.play();
}

function stopAudio() {
  player.pause();
  player.currentTime = 0;
}

function changeTrack(track) {
  const player = document.getElementById("player");
  player.src = track;
  player.load();
  player.play();
}


