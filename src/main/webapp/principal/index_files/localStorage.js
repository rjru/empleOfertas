	/**
	 * Guarda el objeto Json en localStorage.
	 */
	function guardarEnLocalStorage() {
		var json = crearJson();
		contadorLocalStorage(json);
	}

	/**
	 * Crea el objeto Json de aviso o busqueda.
	 */
	function crearJson() {
		var urlSector = document.URL;
		// Guarda datos solo si viene de busquedas o avisos
	   	var titleSector = document.title;
	   	var date = new Date();
	   	var tipoItem = null;
	   	var id = null;
		
	   	// PARA BUSQUEDAS
	   	if (urlSector.indexOf("avisos/") != -1 ) {
	   		tipoItem = "busqueda";
	   		titleSector = cleanTitle(titleSector);
	   	}
	   	// PARA AVISOS
	   	if (urlSector.indexOf("aviso/") != -1) {
	   		tipoItem = "aviso";
	   		titleSector = $('#title').text();
	   		var splitedUrl = urlSector.split("\/");	   		
	   		id = splitedUrl.length > 0 ? splitedUrl[splitedUrl.length - 1].split("-")[0] : null;
	   	}
	   	// Objeto JSON
		var json = {fecha: date, titulo: titleSector, url: encodeURI(urlSector), tipoItem: tipoItem, id:id};
		return json;
	}

	/**
	 * Intenta guardar el Json dentro de localStorage si no  esta repetido.
	 * Lleva la logica de cantidad insertados y cual reemplazar en caso de alcanzar el topo de 5 elementos.
	 * @param json
	 */
	function contadorLocalStorage(json) {
	    var contador = parseInt($.jStorage.get("contador"));
	   	// Si no esta definido el contador lo inicializa.
	    if (contador == "undefine" || isNaN(contador)) {
	    	contador = 0;
	    }
	    if (!containsElement(json)) {
	    	if (contador == 5) {
	    		contador = 0;
	    	}
	    	var accion = "accionEmp" + contador;
	    	eliminarAcccionRepetida(accion);
	    	$.jStorage.set(accion, JSON.stringify(json));
			$.jStorage.set("contador", ++contador);
	    }
	}

	/**
	 * Devuelve si el elemento recibido por parametro esta contenido dentro del LocalStorage.
	 * @param elemento
	 * @returns {Boolean}
	 */
	function containsElement(elemento) {
		var i;
		var elementos = getFromLocalStorage();
		// le saco el # porque viene con este caracter cuando se refresca y se repiten los elementos.
		var url = cleanUrl(elemento.url);
		for (i = 0; i < elementos.length; i++) {
			var urlAux = cleanUrl(elementos[i].url);
			if (url == urlAux) {
				return true;
			}
		}
		return false;
	}

	/**
	 * El caracter '#' es eliminado si la url tiene como fin tal caracter.
	 * @param url
	 * @returns
	 */
	function cleanUrl(url) {
		if (url == null || url == "") {
			return "";
		}
		if (endWith(url, '#')) {
			url = url.substring(0, url.lastIndexOf("#"));
		}
		return url;
	}

	/**
	 * Dado un string retorna devuelve si termina con el caracter recibido por parametro. 
	 * @param str
	 * @param suffix
	 * @returns {Boolean}
	 */
	function endWith(str, suffix) {
		if (str.indexOf(suffix) !== -1) {
			return (str.lastIndexOf(suffix) - str.length) === -1;
		}
		return false;
    }

	/**
	 * Devuelve todos los elementos almacenados en LocalStorage.
	 * @returns {Array}
	 */
	function getFromLocalStorage() {
		var elementos = new Array();
		var i;
		var j = 0;
		for (i = 0; i < $.jStorage.index().length; i++) {
			
			var index = $.jStorage.index();
			
			var aux = $.jStorage.get(index[i]);
			var elemento = jQuery.parseJSON(aux);
			if (elemento.tipoItem == "aviso" || elemento.tipoItem == "busqueda") {
				elementos[j++] = elemento;
				
			}
		}
		return elementos;
	}

	function getAvisoFromLocalStorage() {
		var elementos = new Array();
		var i;
		var j = 0;
		for (i = 0; i < $.jStorage.index().length; i++) {
			
			var index = $.jStorage.index();
			
			var aux = $.jStorage.get(index[i]);
			var elemento = jQuery.parseJSON(aux);
			if (elemento.tipoItem == "aviso") {
				elementos[j++] = elemento;
				
			}
		}
		return elementos;
	}

	/**
	 * Carga el menu de ultimas acciones.
	 * Siempre que se muestre actualiza el contenido. 
	 */
	function cargarMenuUltimasAcciones() {
			$('.desplegablesAcciones .aviso').remove();
			var elementos = ordenarElementosByFecha(getFromLocalStorage());
			if (elementos.length == 0) {
				// Si no hay elementos cargo un elemento
				$('.desplegablesAcciones').append(
						$('<li/>'
						).append(
								$('<a/>', {
									'text': "Todav\u00EDa no realizaste ninguna b\u00FAsqueda."
								}
								)
						)
				);
			} else {
				for (var i = 0; i < elementos.length; i++) {
					elemento = elementos[i];
					
					$('.desplegablesAcciones').append(
							$('<li/>', {
								'class': elemento.tipoItem
							}).append(
									$('<a/>', {
										'href' : elemento.url,
										'title' : elemento.titulo,
										'text' : truncateStr(elemento.titulo)
									}
									)
							)
					);
					$('.desplegablesAcciones .' + elemento.tipoItem).append(
							$('<div/>', {
								'class': 'pic'
							})
					);
				}
			}
	}
	//TODO unificar con cargarMenuUltimasAcciones cuando todo el
	//header sea responsive
	function cargarMenuUltimasAcciones() {
		var elementos = ordenarElementosByFecha(getFromLocalStorage());
		
		var contenidoUltimasAcciones = $('#contenidoUltimasAcciones').text();
		var ultimasAcciones = $('#ultimasAcciones').text();
	    html = "";
	    	
		if (elementos.length == 0) {
			// Si no hay elementos cargo un elemento
			html = '<li><h6 class="coral">Aún no has realizado ninguna búsqueda</h6></li>';
		} else {
			html = '<li id="busquedaAvisosRecientes" class="dropdown-header">Búsquedas y avisos recientes</li>';
			for (var i = 0; i < elementos.length; i++) {				
				
				elemento = elementos[i];
				elemento.titulo = truncateStr(elemento.titulo);
				
				html += (Mustache.render(ultimasAcciones, elementos[i])).replace('tipoCss', elemento.tipoItem == "aviso" ? 'fa-file-text-o' : "fa-search");
			}			
		}
		
		$('#listadoRecientesActividades').html(html);	
	}

	function ordenarElementosByFecha(elementos) {
		return elementos.sort(compare);
	}

	/**
	 * Compara los elementos por la fecha.
	 * @param elemento1
	 * @param elemento2
	 * @returns {Number}
	 */
	function compare(elemento1, elemento2) {
		if (elemento1.fecha < elemento2.fecha) {
			return 1;			  
		}
		if (elemento1.fecha > elemento2.fecha) {
			return -1;			  
		}
		return 0;
	}

	function cleanTitle(titulo) {
		var index = titulo.lastIndexOf(" | Empleos");
		return titulo;
	}

	function truncateStr(elemento) {
		if (elemento.length > 50) {
			return elemento.substring(0, 47) + "...";
		}
		return elemento;
	}

	function eliminarAcccionRepetida(accion) {
		var accionAux = null;
		accionAux = $.jStorage.get(accion);
		if (accionAux != null) {
			$.jStorage.deleteKey(accion);	
		}
	}

	function obtenerElementoPorId(id) {
		for (var i = 0; i < $.jStorage.index().length; i++) {
			
			var index = $.jStorage.index();
			
			var aux = $.jStorage.get(index[i]);
			var elemento = jQuery.parseJSON(aux);
			if (elemento.id == id) {
				return elemento;			
			}
		}
	}

	/**
	 * al cerrar un mensaje en la pantalla de mi cuenta, se lo guarda como borrado en el localStorage por 12h (43200000 ms)
	 * @param descripcionNoticia
	 * @Param postulanteId
	 */
	function guardarEstadoBorradoMensajesMicuenta(descripcionNoticia, postulanteId) {
		var clave = getClaveMensajePostulanteId(descripcionNoticia, postulanteId);
		$.jStorage.set(clave, true);
		$.jStorage.setTTL(descripcionNoticia, 43200000);
	}

	function getEstadoBorradoMensajesMicuenta(descripcionNoticia, postulanteId) {
		var clave = getClaveMensajePostulanteId(descripcionNoticia, postulanteId);
		if ($.jStorage.get(clave)) {
			return true;
		}
		return false;
	}
	
	function getClaveMensajePostulanteId(descripcionNoticia, postulanteId) {
		return descripcionNoticia + "-" + postulanteId;
	}
