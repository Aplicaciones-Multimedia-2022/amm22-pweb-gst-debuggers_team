//Variables globales:
var canvasWidth = 1420;
var canvasHeight = 640;
//Parametros niveles:
var level = 1;
var level_duration = 3000
//contadores:
var time = 0;
var time_level = level_duration;
//Variables de los elementos:
//Frecuencia en la que aparecen los meteoritos:
var f_aparicion_met = 1200;
//numero max de meteoritos:
var numerodemet = 5;
//velocidad de los met.
var vel_max_meteo = 4;

var velocidadAstronauta = 5

//Dimensiones de los elementos:
var escalabackground = 1
var escalameteor;
var escalaastro = 1.5

//Sonidos:
var mySound; //Sonido de impacto
var myMusic; //Música de fondo
var video1Sound; //Sonido vídeo 1

//Botones del canvas:
//Botón pantalla final:
var finalbuttWidth = 300
var finalbuttHeight = 100
var finalbuttcoordx = (canvasWidth/2) - (finalbuttWidth/2)
var finalbuttcoordy = ((canvasHeight/2)+180) - (finalbuttHeight/2)

//Botón pantalla game over:
var gobuttWidth = 400
var gobuttHeight = 220
var gobuttcoordx = (canvasWidth/2) - (gobuttWidth/2)
var gobuttcoordy = ((canvasHeight/2)+140) - (gobuttHeight/2)

//Botón skip intro:
var skipbuttWidth = 300
var skipbuttHeight = 100
var skipbuttcoordx = ((canvasWidth/2)+300) - (skipbuttWidth/2)
var skipbuttcoordy = ((canvasHeight/2)-200) - (skipbuttHeight/2)

var button; 

