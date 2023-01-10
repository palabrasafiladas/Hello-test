function validateEmail(){
                
	// Get our input reference.
	var emailField = document.getElementById('email');
	
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(emailField.value) ){
		return true;
	}else{
		$("#mailError").show();
		return false;
	}
}