---
title: "Devlog #03"
description: "Progreso!"
date: 2025-05-02
tags: dev

---
		 			 			 			 			 			 			 		 		
Nuevamente, he avanzado poco (estamos trabajando para ud, para mejorar esto). Pero vamos.

--- 

### Uso extensivo de globales y progreso

No sé si esto es un patrón ideal, pero el haber encontrado las funciones y variables globales en Godot me solucionó la vida. Ahora, con esto, estoy guardando el mapa, los niveles superados y el nivel actual. 

Gracias a esto, ahora se puede progresar en el mapa. Cada vez que se supera un nivel, este se guarda en las variables globales, lo que luego me permite habilitar solo los niveles del mapa que estén vinculados al nivel recién superado (aunque por ahora todos los niveles son el mismo).

### Ajustes al mapa 

Con lo anterior, logré hacer que el mapa se actualice, de manera que los niveles ya superados se van marcando en verde. Además, hice algunos arreglos para que no se puedan seleccionar niveles que no estén habilitados, además de arreglar los *hover* de los botones y la opacidad de los menús.

--- 

Y ya está.

...

No estoy orgulloso de lo poco que avancé este mes, así que me "forzaré" a escribir estos devlog cada 2 semanas en vez de cada un mes. Vamos que se puede :)