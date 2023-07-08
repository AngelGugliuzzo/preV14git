import { PreguntasRespuestas } from './database';
import { dibujarPreguntasRespuestasLista } from '../preguntandoLista/preguntandolista';
import { Eleccion} from '../preguntandoLista/databaseLista'

let ContadorPregunta = 0;
let puntos = 0;
const db = PreguntasRespuestas;

export function dibujarPreguntasRespuestas(elemento: HTMLDivElement) {
	if (ContadorPregunta < db.length) { // aca era db.length -1
		elemento.innerHTML = `<h1>${db[ContadorPregunta].pregunta}</h1>`;

		const ul = document.createElement('ul');

		db[ContadorPregunta].respuestas.forEach((r:any) => {
			const li = document.createElement('li');
			const btn = document.createElement('button');
			btn.value = String(r.correcta);
			btn.classList.add('botonclick');
			btn.textContent = r.respuesta;
			btn.addEventListener('click', () => {
				console.log(r.correcta);
				if (r.correcta) {
					// ++puntos;
					puntos += 1;
				}
				dibujarPreguntasRespuestas(elemento);
			});
			li.appendChild(btn);
			ul.appendChild(li);
		});

		elemento.appendChild(ul);

		++ContadorPregunta;
	} else {
		elemento.innerHTML = `<h1>COMPLETADO!!! 🎆 🔥  </h1> <h3>puntos: ${puntos} / ${db.length}  </h3>`;

//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°|
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
	
