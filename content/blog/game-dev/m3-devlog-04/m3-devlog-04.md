---
title: "Devlog #04"
description: "Progreso... más rápido!"
date: 2025-05-18
tags: dev

---
		 			 			 			 			 			 			 		 		
He tomado *medidas* para avanzar un poco más rápido, y la verdad es que ha funcionado. En dos semana avancé más de lo que avancé el mes anterior:

--- 

### Manejo de notch en iOS y tamaño de ventana de juego

Una de las coas que más me estaba perturbando mientras avanzaba era que, cuando hacía el build para iOS, el *notch* me cubría una parte de la UI. Bueno, finalmente lo estoy manejando. No fue tan trivial pues, por la forma en que estaba hecho el tutorial con el que hice la lógica del juego, tuve que reestructurar gran parte de la estructura de nodos, además de meter un par de ajustes en el cálculo de dónde se está haciendo click/touch para hacer el movimiento en la grilla de juego. 

Además, haciendo un 2x1, con esto modifiqué el cómo estoy manejando el tamaño de la ventana. Antes tenía un tamaño de pantalla fijo, lo que hacía que en mi celu apareciera una barra negra bastante grande en la parte inferior. Ahora, el posicionamiento de los elementos se ajusta a la pantalla, por lo que todo se ve donde tiene que estar.

### Cambio de estilo artístico

Dejé de estar **tan** motivado con el desarrollo del juego. Pero en lugar de echarme a morir y forzarme a seguir, acepté que este es mi primer juego y que, quizás, no iba a a lograr todo lo que en un principio tuve en mente. No obstante, mi cabeza no me dejará jamás dejar el proyecto tirado ni hacer algo a medias. Quiero hacer un juego completo, aunque fuese más simple que la idea original.

Por esto, decidí hacer un cambio total del estilo artístico. Ya no habrán personajes ni escenarios, y me decantaré por algo mucho más minimalista, tanto en estilo visual como mecánicas. Con esto espero no tener que aprender a dibujar en *pixel art*, y solo tendré que usar mis conocmientos de Figma y Photoshop. 

Y he avanzado bastante con esto:

{% image "./new-game-window.png", "Obviamente esto está sujeto a cambios.", [1000] %}

--- 

He avanzado mucho más que el mes anterior, y eso me tiene mucho más satisfecho. Espero seguir así, y que el plan que estoy siguiendo siga su curso.