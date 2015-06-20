/**
 * 
 */
function searchJobs(nombreInput,form,validar){
	if (validar && (!$("#"+nombreInput).val() && $("option[value!='']:selected").size() <= 0)) {
		
		$("#alertWarning").show();
		window.scrollTo(0,0);
// TO DO - Para agregar animación en el futuro		
//		$("html, body").animate({
//			scrollTop : $(".header").offset().top
//		}, 500);
		return false;
	}
	//$(form).attr("action", armarURL(nombreInput));
	blockScreen();
	$(location).attr('href', armarURL(nombreInput));
	return true;
}

function searchJobsKey(event,nombreInput,form,validar){
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13') {
    	searchJobs(nombreInput,form,validar);   
    }
}

function armarURL(nombreInput) {
	var paramUrl = "";
	if ($("#"+nombreInput).val()) {
		var palabraClave = $.parseHTML($("#"+nombreInput).val());
		palabraClave = $(palabraClave).text();
		palabraClave = escape(palabraClave.toLowerCase());
		paramUrl = armarParametro(paramUrl, "AL" + palabraClave);
	}
	$("option[value!='']:selected").each(
			function() {
				paramUrl = armarParametro(paramUrl, this.value, $(this)
						.attr("prefix"));
			});

	return appContextPath() + "/avisos/trabajo/" + paramUrl;
}

function armarParametro(url, value, prefijo) {
	if (!url == "") {
		url += "-";
	}
	if (prefijo != null) {
		url += prefijo;
	}
	url += value;
	return url;
}