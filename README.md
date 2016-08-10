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