var canvas,bg;


function preload() {
    bg = loadImage("garden.png");
    //carga aquí las imágenes

}

function setup(){
    canvas = createCanvas(1000,800);

    //crea aquí los sprites de Tom y Jerry

}

function draw() {

    background(bg); //Observación: nombre de variable bg dentro de background :o 

    //escribe aquí la condición para evaluar si Tom y Jerry chocan

    drawSprites();
}


function keyPressed(){

   ///Escribe aquí el código para la animación de movimiento y cambio
}