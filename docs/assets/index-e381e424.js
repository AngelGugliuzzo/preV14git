(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const m=[{pregunta:"BIENVENIDO A PREGUNTANDO",respuestas:[{respuesta:" TEMAS DE MATEMATICA  ",correcta:0},{respuesta:" TEMAS DE PROGRAMACION",correcta:1},{respuesta:" TEMAS DE HISTORIA    ",correcta:2}]}],$=[{pregunta:"¿cuanto es 7x8",respuestas:[{respuesta:"32",correcta:!1},{respuesta:"25",correcta:!1},{respuesta:"56",correcta:!0},{respuesta:"72",correcta:!1}]},{pregunta:"¿cuanto es 5x5?",respuestas:[{respuesta:"33",correcta:!1},{respuesta:"41",correcta:!1},{respuesta:"25",correcta:!0},{respuesta:"41",correcta:!1}]},{pregunta:"¿cuanto es 2x3?",respuestas:[{respuesta:"7",correcta:!1},{respuesta:"6",correcta:!0},{respuesta:"41",correcta:!1},{respuesta:"22",correcta:!1}]},{pregunta:"¿cuanto es 5x4?",respuestas:[{respuesta:"7",correcta:!1},{respuesta:"17",correcta:!1},{respuesta:"41",correcta:!1},{respuesta:"20",correcta:!0}]},{pregunta:"¿cuanto es 9x9?",respuestas:[{respuesta:"7",correcta:!1},{respuesta:"81",correcta:!0},{respuesta:"41",correcta:!1},{respuesta:"20",correcta:!1}]}],l=$;let i=0,C=0;function P(t){if(i<l.length){t.innerHTML=`<h1>${l[i].pregunta}</h1>`;const r=document.createElement("ul");l[i].respuestas.forEach(a=>{const s=document.createElement("li"),e=document.createElement("button");e.value=String(a.correcta),e.textContent=a.respuesta,e.addEventListener("click",()=>{a.correcta&&(++C,console.log(a.correcta)),P(t)}),s.appendChild(e),r.appendChild(s)}),t.appendChild(r),++i}else{t.innerHTML=`<h1>COMPLETADO!!! 🎆 🔥  </h1> <h3>puntos: ${C} / ${l.length}  </h3>`;const r=document.createElement("button");r.innerHTML="Retornar al Principio",t.appendChild(r),r.addEventListener("click",a=>{a.preventDefault();const s=m;let e=0;if(e<s.length){t.innerHTML=`<h1>${s[e].pregunta}</h1>`;const n=document.createElement("ol");s[e].respuestas.forEach(c=>{const u=document.createElement("li"),o=document.createElement("button");o.value=String(c.correcta),o.textContent=c.respuesta,o.addEventListener("click",()=>{c.correcta&&++C,p(t)}),u.appendChild(o),n.appendChild(u)}),t.appendChild(n),++e}location.reload()})}}const x=[{pregunta:"¿En que año Colon descubrio America?",respuestas:[{respuesta:"1910",correcta:!1},{respuesta:"475",correcta:!1},{respuesta:"1492",correcta:!0},{respuesta:"1810",correcta:!1}]},{pregunta:"¿En que año llego el hombre a la luna?",respuestas:[{respuesta:"1970",correcta:!1},{respuesta:"1955",correcta:!1},{respuesta:"2010",correcta:!1},{respuesta:"1969",correcta:!0}]},{pregunta:"¿Quien fue Neron?",respuestas:[{respuesta:"Presidente de Uganda",correcta:!1},{respuesta:"Emperador romano",correcta:!0},{respuesta:"Gerente de Ford",correcta:!1},{respuesta:"Navegante español",correcta:!1}]},{pregunta:"¿En que año se declaro la independencia Argentina?",respuestas:[{respuesta:"1915",correcta:!1},{respuesta:"1792",correcta:!1},{respuesta:"1945",correcta:!1},{respuesta:"1816",correcta:!0}]},{pregunta:"¿En que año fue la revolucion francesa?",respuestas:[{respuesta:"2015",correcta:!1},{respuesta:"1792",correcta:!0},{respuesta:"1596",correcta:!1},{respuesta:"1916",correcta:!1}]}],d=x;let f=0,b=0;function M(t){if(f<d.length){t.innerHTML=`<h1>${d[f].pregunta}</h1>`;const r=document.createElement("ol");d[f].respuestas.forEach(a=>{const s=document.createElement("li"),e=document.createElement("button");e.value=String(a.correcta),e.textContent=a.respuesta,e.addEventListener("click",()=>{a.correcta&&++b,M(t)}),s.appendChild(e),r.appendChild(s)}),t.appendChild(r),++f}else{t.innerHTML=`<h1>COMPLETADO!!! 🎆 🔥  </h1> <h3>puntos: ${b} / ${d.length}  </h3>`;const r=document.createElement("button");r.innerHTML="Retornar al Principio",t.appendChild(r),r.addEventListener("click",a=>{a.preventDefault();const s=m;let e=0;if(e<s.length){t.innerHTML=`<h1>${s[e].pregunta}</h1>`;const n=document.createElement("ol");s[e].respuestas.forEach(c=>{const u=document.createElement("li"),o=document.createElement("button");o.value=String(c.correcta),o.textContent=c.respuesta,o.addEventListener("click",()=>{c.correcta&&++b,p(t)}),u.appendChild(o),n.appendChild(u)}),t.appendChild(n),++e}location.reload()})}}const A=[{pregunta:"¿Cuál de las siguientes opciones es un método utilizado para agregar un elemento al final de un array en JavaScript?",respuestas:[{respuesta:"push()",correcta:!0},{respuesta:"pop()",correcta:!1},{respuesta:"shift()",correcta:!1},{respuesta:"unshift()",correcta:!1}]},{pregunta:"¿Cuál de las siguientes opciones se utiliza para detener la ejecución de un bucle en JavaScript?",respuestas:[{respuesta:"continue",correcta:!1},{respuesta:"break",correcta:!0},{respuesta:"return",correcta:!1},{respuesta:"exit",correcta:!1}]},{pregunta:"¿Cuál de las siguientes opciones se utiliza para comprobar si una variable es de tipo número en JavaScript?",respuestas:[{respuesta:"isNumber()",correcta:!1},{respuesta:"isNaN()",correcta:!1},{respuesta:"parseInt()",correcta:!1},{respuesta:"typeof",correcta:!0}]},{pregunta:"¿Cuál de las siguientes opciones se utiliza para convertir una cadena en minúsculas en JavaScript?",respuestas:[{respuesta:"substring()",correcta:!1},{respuesta:"trim()",correcta:!1},{respuesta:"toLowerCase()",correcta:!1},{respuesta:"toUpperCase()",correcta:!1}]},{pregunta:"¿Cuál de las siguientes opciones se utiliza para obtener el número máximo de un conjunto de valores en JavaScript?",respuestas:[{respuesta:"max()",correcta:!1},{respuesta:"Math.max()",correcta:!0},{respuesta:"maximum()",correcta:!1},{respuesta:"Math.maximum()",correcta:!1}]}];let h=0,L=0;const g=A;function T(t){if(h<g.length){t.innerHTML=`<h1>${g[h].pregunta}</h1>`;const r=document.createElement("ul");g[h].respuestas.forEach(a=>{const s=document.createElement("li"),e=document.createElement("button");e.value=String(a.correcta),e.classList.add("botonclick"),e.textContent=a.respuesta,e.addEventListener("click",()=>{console.log(a.correcta),a.correcta&&(L+=1),T(t)}),s.appendChild(e),r.appendChild(s)}),t.appendChild(r),++h}else{t.innerHTML=`<h1>COMPLETADO!!! 🎆 🔥  </h1> <h3>puntos: ${L} / ${g.length}  </h3>`;const r=document.createElement("button");r.innerHTML="Retornar al Principio",t.appendChild(r),r.addEventListener("click",a=>{a.preventDefault();const s=m;let e=0;if(e<s.length){t.innerHTML=`<h1>${s[e].pregunta}</h1>`;const n=document.createElement("ol");s[e].respuestas.forEach(c=>{const u=document.createElement("li"),o=document.createElement("button");o.value=String(c.correcta),o.textContent=c.respuesta,o.addEventListener("click",()=>{c.correcta&&++L,p(t)}),u.appendChild(o),n.appendChild(u)}),t.appendChild(n),++e}location.reload()})}}const v=m;let E=0;function p(t){if(E<v.length){t.innerHTML=`<h1>${v[E].pregunta}</h1>`;const r=document.createElement("ol");v[E].respuestas.forEach(a=>{const s=document.createElement("li"),e=document.createElement("button");e.value=String(a.correcta),e.textContent=a.respuesta,e.addEventListener("click",()=>{a.correcta===0?P(t):a.correcta===1?T(t):M(t),p(t)}),s.appendChild(e),r.appendChild(s)}),t.appendChild(r),++E}}const S=document.querySelector("#app");p(S);