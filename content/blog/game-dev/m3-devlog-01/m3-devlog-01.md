---
title: "Devlog #01"
description: "Armando la base del proyecto."
date: 2025-03-01
tags: dev

---

Finalmente, me llegó el ánimo de hablar de mi pequeño proyecto. En esta nota quiero hablar de 3 cosas principalmente: qué estoy haciendo, qué me motiva a estar haciéndolo, y cómo lo estoy haciendo. 

### ¿Qué estoy haciendo? 

Como dije en alguna nota pasada, el juego es un híbrido entre un *match-3*, un RPG muy *lite*, y un *roguelite*. Mi mayor referencia es *Pokémon Shuffle*, junto con un poco de *Slay the Spire*. 

La ambientación aún no está tan definida. Inicialmente se iba a ambientar en una prisión de la que ibas a tener que escapar, pero eso demasiado parecido a demasiados *roguelites* (*Dead Cells*, *Hades*, hasta *The Binding of Isaac* de cierta manera), así que decidí cambiarla. Como últimamente he estado jugando mucho a *Caves of Qud*, me estoy decantando por algo post-apocalíptico, aunque no descarto que vuelva a cambiar. 

Hay muchas cosas que aún estar por definir; mi GDD aún está mutando bastante, pero una vez que vaya definiendo cosas que sí o sí terminarán en el juego, iré dejando más Devlogs. 

### ¿Qué me motiva? 

Siempre había querido desarrollar un juego. Desde que decidí estudiar lo que estudié, siempre supe que tendría que terminar desarrollando un juego. Una de mis metas de vida, de hecho, es publicar un juego en Steam. No obstante, no me voy a volver loco con el primer proyecto que realmente estoy llevando a cabo; quizá este no sea el que quede publicado en Steam, o quizá ni siquiera termine de hacer lo que quiero hacer, y si eso pasa, está bien.

Así que, en verdad, mi mayor objetivo es aprender. Aprender cómo funciona realmente un motor gráfico, aprender a hacer *builds* a celular, manejar márgenes dependiendo de cada pantalla, hacer el arte que necesite, etc. Mi meta es tener la misma base como desarrollador de juegos que tengo como desarrollador web. 

Otro objetivo, algo menor, es que realmente no he encontrado algo que se parezca a *Pokémon Shuffle*, así que quiero meter algo en ese espacio. Sí, ese juego aún existe, pero después de haber llegado al nivel 800 hace un par de años, pocas ganas tengo de volver a jugar los primeros niveles.  

### ¿Cómo lo estoy haciendo? 

Vamos al grueso del asunto. 

Primero que nada, tuve que encontrar una base. Traté de encontrar si había algún proyecto *open source* del que colgarme, pero evidentemente no había nada (o al menos no en Godot, y estaba compleamente convencido de usar Godot). Así que, tuve que crearme yo solito la base. Pero no sabía nada, así que tomé un [tutorial en Yutú](https://www.youtube.com/watch?v=hji8-9kHuIE&list=PL4vbr3u7UKWqwQlvwvgNcgDL1p_3hcNn2&index=47).

La verdad están bien buenos los videos. Son cortitos, lo que me permitió ir a mi ritmo, y hacer 2 o 3 videos cada vez que me sentaba a desarrollar. Lo que sí, no usé ningún asset que pasaba, si no que fui, poquito a poquito, creando mis propios. Pensé que así soltaría la mano con el arte también, aunque finalmente no creo que me haya servido de mucho. Para lo que sí me sirvió, eso sí, fue para entender proporciones y dimensiones.

Mi plan era escribir esta nota después de terminar de ver los 70 videos, y decretar eso como mi versión 0.1 del juego. Pero cuando estaba llegando al video n°50, me empecé a dar cuenta de que el resto de cosas que estaba desarrollando no me iban a servir de mucho, además de que, como el tutorial estaba en Godot 3, estaba perdiendo demasiado tiempo buscando atributos y opciones que en Godot 4 se llamaban de otra forma y/o estaban en otra parte, así que lo dejé y ahora ya estoy desarrollando cosas por mi cuenta. De todas formas el tutorial sirvió para familiarizarme con Godot y cómo hacer ciertas cosas que no se me ocurrían cómo hacer.

### ¿Cómo voy?

Me di un plazo de un año para terminarlo, y supongo que voy bien en ese plazo (?). Ya tengo el sistema completo que encuentra los *match*, rompe las piezas y vuelve a llenar el tablero. Tengo bombas especiales cuando se hacen *match* de 4 y 5 piezas, y ya se activan cada una con su efecto correspondiente.

Tengo una condición para perder, y está al 90% la condición para ganar (existen objetivos y ya identifico cuándo cada objetivo se cumple). También tengo un sistema de menús y un sistema de diálogos al 50%. 

Lo último que he estado haciendo es diseñar un par de personajes, y elegir bien la paleta de colores del juego, que cambió de ser en blanco y negro (salvo las piezas con las que se juega) a algo completamente a color. Ayer solté la mano con el dibujo y llegué a algo que me gusta, lo que me motivó bastante, porque significa que el arte no será un obstáculo tan enorme. 

{% image "./baldievintest.png", "No se ve muy bien acá porque tengo demasiado comprimidas las imágenes.", [1000] %}

Ahora me dedicaré un tiempo a refactorizar código del tutorial que no me gusta como está (tengo un solo archivo que se encarga de toda la lógica, y eso no me gusta porque cuesta un montón encontrar cosas específicas), y empezaré a definir la estructura del juego: cómo empieza, cómo te vas moviendo entre niveles, etc.

Lo importante es que estoy motivado, y me siento contento por estar avanzando en un proyecto que siempre quise hacer.