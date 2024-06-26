function cambioColor() {
    for (let i = 1; i <= cantColores; i++){
        rojo [i] = random (50, 200);
        verde [i] = random (50, 200);
        azul [i] = random (50, 200);
      }
    cambioLinea = random (1, 40);
    frecmin = 200;
    frecmax = 201;
    amp = 0; // Amplitud de la señal de audio
    ampMax = 0.02; // Amplitud máxima
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
  opacidad = map(amp, ampMin, ampMax, 20, 260); 
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
    let colorValue = map(frec, FREC_MIN, FREC_MAX, 50, 260);
    rojo[1] = colorValue;
    verde[2] = 255 - colorValue; 
    azul[3] = colorValue;
    rojo[4] = 255 - colorValue; 
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