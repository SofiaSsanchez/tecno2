function cambioColor() {
    queColorEs();
    cambioLinea = random (1, 40);
    frecmin = 200;
    frecmax = 201;
    amp = 0; // Amplitud de la señal de audio
    ampMax = 0.04; // Amplitud máxima
    ampMin = 0; // Amplitud mínima (inicialmente alto para ser reemplazado)
  }

function cambioAmp (){
  // Obtener la amplitud de la señal del micrófono
  let rawAmp = mic.getLevel();

  // Aplicar amortiguador
  amp = lerp(amp, rawAmp, 1 - amortiguador);

  // Actualizar amplitudes máximas y mínimas
  if (amp > ampMax && amp < 0.02) ampMax = amp;
  if (amp < ampMin && amp) ampMin = amp;
  opacidad = map(amp, ampMin, ampMax, 20, 100); 
}

function cambioFrec (){
  if(label == "aplauso"){
    cambioColor ();;
    label = "";
    let cambioSinusoide = map(frec, frecmin, frecmax, 0.0001, 0.00009);
    cambio = cambioSinusoide;
  }

  if (frec) {
    // Mapear la frecuencia a valores de color
    let colorValue = map(frec, FREC_MIN, FREC_MAX, 0, 360, true);
    if (colorValue > 180 && colorValue <= 360){
      esColor = 1;
      colorLinea[1] = map(frec, FREC_MIN, FREC_MAX, 315, 360);
      colorLinea[2] = map(frec, FREC_MIN, FREC_MAX, 0, 135);
    } if (colorValue >= 0 && colorValue < 180){
      esColor = 2;
      colorLinea[1] = map(frec, FREC_MIN, FREC_MAX, 135, 245);
      colorLinea[2] = map(frec, FREC_MIN, FREC_MAX, 135, 315);
    }
    //console.log (colorValue);
  }

  if (frec){
    let ultimafrec;
    ultimafrec = frec;
    if (ultimafrec > frecmax && ultimafrec < 450){
      frecmax = ultimafrec;
    } else if (ultimafrec < frecmin){
      frecmin = ultimafrec;
    }
  }
}

function queColorEs (){
  if (esColor == 1){
    colorLinea[1] = random(315, 360);
    colorLinea[2] = random(0, 135);
  } else if (esColor == 2){
    colorLinea[1] = random(135, 245);
    colorLinea[2] = random(135, 315);
  }
}
