var FACET_QUANTITY = 5;
function scrollToTop() {
	verticalOffset = typeof (verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({
		scrollTop : offsetTop
	}, 500, 'linear');
}

function loadAdvertisements(){
	//publicidad
	$('#breadcrumb').before($('#banner950'));
	$('.aviso:lt(5)').last().after($('#banner728'));
}

function getFacetQuantityByFor(){
	return FACET_QUANTITY - 1;
}

function armarFacetas(index, agrupaFacetas) {
	var contenidoHtml = "";
	var QFacets = getFacetQuantityByFor();
	contenidoHtml += '<ul class="hidden-xs hidden-sm"><li><h4>' + nombresJson[agrupaFacetas.nombre] + '</h4></li>' 
		+ '<div id="' + agrupaFacetas.nombre + '">'; 

	var countRounds = 0;
	$.each(agrupaFacetas.facetas, function(index, slice) {
		if(!otherPattern.test(slice.descripcion)){
			contenidoHtml += '<li><a href="' + appContextPath() + escape(slice.url) + '">' + slice.descripcion + '</a> (' + slice.cantidad + ')</li>'
		}else{
			countRounds++;
		}
		
		if(index == QFacets+countRounds && agrupaFacetas.facetas.length > QFacets+countRounds) {
			contenidoHtml += '<li><a onclick="verMas(' + "'" + agrupaFacetas.nombre + "'" + ')" class="verMas">' + titleViewMor + '</a></li></div>'
				+ '<div id="' + agrupaFacetas.nombre + 'VerMas" style="display: none;">';
		}
	});
	contenidoHtml += '</div></ul>';
	return contenidoHtml;
}

function cargarFacetas(){
	var contenidoHtml = "";
	$.each(facetas, function(index, agrupaFacetas) {
		var facetDescription = agrupaFacetas.facetas[0].descripcion;
		var isOther = !otherPattern.test(facetDescription);
		
		if(agrupaFacetas.facetas.length > 1){
			contenidoHtml += armarFacetas(index, agrupaFacetas);		
		}else if(agrupaFacetas.facetas.length > 0 && isOther){
			contenidoHtml += armarFacetas(index, agrupaFacetas);
		}	
	});
	$("#palabraClave").after(contenidoHtml);

}
function verMas(facetaDivId) {
	// limpio el contenedor ante multiples ver mas
	$("#scrollPopUp ul").remove

	// filtro por el nombre de faceta que se va a mostrar en el popUp
	var faceta = $.grep(facetas, function (faceta, index) {
	    return faceta.nombre == facetaDivId;
	})[0];
	// ordeno la info a mostrar
	faceta.facetas.sort(function (slice1, slice2) {
	    return (reemplazarAcentuacion(slice1.descripcion) == reemplazarAcentuacion(slice2.descripcion)) ? 0 :
	    	(reemplazarAcentuacion(slice1.descripcion) < reemplazarAcentuacion(slice2.descripcion)) ? -1 : 1;		    
	});
	
	// completo la info del popUp
	$("#tituloMasOpciones").text(nombresJson[facetaDivId]);

	var ultimoSlice = null;
	var codigoHtmlColumnaIzquierda = "";
	var codigoHtmlColumnaDerecha = "";
	
	$.each(faceta.facetas, function(index, slice) {
		if (otherPattern.test(slice.descripcion)) {
			ultimoSlice = slice;
		} else {
			// me fijo cantidad de filas antes del scroll y la mitad de las slices para cargar la columna izquierda
			if (index < faceta.facetas.length / 2) {
				codigoHtmlColumnaIzquierda += '<li><a href="' + appContextPath() + slice.url + '">' + slice.descripcion + '</a> (' + slice.cantidad + ')</li>';
			} else {
				codigoHtmlColumnaDerecha += '<li><a href="' + appContextPath() + slice.url + '">' + slice.descripcion + '</a> (' + slice.cantidad + ')</li>';
			}
		}
	});
	
	// cargo ultimo slice, tengo en cuenta si debe existir columna derecha
	if(ultimoSlice != null) {
		codigoHtmlColumnaDerecha += '<li><a href="' + appContextPath() + ultimoSlice.url + '">' + ultimoSlice.descripcion + '</a> (' + ultimoSlice.cantidad + ')</li>';
	}
	
	$("div.scrollPopUp").html('<ul>' + codigoHtmlColumnaIzquierda + '</ul>');
	$("div.scrollPopUp ul").after('<ul>' + codigoHtmlColumnaDerecha + '</ul>');
	// fin completo info del popUp
	
	showModal($("#verMasOpciones"));		
}

function reemplazarAcentuacion(cadena) {
	var cadenaLowerCase = cadena.toLowerCase();
	
	var accentMap = {
			"á": "a",
			"é": "e",
			"í": "i",
			"ó": "o",
			"ú": "u"
			};
			
	var resultado = "";
	for (var i = 0; i < cadenaLowerCase.length; i++) {
		resultado += accentMap[cadenaLowerCase.charAt(i)] || cadenaLowerCase.charAt(i);
	}
	
	return resultado;
}

function eliminarFiltro(faceta) {
	var haySector = sectorPattern.test(linkNuevo);
	var hayArea = areaPattern.test(faceta)
	var link = linkFacetas;
	var linkNuevo;
	if (link.indexOf("-" + faceta) > -1) {
		linkNuevo = appContextPath() + link.replace("-" + faceta, "");
	} else {
		linkNuevo = appContextPath() + link.replace(faceta, "");
	}
	if (haySector && hayArea) {
		var coincideSectorVec = linkNuevo.match(expresionRegularSector);
		linkNuevo = linkNuevo.replace("-" + coincideSectorVec[0], "");
	}
	window.location = escape(linkNuevo.replace("/-","/"));
}

function aplicarPalabraClave() {
	var link = appContextPath() + linkFacetas;

	if ($("#palabrasClaveFiltro").val() != "") {
		var palabraClave = $.parseHTML($("#palabrasClaveFiltro").val());
		palabraClave = $(palabraClave).text();
		
		window.location = link + "-AL"
				+ escape(palabraClave.toLowerCase());
	} else {
		$("li.error").html("Debe ingresar al menos 3 caracteres");
	}
}

function postLogin() {
	postularmeWeb(postulacionDataId, false);
}
function guardarBusquedaJobAlerts() {
	var email = $("#emailBusqueda").val();
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(email)) {
		$("#jobAlertsErrorDiv").html(messageINvalidEmaill);
		return;
	}
	jQuery.post(
		appContextPath() + "/jobalerts",
		{email:email, url:window.location.pathname},
		function(data){
			$("#emailBusqueda").val('');
			showModal(data);
		}
	);
}
function doSearch(pageNumber){
	var linkPaginas = getLinkPaginate(pageNumber);
	window.location = linkPaginas;
}
function getLinkPaginate(pageNumber){
	var goLink = "";
	var originalLink = $(location).attr("href");
	var pgPosition = originalLink.indexOf("PG");
	if(pgPosition != -1){
		goLink = withPG(originalLink, pageNumber, pgPosition);
	}else{
		goLink = withoutPG(originalLink, pageNumber);
	}
	return goLink;
}

function withPG(link, pageNumber, pgPosition){
	var goLink = "";
	var underscorePosition = link.substring(pgPosition+2).indexOf("-");
	if(underscorePosition != -1){
		goLink = link.substring(0,pgPosition+2) + pageNumber + link.substring(pgPosition+2+underscorePosition,originalLink-length);
	}else{
		goLink = link.substring(0,pgPosition+2) + pageNumber;
	}
	return goLink;
}

function withoutPG(link, pageNumber){
	var goLink = "";
	if(endWith(link , "/")){
		goLink = link + "PG" + pageNumber;
	}else{
		goLink = link + "-PG" + pageNumber;
	}
	return goLink;
}


function endWith(string , suffix) {
    return string.indexOf(suffix, string.length - suffix.length) !== -1;
}
