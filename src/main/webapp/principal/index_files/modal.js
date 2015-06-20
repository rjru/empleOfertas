var modalDivId = "modalDiv";

function showModalByUrl(url, params){
	blockScreen();
	$.get(
		url,
		params,
		showModal
	);
};

function showModal(data) {
	unblockScreen();
	$('#'+modalDivId).remove();
	var d = document.createElement('div');
	$(d).attr("id", modalDivId).appendTo('body');
	$('#'+modalDivId).html(data);
	$('#'+modalDivId).children().modal('show');
}


function modalExito(titulo, mensaje){
	unblockScreen();
	$('#'+modalDivId).remove();
	
	$.get(
		appContextPath() + "/popup/exito", 
		function(data){ 
			showModal(data);
			$('#titulo').html(titulo);
			$('#popupExitoDiv #mensaje').html(mensaje);
		}
	);
}

function modalAlerta(mensaje){
	unblockScreen();
	$('#'+modalDivId).remove();
	
	$.get(
		appContextPath() + "/popup/alerta", 
		function(data){ 				
			showModal(data);
			$('#popupAlert #mensaje').html(mensaje);
		}
	);
}


function modalConfirm(mensaje, callback, callbackParams){

	$("#confirmDiv").remove();
	$.get(
			appContextPath() + "/popup/confirm", 
			function(data){ 
				showModal(data);
				$('#spanMensaje').html(mensaje);
				$('#btnConfirm').click(
						function(){
							unblockScreen();
							callback(callbackParams);
						});
				
				
			}
	);
}
