var loginOptions = new defaultLoginOptions();

function defaultLoginOptions(){
	this.errorDiv = "errorLogin";
	this.isPopup = true;
	this.postLoginFunction=null;
}

function enablePopUpLogin(postLoginFunction){
	this.loginOptions.isPopup = true;
	if(postLoginFunction!=undefined){
		this.loginOptions.postLoginFunction = postLoginFunction;	
	}
}

function disablePopUpLogin(postLoginFunction){
	this.loginOptions.isPopup = false;
	this.loginOptions.postLoginFunction = postLoginFunction;
}

function setPostLoginFunction(postLoginFunction){
	this.loginOptions.postLoginFunction = postLoginFunction;
}

function loginPostulante() {
	$('#errorLogin p').hide();

	$.ajax({
		type : "POST",
		url : appContextPath() + '/login/authenticate',
		data : $('#loginForm').serialize(),
		success : function(data) {

			var response = jQuery.parseJSON(data);
			if (response.login == 'success') {
				if (response.redirect != undefined) {
					location.href = response.redirect;
				} else {
					var randomNo = Math.floor(Math.random() * 9999999);
					var url = appContextPath()
							+ '/obtenerMenuHeader?r=' + randomNo;
					$.get(url).success(function(data) {
						$("div#menuDerechoHeader").html(data);						
					});

					if (loginOptions.postLoginFunction != null) {
						loginOptions.postLoginFunction();
					}
					$('#popupLogin').parent().empty();
				}

			} else {
				$('#username, #password').val("");
				$('#errorLogin p').show();
			}
		}
	});
}

function loginRedSocial(redSocialForm, contextUrl, redSocial) {
	var formRedSocial = $('#'+redSocialForm);
	formRedSocial.attr("action", contextUrl + redSocial);
	formRedSocial.submit();
}

