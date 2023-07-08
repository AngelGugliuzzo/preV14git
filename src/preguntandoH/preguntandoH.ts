import { dibujarPreguntasRespuestasLista } from '../preguntandoLista/preguntandolista';
import { PreguntasRespuestas } from './databaseH';
import { Eleccion} from '../preguntandoLista/databaseLista'

//import{ Eleccion } from '../preguntandoLista/databaseLista';

const db = PreguntasRespuestas;
let ContadorPregunta = 0;
let puntos = 0;

export function dibujarPreguntasRespuestasH(elemento:  HTMLDivElement){//primer llave 
	
	if (ContadorPregunta<db.length){  //segunda llave 

			elemento.innerHTML = `<h1>${db[ContadorPregunta].pregunta}</h1>`;

			const ol = document.createElement('ol');

			db[ContadorPregunta].respuestas.forEach((r:any) => {   //tercer  llave y parentesis

			const li = document.createElement('li');
			const btn = document.createElement('button');
			btn.value = String(r.correcta);
			btn.textContent = r.respuesta;  // cargamos  un boton, aca cargamos una lista
			

			btn.addEventListener('click', () => {  //cuarta llave y  parentesis
				if (r.correcta) {
									 ++puntos;
				//					puntos += 1;
							}
							
	     	dibujarPreguntasRespuestasH(elemento);}) //cuarta llave y parentesis, llamada recursiva
                            
			li.appendChild(btn);
			ol.appendChild(li);
	                                                });//tercera llave parentesis

			elemento.appendChild(ol);

			++ContadorPregunta;                  }//segunda llave

	else {elemento.innerHTML = `<h1>COMPLETADO!!! 🎆 🔥  </h1> <h3>puntos: ${puntos} / ${db.length}  </h3>`;

    //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
	     const btn = document.createElement('button');
		 btn.innerHTML="Retornar al Principio";
		 elemento.appendChild(btn);  
	      btn.addEventListener('click', (event) => { event.preventDefault();

			const db = Eleccion;
			let ContadorPregunta = 0;

			if (ContadorPregunta<db.length){  //segunda llave 

				elemento.innerHTML = `<h1>${db[ContadorPregunta].pregunta}</h1>`;
	
				const ol = document.createElement('ol');
	
				db[ContadorPregunta].respuestas.forEach((r:any) => {   //tercer  llave y parentesis
	
				const li = document.createElement('li');
				const btn = document.createElement('button');
				btn.value = String(r.correcta);
				btn.textContent = r.respuesta;  // cargamos  un boton, aca cargamos una lista
				
	
				btn.addEventListener('click', () => {  //cuarta llave y  parentesis
					if (r.correcta) {
										 ++puntos;
					//					puntos += 1;
								}
								
				 dibujarPreguntasRespuestasLista(elemento);}) //cuarta llave y parentesis, llamada recursiva
								
				li.appendChild(btn);
				ol.appendChild(li);
														});//tercera llave parentesis
	
				elemento.appendChild(ol);
	
				++ContadorPregunta;                  }//segunda llave
				location.reload();
			                                } )}}//llave del ultimo else




			                                        // dibujarPreguntasRespuestasLista(elemento)})

// solo en la utima lista
		      																				
  //       } //llave del ultimo else

		 //const btn = document.createElement('button');
		 // btn.innerHTML="Retornar al Principio";
		 // elemento.appendChild(btn);  
	     // btn.addEventListener('click', (event) => { event.preventDefault();
			                                        // dibujarPreguntasRespuestasLista(elemento)})

		//aca esta en todas las paginas, porque esta fuera del else										

  //                                                           } //primera  llave
 

// ¡¡¡¡¡¡¡¡¡¡¡¡el boton para volver al comienzo no anda!!!!!!!!!!!!


//let cont:number=0;
//const btn = document.createElement('button');
//btn.innerHTML="Retornar al Principio";
//elemento.appendChild(btn);  
//btn.addEventListener('click', (event) => { event.preventDefault();
//            const db=Eleccion;
//            while (cont<3){
//			        elemento.innerHTML = `<h1>${db[cont].pregunta}</h1>`;
//                    dibujarPreguntasRespuestasLista(elemento);
//                    ++cont;}