// sinusoide y lineas
let amplitud = 30;
let frequencia = 0.004;
let lineas = 50; 
let inclinacion = -20; 
let inclinacion2 = 20;
let cambio;
let cantColores = 4;
let rojo = [cantColores];
let verde = [cantColores];
let azul = [cantColores];
let opacidad;

//microfono 
let mic; // Objeto para capturar la entrada del micrófono
let amp = 0; // Amplitud de la señal de audio
let ampMax = 0.01; // Amplitud máxima
let ampMin = 0.03; // Amplitud mínima (inicialmente alto para ser reemplazado)
let frec;
let FREC_MIN = 125;
let FREC_MAX = 270;
let amortiguador = 0.9; // Factor de amortiguación
let audioContext;

const pichModel = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

let classifier;
const options = { probabilityThreshold: 0.9 };
let label;
// Teachable Machine model URL:
let soundModel = 'https://teachablemachine.withgoogle.com/models/D2td9Hmpn/';

function preload() {
  classifier = ml5.soundClassifier(soundModel + 'model.json', options);
}

function setup() {
  createCanvas(455, 600);
  for (let i = 1; i <= cantColores; i++){
    rojo [i] = random (50, 230);
    verde [i] = random (50, 230);
    azul [i] = random (50, 230);
  }
  cambio = floor(random(1,5));

  mic = new p5.AudioIn(); // Crear objeto de entrada de audio

  mic.start(startPitch); // Iniciar la captura de audio
  classifier.classify(gotResult);
  userStartAudio().then(function() {
    console.log("Audio permitido");
  }).catch(function(err) {
    console.log("Audio no permitido", err);
  });

}

function draw() {
  background (0);
  strokeCap(SQUARE);
  cambioAmp ();
  cambioFrec ();
  estados();
}

// FRECUENCIA
function startPitch() {
  audioContext = getAudioContext();
  pitch = ml5.pitchDetection(pichModel, audioContext , mic.stream, modelLoaded);
}

function modelLoaded() {
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {
      frec = frequency;
    }
    getPitch();
  });
}


//CLASIFICADOR
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
  label = results[0].label;
  //console.log(label);
  
}

