function cambioColor() {
    for (let i = 1; i <= cantColores; i++){
        rojo [i] = random (50, 255);
        verde [i] = random (50, 255);
        azul [i] = random (50, 255);
      }

    amp = 0; // Amplitud de la señal de audio
    ampMax = 0.01; // Amplitud máxima
    ampMin = 0.06; // Amplitud mínima (inicialmente alto para ser reemplazado)
  }

function cambioAmp (){
  // Obtener la amplitud de la señal del micrófono
  let rawAmp = mic.getLevel();

  // Aplicar amortiguador
  amp = lerp(amp, rawAmp, 1 - amortiguador);

  // Actualizar amplitudes máximas y mínimas
  if (amp > ampMax) ampMax = amp;
  if (amp < ampMin) ampMin = amp;
  opacidad = map(amp, ampMin, ampMax, 50, 260);

  if(label == "aplauso"){
   cambio = floor(random(1,5));
   cambioColor ();;
   label = "";
 } 
}

function cambioFrec (){
  if (frec) {
    // Mapear la frecuencia a valores de color
    let colorValue = map(frec, FREC_MIN, FREC_MAX, 50, 260);
    rojo[1] = colorValue;
    verde[2] = 255 - colorValue; // Colores complementarios
    azul[3] = colorValue;
    rojo[4] = 255 - colorValue; // Colores complementarios
  }
}