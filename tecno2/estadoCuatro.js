function estadoCuatro (){
    // lado derecho (primer bloque) - Capa 1
    for (let i = -2; i <= 26; i++) {
    let y = i * (height / lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + 0.00009) * y);
    let interColor = lerpColor(color(rojo[1], verde[1], azul[1], opacidad), color(rojo[3], verde[3], azul[3], opacidad), i / lineas);
    interColor = lerpColor(interColor, color(rojo[4] + 50, verde[4] + 50, azul[4] + 50, opacidad), i / lineas);

    strokeWeight(6);
    stroke(interColor);
    line(width, y + inclinacion2, x - 2, y + height / (2 * lineas));
    }
    
    // lado derecho (segundo bloque) - Capa 4
    for (let i = 34; i <= lineas + 1; i++) {
    let y = i * (height / lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + 0.00003) * y);
    let interColor = lerpColor(color(rojo[1], verde[1], azul[1], opacidad), color(rojo[3], verde[3], azul[3], opacidad), i / lineas);
    interColor = lerpColor(interColor, color(rojo[4] + 50, verde[4] + 50, azul[4] + 50, opacidad), i / lineas);

    strokeWeight(6);
    stroke(interColor);
    line(width, y, x, y + height / (2 * lineas));
    }
    
    // Lado derecho (fondo blanco) - Capa 2
    for (let i = 24; i <= 36; i++) {
    let y = i * (height / lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * frequencia * y);
    strokeWeight(13);
    stroke(0);
    line(width, y + inclinacion, x, y + height / (2 * lineas));
    }
    
    // lado derecho (segundo bloque) - Capa 3
    for (let i = 24; i <= 35 + 1; i++) {
    let y = i * (height / lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * (frequencia + 0.0001) * y);
    let interColor = lerpColor(color(rojo[1], verde[1], azul[1], opacidad), color(rojo[3], verde[3], azul[3], opacidad), i / lineas);
    interColor = lerpColor(interColor, color(rojo[4] + 50, verde[4] + 50, azul[4] + 50, opacidad), i / lineas);

    strokeWeight(6);
    stroke(interColor);
    line(width, y + inclinacion, x, y + height / (2 * lineas));
    }
    
    // lado izquierdo (primer bloque) - Capa 1
    for (let i = -2; i <= 26; i++) {
    let y = i * (height / lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * frequencia * y);
    let interColor = lerpColor(color(rojo[1], verde[1], azul[1], opacidad), color(rojo[3], verde[3], azul[3], opacidad), i / lineas);
    interColor = lerpColor(interColor, color(rojo[4] + 50, verde[4] + 50, azul[4] + 50, opacidad), i / lineas);

    strokeWeight(6);
    stroke(interColor);
    line(0, y - inclinacion, x, y);
    }
    
    // lado izquierdo (segundo bloque) - Capa 4
    for (let i = 34; i <= lineas + 1; i++) {
    let y = i * (height / lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * frequencia * y);
    let interColor = lerpColor(color(rojo[1], verde[1], azul[1], opacidad), color(rojo[3], verde[3], azul[3], opacidad), i / lineas);
    interColor = lerpColor(interColor, color(rojo[4] + 50, verde[4] + 50, azul[4] + 50, opacidad), i / lineas);

    strokeWeight(6);
    stroke(interColor);
    line(0, y, x, y);
    }
    
    // lado izquierdo (fondo blanco) - Capa 2
    for (let i = 24; i <= 35; i++) {
    let y = i * (height / lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * frequencia * y);
    strokeWeight(13);
    stroke(0);
    line(0, y - inclinacion2 + 10, x, y);
    }
    
    // lado izquierdo (segundo bloque) - Capa 3
    for (let i = 24; i <= 35 + 1; i++) {
    let y = i * (height / lineas);
    let x = width / 2 + amplitud * sin(TWO_PI * frequencia * y);
    let interColor = lerpColor(color(rojo[1], verde[1], azul[1], opacidad), color(rojo[3], verde[3], azul[3], opacidad), i / lineas);
    interColor = lerpColor(interColor, color(rojo[4] + 50, verde[4] + 50, azul[4] + 50, opacidad), i / lineas);

    strokeWeight(6);
    stroke(interColor);
    line(0, y - inclinacion2, x, y);
    }
}