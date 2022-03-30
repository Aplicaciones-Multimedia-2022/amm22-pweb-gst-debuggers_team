//Variables globales:
var ctx;
var canvas;
var width = 800;
var height = 600;

//Declaración de Objeto para los elementos del juego:

var Elemento = function(coordx,coordy,imageid){
		this.coordx = coordx;
		this.coordy = coordy;
		this.image = document.getElementById(imageid)
	
	};
	
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;
	
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
   // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

    // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

window.onload = init;

function init(){
	
	astronauta = new Elemento(200, height/2, "astro");
	
	//canvas:
	canvas = document.getElementById("micanvas");
	ctx = canvas.getContext("2d");
	
	//keyboard arrows event configuration:
	document.addEventListener("keydown", mueveAstronauta);
	
	//loop:
	interval = setInterval(dibujar, 10);	
	
	
	
};
//función para refrescar los elementos de la imagen:
function dibujar(){
		borrar();
		ctx.drawImage(astronauta.image,astronauta.coordx,astronauta.coordy);
	}
function borrar(){
	ctx.clearRect(0, 0, width, height);
};

//Controles del astronauta:
function mueveAstronauta(){
	
	//up arrow
	if(event.keyCode == '38'){
		astronauta.coordy-=10;
	}
	//right arrow
	if(event.keyCode == '39'){
		astronauta.coordx+=10;
	}
	//left arrow
	if(event.keyCode == '37'){
		astronauta.coordx-=10;
	}
	//down arrow
	if(event.keyCode == '40'){
		astronauta.coordy +=10;
	}
	/*
	if(event.keyCode == '38'&& event.keyCode == '39'){
		astronauta.coordy-=10
		astronauta.coordx+=10
	}
	if(event.keyCode == '38'&& event.keyCode == '37'){
		astronauta.coordy-=10
		astronauta.coordx-=10
	}
	if(event.keyCode == '40'&& event.keyCode == '39'){
		astronauta.coordy+=10
		astronauta.coordx+=10
	}
	if(event.keyCode == '40'&& event.keyCode == '37'){
		astronauta.coordy+=10
		astronauta.coordx-=10
	} 
	*/
};