//traje del astronauta:
var spriteElegido;

		/* PESTAÑAS  */
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
	var movimientox = 0;
	var movimientoy = 0;
	
	//declaración sonidos:
	video1Sound = new sound("./audios/audioaux1.mp3"); //Música vídeo 1
	mySound = new sound("./audios/impacto.mp3"); //Sonido de impacto
	myMusic = new sound("./audios/ambiente.mp3"); //Música de fondo
	
	//variables de los vídeos
	video1 = document.getElementById("video1")
	video2 = document.getElementById("video2")
	video3 = document.getElementById("video3")
	
	videocharacter = document.getElementById("videocharacter") //vídeo de fondo de la selección personaje
	var choosedCharacter = false; //Esta variable indica si se ha elegido el personaje
	
	//imagenes de momentos de la partida:
	imagenfinal = document.getElementById("imagenfinal"); //imagen final
	im_go = document.getElementById("go"); //game over
	start_im = document.getElementById("start_im"); //imagen pulsa barra espaciadora
	
	//Botones para la selección de personaje:
	//imagenes de los botones:
	trajenaranja = document.getElementById("selnaranja");
	trajeverde = document.getElementById("selverde");
	//dimensiones y coordenadas de los botones
	var imagenbuttWidth = trajenaranja.width
	var imagenbuttHeight = trajenaranja.height
	var naranjabuttcoordx = 125
	var naranjabuttcoordy = 150
	var verdebuttcoordx = canvasWidth - (naranjabuttcoordx+imagenbuttWidth)
	var verdebuttcoordy = 150
	
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
	
	var Elemento = function(coordx,coordy,movimiento,sprite,velocidad_refresco, escala){
		this.coordx = coordx;
		this.coordy = coordy;
		this.sprite = sprite;
		this.movimiento = movimiento;
		this.velocidad_refresco = velocidad_refresco;
		this.contador = 0;
		this.recorrerSprite = 0;
		this.centroElementox;
		this.centroElementoy;
		this.centroElementox1;
		this.centroElementoy1;
		this.centroElementox2;
		this.centroElementoy2;
		this.escala = escala; 
		
		ctx = gameArea.context;
		
		//Esta función se encargará de actualizar los sprites de cada elemento:
		this.updateElement = function(){
			
			if(this.recorrerSprite < this.sprite.length){
				ctx.drawImage(this.sprite[this.recorrerSprite],this.coordx, this.coordy, this.sprite[this.recorrerSprite].width/escala, this.sprite[this.recorrerSprite].height/escala)
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
	
	//Función que calcula las distancias entre dos coordenadas del canvas:
	function distancia(coordx1,coordy1,coordx2,coordy2){
		return Math.sqrt(((coordx1-coordx2)**2)+((coordy1-coordy2)**2))
	}

	//Creación de elementos:
	var astronauta;
	var meteoritos = new Array();
	var timespace = new Array();

	
	function startgame(f_aparicion_met,numerodemet,vel_max_meteo){
		
		myMusic.play();
		gameArea.start();
		
		timespace[0] = f_aparicion_met;
		
		background = new Elemento(0,0,0,spriteBackground,3,escalabackground)
		astronauta = new Elemento(100,getRndInteger(100,400),0,spriteElegido,20,escalaastro)
		
		for(let i = 0;i<numerodemet;i++){
			escalameteor = getRndInteger(1, 4)
			meteoritos[i] = new Elemento(canvasWidth,getRndInteger(50,600),getRndInteger(1,vel_max_meteo),spriteMeteorito,getRndInteger(2, 6),escalameteor);
			timespace[i+1] = timespace[i] + getRndInteger(f_aparicion_met*0.8,f_aparicion_met);
		
		}
	}
	
	//función que se refresca gracias a setInterval
	function updateGameArea(){

		gameArea.borrar();
		background.updateElement();
		astronauta.updateElement();
		updatecentro(astronauta);
		
		astronauta.coordx += movimientox
		astronauta.coordy += movimientoy
		
		if(astronauta.coordx<-20){
			movimientox = 0
			astronauta.coordx = -20;
		}
		if(astronauta.coordx>(canvasWidth-imagenbuttWidth)){
			movimientox = 0
			astronauta.coordx = canvasWidth-imagenbuttWidth
		}
		if(astronauta.coordy<-20){
			movimientoy = 0
			astronauta.coordy = -20;
		}
		if(astronauta.coordy>(canvasHeight-imagenbuttHeight)){
			movimientoy = 0
			astronauta.coordy = canvasHeight-imagenbuttHeight
		}
		
		for(let i = 0;i<meteoritos.length;i++){
			meteoritos[i].updateElement();
			updatecentro(meteoritos[i]);
		
		
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
		colisiones();
		pass_level(level)
		time_level--
		
	}
	
	function pass_level(nivel){
		if(time_level == 0){
			myMusic.stop(); // Silencio la música de fondo
			clearInterval(gameArea.interval);
			gameArea.borrar();
				if (nivel == 1){
					video2.play()
					level++;
					
				}
				if (nivel == 2){
					video3.play()
					level++;
				}
				if (nivel == 3){
					button = 1
					//Esta parte va a finalizar el juego con una pantalla en la que se muestra un botón para empezar de nuevo y un mensaje de victoria
					level = 1
					createButtonAndImage(finalbuttcoordx,finalbuttcoordy,finalbuttWidth,finalbuttHeight,gameArea.context,imagenfinal)
					document.addEventListener("click", buttonclick)
				}
				
				time_level = level_duration;
				time = 0;
		}
	}
	
	//creación de botón en una imagen:
	function createButtonAndImage(buttoncoordx,buttoncoordy,buttonWidth,buttonHeight,context,image){
		context.drawImage(image,0,0)
		context.beginPath();
		context.strokeStyle = "white";
		context.rect(buttoncoordx, buttoncoordy, buttonWidth, buttonHeight);
		context.fillStyle = "white";
		context.fill();
		//text
		context.font = "30px Arial";
		context.fillStyle = "black"
		context.fillText("REBOOT",buttoncoordx+(buttonWidth/2),buttoncoordy+(buttonHeight/2));
	}
	//creación de botón sin imagen:
	function createButton(buttoncoordx,buttoncoordy,buttonWidth,buttonHeight,context){
		context.beginPath();
		context.strokeStyle = "white";
		context.rect(buttoncoordx, buttoncoordy, buttonWidth, buttonHeight);
		context.fillStyle = "white";
		context.fill();
		//text
		context.font = "30px Arial";
		context.fillStyle = "black"
		context.fillText("SKIP",buttoncoordx+(buttonWidth/2),buttoncoordy+(buttonHeight/2));
	}
	//función que maneja los botones:
	function buttonclick(){
		
		const rect = gameArea.canvas.getBoundingClientRect()
		var x = event.clientX - rect.left;
		var y = event.clientY - rect.top;
		//si es game over
		if(button == 0){
		
			limitexizqda = gobuttcoordx
			limitexdrcha = gobuttcoordx + gobuttWidth
			limiteyabajo = gobuttcoordy
			limiteyarriba = gobuttcoordy + gobuttHeight
			
			if(x >= limitexizqda && x <= limitexdrcha){
				if(y >= limiteyabajo && y <= limiteyarriba){
					document.removeEventListener("click", buttonclick);
					init();
				}
			}
		
		}
		//si es la pantalla final
		if(button == 1){
			limitexizqda = finalbuttcoordx
			limitexdrcha = finalbuttcoordx + finalbuttWidth
			limiteyabajo = finalbuttcoordy
			limiteyarriba = finalbuttcoordy + finalbuttHeight
			
			if(x >= limitexizqda && x <= limitexdrcha){
				if(y >= limiteyabajo && y <= limiteyarriba){
					document.removeEventListener("click", buttonclick);
					init();
				}
			}
		}
		//botón skip
		if(button == 2){
			limitexizqda = skipbuttcoordx
			limitexdrcha = skipbuttcoordx + skipbuttWidth
			limiteyabajo = skipbuttcoordy
			limiteyarriba = skipbuttcoordy + skipbuttHeight
			
			if(x >= limitexizqda && x <= limitexdrcha){
				if(y >= limiteyabajo && y <= limiteyarriba){
					document.removeEventListener("click", buttonclick);
					if(video1.paused == false){
						video1.currentTime = video1.duration
						video1Sound.stop()
					}
					if(video2.paused == false){
						video2.currentTime = video2.duration
					}
					if(video3.paused == false){
						video3.currentTime = video3.duration
					}
				}
			}
		}
		//Botón personajes
		if(button == 3){
			
			//Naranja:
			limitexizqda1 = naranjabuttcoordx
			limitexdrcha1 = naranjabuttcoordx + imagenbuttWidth
			limiteyabajo1 = naranjabuttcoordy
			limiteyarriba1 = naranjabuttcoordy + imagenbuttHeight
			
			//Verde:
			limitexizqda2 = verdebuttcoordx
			limitexdrcha2 = verdebuttcoordx + imagenbuttWidth
			limiteyabajo2 = verdebuttcoordy
			limiteyarriba2 = verdebuttcoordy + imagenbuttHeight
			
			if(x >= limitexizqda1 && x <= limitexdrcha1){
				if(y >= limiteyabajo1 && y <= limiteyarriba1){
					document.removeEventListener("click", buttonclick);
					spriteElegido = spriteAstronauta;
					choosedCharacter = true;
					videocharacter.currentTime = videocharacter.duration
				}
			}
			if(x >= limitexizqda2 && x <= limitexdrcha2){
				if(y >= limiteyabajo2 && y <= limiteyarriba2){
					document.removeEventListener("click", buttonclick);
					spriteElegido = spriteAstronautaGreen;
					choosedCharacter = true;
					videocharacter.currentTime = videocharacter.duration
				}
			}
		}
	}
	
	function saltarIntro(video, context){
		if(video.currentTime >= 4){
			button = 2
			createButton(skipbuttcoordx,skipbuttcoordy,skipbuttWidth,skipbuttHeight,context)
			document.addEventListener("click", buttonclick)
		}
		
	}
	
	function game_over(){
		mySound.play(); // Activo el sonido de impacto
		myMusic.stop(); // Silencio la música de fondo
		clearInterval(gameArea.interval);
		gameArea.borrar();
		level = 1 //Reinicio niveles;
		time_level = level_duration;
		time = 0;
		
		button = 0
		createButtonAndImage(gobuttcoordx,gobuttcoordy,gobuttWidth,gobuttHeight,gameArea.context,im_go)
		document.addEventListener("click", buttonclick)
	}
	
	function colisiones() {
		for(let i=0;i<meteoritos.length;i++){
			if(	(distancia(astronauta.centroElementox,astronauta.centroElementoy,meteoritos[i].centroElementox,meteoritos[i].centroElementoy) <= 100/escalaastro)||
			(	(distancia(astronauta.centroElementox1,astronauta.centroElementoy1,meteoritos[i].centroElementox1,meteoritos[i].centroElementoy1) <= 80/escalaastro))||
			(	(distancia(astronauta.centroElementox2,astronauta.centroElementoy2,meteoritos[i].centroElementox2,meteoritos[i].centroElementoy2) <= 70/escalaastro))){
				game_over();
			}
		}
	}
	
	//función que actualiza los centros de cada elemento para el cálculo de distancias
	function updatecentro(Elementox){
		Elementox.centroElementox = Elementox.coordx+(Elementox.sprite[0].width/2)
		Elementox.centroElementoy = Elementox.coordy+(Elementox.sprite[0].height/2)
		
		Elementox.centroElementox1 = Elementox.coordx+(Elementox.sprite[0].width/2) // Centro superior
		Elementox.centroElementoy1 = Elementox.coordy+((Elementox.sprite[0].height/2)-(Elementox.sprite[0].height/3))
		
		Elementox.centroElementox2 = Elementox.coordx+(Elementox.sprite[0].width/2) //Centro inferior
		Elementox.centroElementoy2 = Elementox.coordy+((Elementox.sprite[0].height/2)+(Elementox.sprite[0].height/3))
		
	}
	
	//keyboard arrows event configuration:
	document.addEventListener("keydown", mueveAstronauta);
	document.addEventListener("keyup", paraAstronauta);
	
		//Controles del astronauta:
	function paraAstronauta(){
		movimientox = 0
		movimientoy = 0
	}
	function mueveAstronauta(){
	
	//up arrow
		if(event.keyCode == '87'){
				movimientoy = -velocidadAstronauta;
		}
	//right arrow
		if(event.keyCode == '68'){
				movimientox = velocidadAstronauta;
		}
	//left arrow
		if(event.keyCode == '65'){
				movimientox = -velocidadAstronauta;
		}
	//down arrow
		if(event.keyCode == '83'){
				movimientoy = velocidadAstronauta;
		}
	}	
	//***SONIDO***
	function sound(src) {//Función constructora de sonido
	
    	this.sound = document.createElement("audio");
		this.sound.src = src;
    	this.sound.setAttribute("preload", "auto");
    	this.sound.setAttribute("controls", "none");
    	this.sound.style.display = "none";
    	document.body.appendChild(this.sound);
			
    	this.play = function(){
        	this.sound.play();
		}
    	this.stop = function(){
        	this.sound.pause();
    	}
	}
	

	function videoplay(video, audio) {
		video.play();
		audio.play();
	} 
	
	
	
	
	//Cada vez que llamo a la funcion drawvideo es cada vez que el video dispara un evento play cuando se está reproduciendo:
	
	video1.addEventListener('play',function() {
		drawvideoIntroSkip(video1,gameArea.canvas.getContext("2d"),canvasWidth, canvasHeight);
	});
	
	video2.addEventListener('play',function() {
		drawvideoIntroSkip(video2,gameArea.canvas.getContext("2d"),canvasWidth, canvasHeight);
	});
	
	video3.addEventListener('play',function() {
		drawvideoIntroSkip(video3,gameArea.canvas.getContext("2d"),canvasWidth, canvasHeight);
	});
	
	videocharacter.addEventListener('play',function() {
		drawvideoCharacter(videocharacter,gameArea.canvas.getContext("2d"),canvasWidth, canvasHeight);
	});
	
	//Para que no se superponga el video con el juego le impongo la condición que deje de dibujarse cuando finaliza el video:
	function drawvideoIntroSkip(video, c, w, h){
		if(video.ended == false){
			c.drawImage(video,0,0, w, h);
			saltarIntro(video,c)
			setTimeout(drawvideoIntroSkip,20,video,c,w,h);
		}
	}
	function drawvideoCharacter(video, c, w, h){
		if(choosedCharacter == false){
			c.drawImage(video,0,0, w, h);
			c.drawImage(trajenaranja,naranjabuttcoordx,naranjabuttcoordy)
			c.drawImage(trajeverde,verdebuttcoordx,verdebuttcoordy)
			if(video.ended == true){
				video.currentTime = 0
				video.play()
			}
			setTimeout(drawvideoCharacter,20,video,c,w,h);
		}
	}	
	
															/****AQUÍ COMIENZA EL FLOW DEL JUEGO:****/
	//Función escuchadora que inicia el juego al pulsar la barra espaciadora:
	document.getElementById("micanvas").getContext("2d").drawImage(start_im,0,0)
	
	document.addEventListener('keypress',startgameflow)
	
	function startgameflow(){
		if(event.keyCode == '32'){
			document.getElementById("micanvas").getContext("2d").clearRect(0, 0, canvasWidth, canvasHeight)
			document.removeEventListener("keypress", startgameflow);
			videoplay(video1, video1Sound)
		}
	}
	video1.onended = function() {
				button = 3
				document.addEventListener("click", buttonclick);
				document.getElementById("micanvas").getContext("2d").clearRect(0, 0, canvasWidth, canvasHeight);
				videocharacter.play()
	}
	
	videocharacter.onended = function() {
		if(choosedCharacter == true){
			startgame(f_aparicion_met,numerodemet,vel_max_meteo);
		}
	};
	
	video2.onended = function() {
		startgame(f_aparicion_met,numerodemet,vel_max_meteo);
	};	

	video3.onended = function() {
		startgame(f_aparicion_met,numerodemet,vel_max_meteo);
	};	
	
}

