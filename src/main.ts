import { dibujarPreguntasRespuestasLista } from './preguntandoLista/preguntandolista';

import './style.css';

const divApp = document.querySelector<HTMLDivElement>('#app')!;
//const elemento=divApp
dibujarPreguntasRespuestasLista(divApp);

//const btn = document.createElement('button');
//		  btn.innerHTML="Retornar al Principio";
//		  elemento.appendChild(btn);  
//	      btn.addEventListener('click', (event) => { event.preventDefault();
//			                                         dibujarPreguntasRespuestasLista(elemento)});

//aca, el boton sale justo debajo de la lista, pero no dibuja otra lista
