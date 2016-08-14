# DesarrolloWeb
Desarrollo web online platzi

Html
	etiquetas
		atributos
Css(cascadin style sheets)
	colores fuentes tamaños
POner estilos 
	<style type="text/css">
		............
	</style>
font-family(fuente que se piensa usar)
text-aling(centrar texto)

Editor de texto
	atom
	coda 
	sublime
editores online
	codepen(importante para practicar)
<!DOCTYPE html> (indica que lo que viene es un htlm)
<html lang="en">(etiqeuta htlm atributo lag par el idio)
<head> (cabeza del docuemnto)
	<title></title> titulo que sale en la pestalla del navegador
</head>
<body>(cuerpo del docuemetno)
	<h1></h1>(tipo de titulo)
	<img src="">(para poder añadir imagenes dentro de html5 src=source origen alt=que texto va ir si la imagen no se meustra buena practica)
	<section></section>(define una seccion puede tenr varios articlle)
Todos los elemnetos dentro de html5 son cajas
</body>
</html>

<img src="" alt="hanmilton">(alt=> alternative)
<a href="" target="_blank"></a>(href a donde hace referencia dicha ancla targer=> permite abrir en otro pestalla)

<!--comentarios-->(para hacer comentarios dnetro de html)
<header></header> (cabezera d emi body casi siempre va el nav)
<figure></figure> (envuelve una imagen apra poder darle estilso)
<nav></nav>(etiqeuta de navegacion [usada para menus])
<ul></ul> (lista desornedad que no tiene nuemros)
<ol></ol> ( lsita ordenada que tiene nuemros)
<li></li>(elemento sde una lista)
<a href=""></a>(ancla nos lleva a un enlace o lugar del documento)
<h1></h1>(se ultiliza una vez por pagian html por le SEO)
h1 hasta h6
<button></button>(button si es un elemento click dentor de neusto documento si no una ancla)
<article></article> (pedazoas que tien contenido van dentro de uan section)

--duplciar le contedigo en subliem
	ctrl+shift+d
<meta charset="utf-8">(metadatos para sportar caracteres español)

Rutas
	absolutas www.facebook.com/iamgenes/lgoa.jlasdjf
	relativa de aceurdo a la carpeta que nos encontranmos
		./ en la carpeta que estamos o no se pone nada
		../ regresamos una carpeta
<img src="" width="" height="" alt=""> width ancho dela img height alto de la img alt valor por deffecto

id (no se puede repetir por pagina sirven para tener navegacion dentro de uan pagina se lo invoca con #)

Añadir estilos
	estilos en linea
		<header style="background:red"></header>
	estilso por etiqueita
		<head>
			<style type="text/css">
				body{
					background: blue;
				}
			</style>
		</head>
	de forma externa
	<head>
		<link rel="stylesheet" type="text/css" href="css/.css">(href va la referencia de donde se encuenra el archivo con los estilos)

Selectores en css
* (es el selector universal)

tipo_selector{
	propiedad: valor;
}

border: 1px solid red;  (borde de la caja)
margin: 10px;  (margen de la caja)
background (color de fondo caja)

Tipos de fuentes
	googel fonts
	www.google.com/fonts

CDN (costum deliveried network)

<head>
	<link href='https://fonts.googleapis.com/css?family=Montserrat|Allerta' rel='stylesheet' type='text/css'>
	como usar en css
	font-family: 'Montserrat', sans-serif;
</head>

	</head>
}

con | podermo cargar varias hojas de estilos en un solo request

posicionamiento
	inlineblodk
		se pone al lado
	block
		ocupa toda la fila

modleo caja
	todo en css es una caja
		contenido
		padding (margen interior antes del borde)
		border
		marign(margen posteniro despu de borde)
		top
una etiqueta peude tenr multiples clases
<div></div> etiqueta q divide pero no tien valor semantico
<footer></footer> etiqueta que se va ubicar en la parte final del body
<a href="tel:+573024456678"></a> (con :tel se peude llaamr una vez q se pulse en la ancla)
<a href="mailto:h@gmail.com"></a>(con mailto: escojemo par enviar un correo)
<form></form>(etiqueta para realizar formularios dentro del DOM)
<label for=""></label>(label es el tecto que lleva un input for incia de qeu input)
<input type="text" name="" required="">(etiquetta para poder ingresa run texto type tipo de input, required= que se reqeurido)
<input type="email" name=""> (que ingrese un email)
<input type="" name="" value=""> ( conrenido por defecto)
<input placeholder="">(para tener undescripcion que va en el texto)

<label for="nombre"></label>(for es por sis se da click va al input que tiene el id nombrey hace focus)
<input type="text" id="nombre">
<input type="radio" name="sexo"> para un seleccion multiple
(sname sirve para comunicar entre etiqeuitas en especial radio para ver que se selecciono)
<input  name="">(name es como se lo va enviar la servidor)
<input type="checkbox" name="">(para cajas de seleccion multiples)(for se comunica ocn el id del input)(name se los comunica para enviar a que se le envia)
<textarea></textarea>(para ingresar textos mas grandes)
<input type="submit" value="Enviar"> para hacer un submit del form

Flexbox
 display flex pone nos elementos uno al costado del otro
 y los elemento se redimencionan

Enlazar paginas 

index.html#guitarra (para url relativas dentro del docuemnto para otros documetnos html)
<table></table> (etiqueta pra ahcer tablas)
<thead></thead> (cabezera de la tabla)
	<tr></tr>( hacer un fila en un tabla)
	<th></th> (una cela dentro de una fil)
	<th></th> (final de cabezera)
	<td></td> (celda normal)
<tbody></tbody> (cuerpo de la tabla)

Pseudoelementos

CUanod se hacer hover se puede afectar igualemnte a los hijos con la animaicon


ememt (usaro siempre)
Emment
.portada#id[att=""] para crear clase id y attr en emmet

Parallix
<script type="text/javascript">
	var $iphone = document.getElementById('iphone');
	window.addEventListener('scroll', function(e){
		%iphone.style.marginTop = window.scrollY + 'px';
	})
</script>	

<script type="text/javascript">
	$contenido.offsetHeight// cuanto mide dicho elemento ocn javascript

Sugerrencia stack d platzi
Vistas
	React.js (vistas dinamicas)
	Superagent (Ayuda con ajax y en todos los navegadores)
	Redux (Manejo de datos)
	Python(Lenguaje de programacion)
	Django(Framework pra desarrollo web Python)
	Stylus(Dividir por componenetes con menos codigo Preprocesador de css3)
	Moment (manejo de fechas)
	Backbone(ver qeu es)
	animation: 1s nombre_animacion;
</script>

paletas de color 
coolor.co


margin

PostCss

AutoPrefixes 
	poniedno prefijos para hacer ocmpatible en el mayo nuemro de navegadores
CssNext
	usar el css del futuro hoy
css modules
	para hacer modualr css

BEM(BLOQUE-ELEMENTO-MODIFICADOR)
<section class="inviehero"> (bloque)
	<header class="InvieHero-header InvieHero-header--radio"></header>(bloque-elemento) (bloque-elemento--modificador)

Instalacion de packetes 
	npm install --save-dev gulp gulp-postcss brower-sync
Instalacin de post css como global
	npm install -g postcss
Crear ficheros de gitignore
	node_modules
</section>