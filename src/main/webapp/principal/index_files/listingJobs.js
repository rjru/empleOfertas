function postulateButton() {
	$.ajax({
		url:appContextPath() + "/isLogged",
		type:"GET",
		cache:false,
		success:function(data) {
			if (data) {
				subscribeLoggedInPostulateButton();
				} else {
					subscribeNonLoggedInPostulateButton();
				}
			}
	});
}

function subscribeNonLoggedInPostulateButton() {
	$("[advertisementId]").each(function() {
		$(this).click(function() {
			var advertisementId = $(this).attr('advertisementId');
			var postulationSource=$(this).attr('postulationSource');
			forwardedLogin("/aviso/"+advertisementId+"?postulationSource="+postulationSource);
			setPostLoginFunction(function() {
				subscribeLoggedInPostulateButton();
				postulate(advertisementId,postulationSource);
			});

		});
	});
}

function subscribeLoggedInPostulateButton() {
	$("[advertisementId]").each(function() {
		$(this).unbind("click");
		$(this).click(function() {
			postulate($(this).attr('advertisementId'),$(this).attr('postulationSource'));

		});
	});
}


function onPostulateDisableClick(advertisementId){
	$("[advertisementId="+advertisementId+"]").off('click');
	blockScreen();
}

function onPostulateActivateClick(){
	setTimeout('subscribeLoggedInPostulateButton()', 3000);
}

function postulate(advertisementId,postulationSource) {
	onPostulateDisableClick(advertisementId);
	$.ajax({
		url:appContextPath() + "/postulation/" + advertisementId+ "/job/canpostulate",
		type:"GET",
		cache:false,
		success:function(data) {
			onPostulateActivateClick();
			if (data.rejections.length > 0 || data.needs.indexOf("PERSONAL_INFORMATION")>-1) {
				window.location.href = "/postulantes/aviso/" + advertisementId;
				return;
			}

			data["hasPresentations"] = data.presentations.length > 0;
			data["hasRemunerations"] = data.remunerations.length > 0;
			data["advertisementId"] = advertisementId;
			
			if(data.presentations.length==0 && data.remunerations.length==0){
				$.ajax({
					  url:"/postulantes/postulation/job/postulate/loggedIn",
					  type:"POST",
					  data:{advertisementId:advertisementId,remunerationId:0,presentationLetterId:0,source:postulationSource},
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
				return;
			}
			
			data["postulationSource"] = postulationSource;
			showModal(Mustache.to_html($('#postulationNeeds').html(),data));
		},
	});
}

function onPostulateFromSimilarsDisableClick(advertisementId){
	var onclick=$("[advertisementId="+advertisementId+"]").attr('onclick');
	$("[advertisementId="+advertisementId+"]").removeAttr('onclick');
	return onclick;
}

function onPostulateFromSimilarsActivateClick(advertisementId,onclick){
	setTimeout(function(){$("[advertisementId="+advertisementId+"]").attr('onclick',onclick);},2000);
}

function postulateFromSimilars(advertisementId,postulationSource){
	var onclick = onPostulateFromSimilarsDisableClick(advertisementId);
	postulate(advertisementId, postulationSource);
	onPostulateFromSimilarsActivateClick(advertisementId,onclick);
	
}
