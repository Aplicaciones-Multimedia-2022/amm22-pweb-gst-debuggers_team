//Variables globales:
var ctx;
var canvas;
var width = 1420;
var height = 680;
//contadores:
var i1 = 0;
var i2 = 0;
var i3 = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;

//Declaración de Objetos para los elementos del juego:

var Astronauta = function(coordx,coordy,sprite){
		this.coordx = coordx;
		this.coordy = coordy;
		this.sprite = sprite;
	
	};
	
var Meteorito = function(coordx, coordy, sprite){
		this.coordx = coordx;
		this.coordy = coordy;
		this.sprite = sprite;
}

var Background = function(coordx, coordy, sprite){
		this.coordx = coordx;
		this.coordy = coordy;
		this.sprite = sprite;
}
	
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
	const spriteBackground = [document.getElementById("b1"),
		document.getElementById("b2"),
		document.getElementById("b3"),
		document.getElementById("b4"),
		document.getElementById("b5"),
		document.getElementById("b6"),
		document.getElementById("b7"),
		document.getElementById("b8"),
		document.getElementById("b9"),
		document.getElementById("b10"),
		document.getElementById("b11"),
		document.getElementById("b12"),
		document.getElementById("b13"),
		document.getElementById("b14"),
		document.getElementById("b15"),
		document.getElementById("b16"),
		document.getElementById("b17"),
		document.getElementById("b18"),
		document.getElementById("b19"),
		document.getElementById("b20"),
		document.getElementById("b21"),
		document.getElementById("b22"),
		document.getElementById("b23"),
		document.getElementById("b24"),
		document.getElementById("b25"),
		document.getElementById("b26"),
		document.getElementById("b27"),
		document.getElementById("b28"),
		document.getElementById("b29"),
		document.getElementById("b30"),
		document.getElementById("b31"),
		document.getElementById("b32"),
		document.getElementById("b33"),
		document.getElementById("b34"),
		document.getElementById("b35"),
		document.getElementById("b36"),
		document.getElementById("b37"),
		document.getElementById("b38"),
		document.getElementById("b39"),
		document.getElementById("b40"),
		document.getElementById("b41"),
		document.getElementById("b42"),
		document.getElementById("b43"),
		document.getElementById("b44"),
		document.getElementById("b45"),
		document.getElementById("b46"),
		document.getElementById("b47"),
		document.getElementById("b48"),
		document.getElementById("b49"),
		document.getElementById("b50"),
		document.getElementById("b51"),
		document.getElementById("b52"),
		document.getElementById("b53"),
		document.getElementById("b54"),
		document.getElementById("b55"),
		document.getElementById("b56"),
		document.getElementById("b57"),
		document.getElementById("b58"),
		document.getElementById("b59"),
		document.getElementById("b60"),
		document.getElementById("b61"),
		document.getElementById("b62"),
		document.getElementById("b63"),
		document.getElementById("b64"),
		document.getElementById("b65"),
		document.getElementById("b66"),
		document.getElementById("b67"),
		document.getElementById("b68"),
		document.getElementById("b69"),
		document.getElementById("b70"),
		document.getElementById("b71"),
		document.getElementById("b72"),
		document.getElementById("b73"),
		document.getElementById("b74"),
		document.getElementById("b75"),
		document.getElementById("b76"),
		document.getElementById("b77"),
		document.getElementById("b78"),
		document.getElementById("b79"),
		document.getElementById("b80")
		];
	const spriteMeteorito = [document.getElementById("meteorito"),
		document.getElementById("meteorito1"),
		document.getElementById("meteorito2"),
		document.getElementById("meteorito3"),
		document.getElementById("meteorito4"),
		document.getElementById("meteorito5"),
		document.getElementById("meteorito6"),
		document.getElementById("meteorito7"),
		document.getElementById("meteorito8"),
		document.getElementById("meteorito9")
		];
		
	const spriteAstronautaGreen = [document.getElementById("astro1Green"),
		document.getElementById("astro2Green"),
		document.getElementById("astro3Green"),
		document.getElementById("astro4Green")
		];
		
	const spriteAstronauta = [document.getElementById("astro1"),
		document.getElementById("astro2"),
		document.getElementById("astro3"),
		document.getElementById("astro4")
		];
		
	canvas = document.getElementById("micanvas");
	ctx = canvas.getContext("2d");
	
	//Botón
	buttonCharacter = document.getElementById("buttRedAstro")
	ctx.font = "30px Arial";
	ctx.fillText("Escoge tu personaje:", 10, 50);
	ctx.textAlign = "center";
	
	astronauta = new Astronauta(200, height/2, spriteAstronauta);
	meteorito = new Meteorito(width, height/2,spriteMeteorito)
	background_1 = new Background(0,0,spriteBackground)	
	
	//keyboard arrows event configuration:
	document.addEventListener("keydown", mueveAstronauta);
	
	//loop:
	activate = true
	if (activate == true){
		setInterval(dibujar, 10);	
	}
	
};

function generateMeteoritos(){
	meteoritos = new Array();
	for(let i=0;i<20;i++){
		meteoritos.push(meteorito)
		meteorito.coordy = Math.round(Math.random()*height)
	}
}

function dibujar(){
		borrar();
		
		dibujarBackground(background_1, 2)
		dibujarSprite(meteorito, astronauta, 5, 15,5)
}

//función para refrescar los elementos de la imagen:
function dibujarSprite(Elemento1, Elemento2, v_1, v_2, vel_mov){
	
		ctx.drawImage(Elemento1.sprite[i1],Elemento1.coordx,Elemento1.coordy);
		ctx.drawImage(Elemento2.sprite[i2],Elemento2.coordx,Elemento2.coordy,Elemento2.sprite[i2].width/2,Elemento2.sprite[i2].height/2);
		
		if(count1==v_1){
			if(i1 == Elemento1.sprite.length-1){
				i1=0;
			}else{
				i1++;
			}
			count1 = 0;
		}else{
			count1+=1;
		}
		
		if(count2==v_2){
			if(i2 == Elemento2.sprite.length-1){
				i2=0;
			}else{
				i2++;
			}
			count2 = 0;
		}else{
			count2+=1;
		}
		
		meteorito.coordx-=vel_mov;
		
}
function dibujarBackground(Elemento, v_3) {
	
		ctx.drawImage(Elemento.sprite[i3],Elemento.coordx,Elemento.coordy);
		
		if(count3==v_3){
			if(i3 == Elemento.sprite.length-1){
				i3=0;
			}else{
				i3++;
			}
			count3 = 0;
		}else{
			count3+=1;
		}
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