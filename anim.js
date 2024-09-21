// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "At the time", time: 15 },
  { text: "The whisper of birds", time: 20 },
  { text: "Lonely before the sun cried", time: 26 },
  { text: "Fell from the sky, Like water drops", time: 31 },
  { text: "Where I'm now? I don't know why", time: 40 },
  { text: "Nice butterflies in my hands", time: 46 },
  { text: "Too much light for twilight", time: 53 },
  { text: "In the mood for the flowers love", time: 57 },
  { text: "That vision", time: 65 },
  { text: "Really strong, blew my mind", time: 71 },
  { text: "Silence Let me see what it was", time: 77 },
  { text: "I only want to live in clouds", time: 83 },
  { text: "Where I'm now? I don't know why", time: 91 },
  { text: "Nice butterflies in my hands", time: 98 },
  { text: "Too much light for twilight", time: 104 },
  { text: "In the mood for the flowers love", time: 109 },
  { text: "At the time", time: 142 },
  { text: "The whisper of birds", time: 147 },
  { text: "Lonely before the sun cried", time: 154 },
  { text: "Fell from the sky, Like water drops", time: 160 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 174 },
  { text: "Too much light for twilight", time: 181 },
  { text: "In the mood for the flowers", time: 186 },
  { text: "Love.", time: 198 },
];

// Animar las letras
var conteo = 0;
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  console.log(time);
  
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }

  if (time == 216) {
    window.location.href = 'index.html';
  }

  if (time == 0) {
    conteo++;
    if (conteo == 2) window.location.href = 'index.html';
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);