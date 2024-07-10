function estados (){
    // lado derecho (primer bloque) - Capa 1
  for (let i = -2; i <= 12 + cambioLinea; i++) {
    let y = i * (height / lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + cambio) * y);
    strokeWeight(tamlineas);
    stroke(lerpColor(color(colorLinea[1], saturacion, opacidad), color(colorLinea[2], saturacion, opacidad), i / lineas));
    line(width, y + inclinacion2, x - 2, y + height / (2 * lineas));
  }

  // lado derecho (segundo bloque) - Capa 4
  for (let i = 34 + cambioLinea; i <= 41 + 1 + cambioLinea; i++) {
    let y = i * (height / lineas);
    let y2 = y + height / (2 * lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + cambio) * y2);

    strokeWeight(tamlineas);
    stroke(lerpColor(color(colorLinea[1], saturacion, opacidad), color(colorLinea[2], saturacion, opacidad), i / lineas));
    line(width, y, x, y2);
  }

  // Lado derecho (fondo blanco) - Capa 2
  for (let i = 10 + cambioLinea; i <= 36 + cambioLinea; i++) {
    let y = i * (height / lineas);
    let y2 = y + height / (2 * lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + cambio) * y2);
    strokeWeight(13);
    stroke(0);
    line(width, y + inclinacion, x, y2);
  }

  // lado derecho (segundo bloque) - Capa 3
  for (let i = 10 + cambioLinea; i <= 35 + 1 + cambioLinea; i++) {
    let y = i * (height / lineas);
    let y2 = y + height / (2 * lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + cambio) * y2);
    
    strokeWeight(tamlineas);
    stroke(lerpColor(color(colorLinea[1], saturacion, opacidad), color(colorLinea[2], saturacion, opacidad), i / lineas));
    line(width, y + inclinacion, x, y2);
  }

  // lado derecho (fondo blanco) - Capa 6
  for (let i = 40 + cambioLinea; i <= 43 + cambioLinea; i++) {
    let y = i * (height / lineas);
    let y2 = y + height / (2 * lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + cambio) * y2);
    strokeWeight(12);
    stroke(0);
    line(width, y + inclinacion2, x, y2);
  }

  // lado derecho (segundo bloque) - Capa 5
  for (let i = 40 + cambioLinea; i <= lineas + 1; i++) {
    let y = i * (height / lineas);
    let y2 = y + height / (2 * lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + cambio) * y2);

    strokeWeight(tamlineas);
    stroke(lerpColor(color(colorLinea[1], saturacion, opacidad), color(colorLinea[2], saturacion, opacidad), i / lineas));
    line(width, y + inclinacion2, x, y2);
  }

    // lado izquierdo (primer bloque) - Capa 1
    for (let i = -2; i <= 12 + cambioLinea; i++) {
      let y = i * (height / lineas);
      let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + cambio) * y);

      strokeWeight(tamlineas);
      stroke(lerpColor(color(colorLinea[1], saturacion, opacidad), color(colorLinea[2], saturacion, opacidad), i / lineas));
      line(0, y - inclinacion, x, y);
    }
  
    // lado izquierdo (segundo bloque) - Capa 4
   for (let i = 34 + cambioLinea; i <= 40 + 1 + cambioLinea; i++) {
    let y = i * (height / lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + cambio) * y);

      strokeWeight(tamlineas);
      stroke(lerpColor(color(colorLinea[1], saturacion, opacidad), color(colorLinea[2], saturacion, opacidad), i / lineas));
    line(0, y, x, y);
  }
  
    // lado izquierdo (fondo blanco) - Capa 2
    for (let i = 10 + cambioLinea; i <= 35 + cambioLinea; i++) {
      let y = i * (height / lineas);
      let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + cambio) * y);
      strokeWeight(13);
      stroke(0);
      line(0, y - inclinacion2 + 10, x, y);
    }
  
    // lado izquierdo (segundo bloque) - Capa 3
    for (let i = 10 + cambioLinea; i <= 35 + 1 + cambioLinea; i++) {
      let y = i * (height / lineas);
      let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + cambio) * y);
  
      strokeWeight(tamlineas);
      stroke(lerpColor(color(colorLinea[1], saturacion, opacidad), color(colorLinea[2], saturacion, opacidad), i / lineas));
      line(0, y - inclinacion2, x, y);
    }
  
    // lado izquierdo (fondo blanco) - Capa 6
    for (let i = 41 + cambioLinea; i <= 42 + cambioLinea; i++) {
      let y = i * (height / lineas);
      let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + cambio) * y);
      strokeWeight(13);
      stroke(0);
      line(0, y + 10, x, y);
    }
  
    // lado izquierdo (segundo bloque) - Capa 5
    for (let i = 40 + cambioLinea; i <= lineas + 1; i++) {
      let y = i * (height / lineas);
      let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + cambio) * y);
  
      strokeWeight(tamlineas);
      stroke(lerpColor(color(colorLinea[1], saturacion, opacidad), color(colorLinea[2], saturacion, opacidad), i / lineas));
      line(0, y - inclinacion, x, y);
   }
  }



