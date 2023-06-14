canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.
rover_whidth=100;
rover_height=90;


background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Crea la función "add()"
 function add() {
   background_imgTag=new Image();
   background_imgTag.uploadBackground;
   background_imgTag.src=background_image; 
 
   rover_imgTag=new Image();
   rover_imgTag.onload=uploadrover;
   rover_imgTag.src=rover_image; 
}

//Crea una función "uploadBackground()".
 function uploadBackground() {
   ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height); 
 }                             

//Crea una función "uploadrover()".
function uploadrover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_whidth,rover_height); 
  }  
     


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
		if(keyPressed=='40')
         {
            down()
            console.log("abajo");
         }
        if(keyPressed=='38')
         {
            up()
            console.log("arriba")
         }
         if(keyPressed=='37')
         {
            left()
            console.log("izquierda")
         }
         if(keyPressed=='39')
         {
            right()
            console.log("derecha")
         }
    


     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
		




    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}



