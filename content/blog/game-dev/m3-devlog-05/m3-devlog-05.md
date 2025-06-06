---
title: "Devlog #05"
description: "Niveles y bugs."
date: 2025-06-06
tags: dev

---
		 			 			 			 			 			 			 		 		
Estas semanas han sido de tomar decisiones, diseñar tomando en cuenta estas decisiones... y arreglar bugs.

--- 

### Decisiones

Decidí qué va a pasar cada vez que se cambia el color de fondo del juego. Por ahora hay 4 colores, que harán lo siguiente:
- Celeste: los niveles serán con *timer* y los objetivos serán X cantidad de piezas. 
- Amarillo: los niveles serán por turnos y los objetivos serán X cantidad de piezas.
- Naranjo: los niveles serán con *timer* y los objetivos serán X cantidad de obstáculos. 
- Rojo: los niveles serán por turnos y los objetivos serán X cantidad de obstáculos. 

Además, decidí por qué cambiaré cada "cuarto" que, antes, iban a ser peleas contra enemigos y/o jefes. Tendremos los siguientes tipos de niveles:
- Normales: lo descrito anteriormente.
- Niveles "grandes": cuartos sin obstáculos ni enemigos, pero que servirán para acumular puntos.
- Niveles "mutación": luego de superar estos niveles, el color de fondo cambiará, cambiando los cuartos normales y el jefe.
- Cuarto de objetos: aquí hay que bajar unas especies de orbes. Dependiendo de cuántos se hayan bajado, se podrán obtener potenciadores para ayudarnos en nuestra *run*.
- Nivel "final": estos serán niveles normales concatenados. Según el momento en que se esté de la *run*, se irán concatenando más niveles.

Lo más imporante de aquí, es que tengo casi todo lo necesario implementado. Implementé ya una función global para cambiar el color de fondo, con lo que podré siempre identificar qué objetivos y turnos/*timer* usar. Lo único que falta de todo esto, son los potenciadores, que supongo que implementaré pronto.

### Niveles

Dicho lo anterior, diseñé unos cuantos niveles que funcionarán como los niveles "normales", además de algunos niveles de objetos. Pensé que en un comienzo serían suficientes, pero tengo muy claro de que tendré que implementar unos cuantos más.

### Bugs 

Restauré también el progreso por niveles, que había deshabilitado en un momento porque tenía un bug molesto en que, si me salía del nivel, al volver ese nivel me contaba como superado. Bueno, arreglé esto haciendo que no se supere... pero me hizo darme cuenta de que, probablemente, también tenga que implementar un sistema de "vidas" para evitar que se abuse de esto, haciendo que se pierda una vida cuando se salga del nivel de manera forzada.

--- 

Estas semanas fueron de poco código pero, leyendo esta nota mientras la escribo, me di cuenta de que igual avancé su resto :)