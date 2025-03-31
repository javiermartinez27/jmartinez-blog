---
title: "Devlog #02"
description: "Creando y juntando cosas."
date: 2025-03-30
tags: dev

---
		 			 			 			 			 			 			 		 		
Algo he avanzado este mes. No estoy tan satisfecho porque siento que he hecho poco, pero al menos lo que he hecho ha sido interesante.

### Generador de mapas

Mi intención, desde un comienzo, era copiar el mapa de Slay the Spire, y eso fue lo que hice. En algún momento me puse demasiado creativo y quise hacer un mapa estático encima de este, pero aquí fue donde tuve que mantener mis expectativas realistas, y creo que fue una decisión inteligente (por algo de lo que hablaré abajo).

Entonces, el mapa quedó así:

{% image "./map.png", "Notar que está dentro de un contenedor scrolleable, por lo que el mapa sigue hacia la derecha", [1000] %}

Me gusta el algoritmo que hice para generarlo (principalmente solo porque lo hice yo y no a punta de vibe coding). Consiste en, básicamente, generar la primera fila con, al menos, 1 nivel obligatorio, y a partir de ahí ir generando las siguientes filas, cuidando que todas las filas anteriores tengan al menos un nivel conectado a la fila que se está creando. Luego de eso, fue crear un par de sprites, dibujar líneas y añadir efectos de hover.

### Juntando todo

Lo anterior, y el sistema de diálogos que mencioné en el [devlog pasado](/blog/game-dev/m3-devlog-01), estaban totalmente desconectados a la escena en que realmente está el juego. Por esto, ahora los junté: hay una escena inicial, con un poco de diálogo y los personajes, al terminar lleva al menú principal que tiene un botón para comenzar a jugar. Este botón lleva al mapa, en el cual puedes elegir uno de los niveles principales que abren un menú y llevan a la escena principal de juego.

### Script global e info persistente

Descubrí que Godot tiene una forma súper conveniente para lidiar con funciones globales. Básicamente, escribes un script con funciones, y añades este script a las configuraciones del proyecto. Con esto, pude hacer una función global que guarda en un archivo de guardado la matriz que representa el mapa, y otra que la carga.

Así puedo hacer que el mapa sea persistente entre sesiones de juego, lo que me permitirá no regenerar el mapa cada vez que se entre al juego (a menos que lo requiera), y lo mismo también entre niveles. 

Esta facilidad para tener funciones globales me hizo amar aún más a Godot.

### Next

Ahora, tengo que trabajar en las condiciones de victoria. Por ahora solo estoy reconociendo cuando se cumplen ciertos objetivos, pero tengo que, uno, aumentar la variedad de estos objetivos y, segundo, abrir alguna especie de menú que me permita ir de vuelta al mapa. Con esto podré trabajar en ir progresando en el mapa a medida de que se van superando niveles.

 ---

En temas que no van en ninguna de estas secciones, debo mencionar que me está costando un poco la motivación este mes. Cada vez que avanzo me motivo un poco más y avanzo aún más, pero ese empujón inicial no siempre llega.
Pero no me crucifico por eso. Vamos con calma :)
