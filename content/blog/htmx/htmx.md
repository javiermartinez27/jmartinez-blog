---
title: HTMX + Django
description: El mejor stack del mundo
date: 2024-04-10
tags: dev
draft: true
---
Escribo este artículo para documentar mi maravillosa experiencia con HTMX y Django. No tengo tanto *background* como para compararlo más allá de agregar React y/o Javascript Vanilla (o JQuery), pero usar esta pequeña librería (y el robusto Django) le gana, por lejos, en *developer experience* (DX) a estos dos, y sin perder tanta experiencia de usuario en el camino.

Hay 3 funciones pequeñas que quiero comentar que implementamos en Trego:

La primera es la paginación. Nunca hice paginación en React y no quise ni intentarlo con JS, pero viendo [esto](https://stackoverflow.com/questions/25434813/simple-pagination-in-javascript) y [esto](https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/) ya quiero llorar.

Ok, no, pero se me imagina un poco cómo habría que hacerla. Dos opciones; que el servidor se encargue de la paginación, haciendo un `fetch` cada vez que se quiera cambiar de página, y lo otro sería guardar todos los datos *client side*, y reemplazar los datos de la página mediante Javascript.

La segunda opción es terrible si es que hay muchos datos (o si son muy pesados), pero no es mala si los datos son simples. En ese caso, si se está usando Javascript, quizá sería mejor ver una librería tipo [DataTables](https://datatables.net/) para hacerlo más fácil y agradable de programar (porque creo que programar en Javascript no es agradable).

La primera opción es justamente lo que HTMX hace, pero lo hace de manera limpia y agradable. En JS/React, tendrías que hacer tú mismo el fetch, capturar el JSON (o HTML) que retorne el servidor, buscar el elemento que se tiene que reemplazar y reemplzarlo. En el intertanto, manejar las promesas y llamadas asíncronas que singifica hacer la petición al servidor.

Con HTMX + Django, basta ver si es que la vista está paginada (lo que se puede hacer fácilmente con un ListView), y si es que es así, agregar los botones de paginación

```html
{* if is_paginated *}
	{* if page_obj.has_previous *}
		<a
			hx-get="{* url 'marketplace:search' *}"
			hx-vals='{"page": "{{ page_obj.previous_page_number }}" {* if query *}, "q": "{{ query }}" {* endif *} {* if category *}, "category": "{{ category.id }}" {* endif *} }'
			hx-swap="innerHTML" hx-target="#products-grid-container"
			hx-push-url="true"
			href="{* url 'marketplace:search' *}?page={{ page_obj.previous_page_number }}&q={{ query }}&category={{category.id}}"
		>
			Anterior
		</a>
	{* endif *}
	{* if page_obj.has_next *}
		<a
			hx-get="{* url 'marketplace:search' *}"
			hx-vals='{"page": "{{ page_obj.next_page_number }}" {* if query *}, "q": "{{ query }}" {* endif *} {* if category *}, "category": "{{ category.id }}" {* endif *} }'
			hx-swap="innerHTML"
			hx-target="#products-grid-container"
			hx-push-url="true"
			href="{* url 'marketplace:search' *}?page={{ page_obj.next_page_number }}&q={{ query }}&category={{category.id}}"
		>
			Siguiente
		</a>
	{* endif *}
{* endif *}

```
(Reemplzar los asteríscos por "%")

