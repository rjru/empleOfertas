function onAlreadyPostulatedError(data){
	var html=Mustache.to_html($('#already_postulated_error').html(),data);
	$('#mensajesNotificaion').html(html);
	$('#mensajesNotificaion').slideDown(200);
	$(".divPostularme input").prop("disabled",true);
}

function onLackOfRequeriementsError(data){
	var html=Mustache.to_html($('#restrictions_error').html(),data);
	$('#mensajesNotificaion').html(html);
	$('#mensajesNotificaion').slideDown(200);
	$(".divPostularme input").prop("disabled",true);
}

function onPersonalInformationLackOfInformation(advertisementId){
	var model=new Object();
	model["advertisementId"] =advertisementId;
	var html=Mustache.to_html($('#missing_data_error').html(),model);
	$('#mensajesNotificaion').html(html);
	$('#mensajesNotificaion').slideDown(200);
	$(".divPostularme input").prop("disabled",true);
}

function onNotLoggedInError(){
	var html=Mustache.to_html($('#not_logged_error').html(),data);
	$('#mensajesNotificaion').html(html);
	$('#mensajesNotificaion').slideDown(200);
	$(".divPostularme input").prop("disabled",true);
}

function hasPostulationErrors(data,advertisementId){
	if(data.rejections.length>0){
		if(data.rejections.indexOf("ALREADY_POSTULATED")>-1){
			onAlreadyPostulatedError(data);
			return true;
		}
		if(data.rejections.indexOf("EXPIRED_ADVERTISEMENT")> -1){
			return true;
		}
		
		if(data.rejections.indexOf("NOT_LOGGED")> -1){
			onNotLoggedInError();
			return true;
		}
		
		onLackOfRequeriementsError(data);
		return true;
	}
	
	if(data.needs.length > 0){
		if(data.needs.indexOf("PERSONAL_INFORMATION")> -1){
			onPersonalInformationLackOfInformation(advertisementId);
			return true; 	
		}
	}
	
	return false;
}

function hasToAddInformation(data,advertisementId,postulationSource){
	data["hasPresentations"] = data.presentations.length>0;
	data["hasRemunerations"] = data.remunerations.length>0;
	
	data["advertisementId"] =advertisementId;
	data["postulationSource"] =postulationSource;
	if(data.presentations.length>0 || data.remunerations.length>0){
		showModal(Mustache.to_html($('#postulationNeeds').html(),data));
		return true;
	}
	return false;
}

function doPostulation(advertisementId,remunerationId,presentationLetterId,postulationSource){
	$.ajax({
		  url:"/postulantes/postulation/job/postulate/loggedIn",
		  type:"POST",
		  data:{advertisementId:advertisementId,remunerationId:remunerationId,presentationLetterId:presentationLetterId,source:postulationSource},
		  success:function(data){
			  if(data.postulationId > 0){
				  window.location.href="/postulantes/postulation/job/postulate/success?postulationId="+data.postulationId;
				  return;
			  }else{
				  window.location.href="/postulantes/aviso/"+advertisementId;
				  return;
			  }
		  }
	});
}

function onPostulation(advertisementId,postulationSource){
	$.ajax({
		url:appContextPath() + "/postulation/" + advertisementId+ "/job/canpostulate",
		type:"GET",
		cache:false,
		success:function(data){
			if(hasPostulationErrors(data,advertisementId) ||hasToAddInformation(data,advertisementId,postulationSource) ){
				return;
			}
			
			onDefaultPostulation(advertisementId,postulationSource);
		}
	});
}

function onDefaultPostulation(advertisementId,postulationSource){
	//default values
	var remunerationId=0;
	var presentationLetterId=0
	doPostulation(advertisementId,remunerationId,presentationLetterId,postulationSource);
}

function onPostulationPopUpHandleDisableOtherClicks(){
	$('#postulationPopUpSpinner').removeClass('hidden');
	var onclickAttr=$('#postulationPopUpButton').attr('onclick');
	$('#postulationPopUpButton').removeAttr('onclick');
	
	return onclickAttr;
}

function onPostulationPopUpReactivateClick(onclickAttr){
	$('#postulationPopUpSpinner').addClass('hidden');
	$('#postulationPopUpButton').attr('onclick',onclickAttr);
}

function onPostulationPopUp(advertisementId,postulationSource){
	
	var onclickAttr=onPostulationPopUpHandleDisableOtherClicks();
	
	var remunerationValue=0;
	if($('#remunerationId').length > -1 && $('#remunerationId').val()==-1){
		$('#remunerationError').show();
		onPostulationPopUpReactivateClick(onclickAttr);
		return;
	}
	remunerationValue=$('#remunerationId').val();
	var presentationLetterValue=0;
	if($('#presentationLetterId').length > -1){
		presentationLetterValue=$('#presentationLetterId').val();
	}
	
	doPostulation(advertisementId,remunerationValue,presentationLetterValue,postulationSource);
}

function showErrors(advertisementId){
	$.ajax({
		url:appContextPath() + "/postulation/" + advertisementId+ "/job/canpostulate",
		type:"GET",
		cache:false,
		success:function(data){
			hasPostulationErrors(data,advertisementId);
		}
	});
}

// has to override default postulate functionality
function automaticPostulation(advertisementId,postulationSource){
	$.ajax({
		url:appContextPath() + "/postulation/" + advertisementId+ "/job/canpostulate",
		type:"GET",
		cache:false,
		success:function(data){
			unblockScreen();
			
			if(data.rejections.length>0){
				return;
			}
			
			if(data.needs.indexOf("PERSONAL_INFORMATION")> -1){
				return;
			}
			
			if(hasToAddInformation(data,advertisementId,postulationSource)){
				return;
			}
				
			
			onDefaultPostulation(advertisementId,postulationSource);
		}
	});	
}