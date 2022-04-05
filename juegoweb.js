//Variables globales:
var canvasWidth = 1420;
var canvasHeight = 640;
//contadores:
var time = 0;
//Variables de los elementos:
//Frecuencia en la que aparecen los meteoritos:
f_aparicion_met = 1200
//numero max de meteoritos:
numerodemet = 5
//velocidad de los met.
vel_max_meteo = 4

		/* ESTILO PESTAÑAS  */
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
	//Cargo los sprites de los elementos del juego:
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
		document.getElementById("b80"),
		document.getElementById("b81"),
		document.getElementById("b82"),
		document.getElementById("b83"),
		document.getElementById("b84"),
		document.getElementById("b85"),
		document.getElementById("b86"),
		document.getElementById("b87"),
		document.getElementById("b88"),
		document.getElementById("b89"),
		document.getElementById("b90"),
		document.getElementById("b91"),
		document.getElementById("b92"),
		document.getElementById("b93"),
		document.getElementById("b94"),
		document.getElementById("b95"),
		document.getElementById("b96"),
		document.getElementById("b97"),
		document.getElementById("b98"),
		document.getElementById("b99"),
		document.getElementById("b100"),
		document.getElementById("b101"),
		document.getElementById("b102"),
		document.getElementById("b103"),
		document.getElementById("b104"),
		document.getElementById("b105"),
		document.getElementById("b106"),
		document.getElementById("b107"),
		document.getElementById("b108"),
		document.getElementById("b109"),
		document.getElementById("b110"),
		document.getElementById("b111"),
		document.getElementById("b112"),
		document.getElementById("b113"),
		document.getElementById("b114"),
		document.getElementById("b115"),
		document.getElementById("b116"),
		document.getElementById("b117"),
		document.getElementById("b118"),
		document.getElementById("b119"),
		document.getElementById("b120")
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
	
	//Objeto que contiene todo lo relacionado con el área de juego(canvas)
	var gameArea = {
		canvas : document.getElementById("micanvas"),
		
		start : function() {
			this.canvas.width = canvasWidth;
			this.canvas.height = canvasHeight;
			this.context = this.canvas.getContext("2d");
			this.interval = setInterval(updateGameArea, 5);
		},
		
		borrar : function() {
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		}
	}
	
	//Objeto elemento que será cualquier componente añadido al juego como los meteoritos, fondo, etc..
	
	var Elemento = function(coordx,coordy,movimiento,sprite,velocidad_refresco){
		this.coordx = coordx;
		this.coordy = coordy;
		this.sprite = sprite;
		this.movimiento = movimiento;
		this.velocidad_refresco = velocidad_refresco;
		this.contador = 0;
		this.recorrerSprite = 0;
		
		ctx = gameArea.context;
		
		//Esta función se encargará de actualizar los sprites de cada elemento:
		this.updateElement = function(){
			
			if(this.recorrerSprite < this.sprite.length){
				ctx.drawImage(this.sprite[this.recorrerSprite],this.coordx, this.coordy)
				if(this.contador == this.velocidad_refresco){
					this.recorrerSprite++;
					this.contador = 0;
					//Solución al parpadeo
					if(this.recorrerSprite == this.sprite.length){
						this.recorrerSprite = 0;
					}
				}else{
					this.contador++;
				}
			}
		}
	
	};
	
	//Función que devuelve un número aleatorio entre dos números:
	function getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min) ) + min;
	};
	
	variable = 1;
	if (variable = 1){
		spriteElegido = spriteAstronauta;
	}else{
		spriteElegido = spriteAstronautaGreen;
	}
	//Creación de elementos:
	var astronauta;
	var meteoritos = new Array();
	var timespace = new Array();
	
	function startgame(f_aparicion_met,numerodemet,vel_max_meteo){
		
		gameArea.start();
		timespace[0] = f_aparicion_met;
		
		background = new Elemento(0,0,0,spriteBackground,3)
		astronauta = new Elemento(100,getRndInteger(100,580),0,spriteElegido,20)
		
		for(let i = 0;i<numerodemet;i++){
		
			meteoritos[i] = new Elemento(canvasWidth,getRndInteger(50,600),getRndInteger(1,vel_max_meteo),spriteMeteorito,getRndInteger(2, 6));
			timespace[i+1] = timespace[i] + getRndInteger(f_aparicion_met*0.8,f_aparicion_met);
		
		}
	}
	
	function updateGameArea(){
		
		
		gameArea.borrar();
		background.updateElement();
		astronauta.updateElement();
		
		for(let i = 0;i<meteoritos.length;i++){
			meteoritos[i].updateElement();
		
		
			if(time >= timespace[i]){
				meteoritos[i].coordx-=meteoritos[i].movimiento;
			}	
		
			
		}
		
		for(let i = 0; i<meteoritos.length; i++){
			if(meteoritos[i].coordx<-200){
				meteoritos[i].coordx = canvasWidth;
				meteoritos[i].coordy = getRndInteger(50,600);
				meteoritos[i].movimiento = getRndInteger(1,vel_max_meteo);
				timespace[i] = time + getRndInteger(Math.round(f_aparicion_met*0.8),f_aparicion_met);
			}
		}
		time++;
	}
	
	//keyboard arrows event configuration:
	document.addEventListener("keydown", mueveAstronauta);
	
		//Controles del astronauta:
	function mueveAstronauta(){
	
	//up arrow
		if(event.keyCode == '87'){
			astronauta.coordy-=10;
		}
	//right arrow
		if(event.keyCode == '68'){
			astronauta.coordx+=10;
		}
	//left arrow
		if(event.keyCode == '65'){
			astronauta.coordx-=10;
		}
	//down arrow
		if(event.keyCode == '83'){
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
	}	
	video1 = document.getElementById("video1")
	
	video1.addEventListener('play',function() {
		draw(video1,gameArea.context,canvasWidth, canvasHeight);
	},false);
	
	function drawvideo(video, c, w, h){
		c.drawImage(video,0,0, w, h);
		setTimeout(draw,20,v,c,w,h);
	}
	
	startgame(f_aparicion_met,numerodemet,vel_max_meteo);
	
}

