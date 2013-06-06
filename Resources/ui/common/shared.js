function SHARED (){
	var self = Titanium.UI.createView({
		backgroundColor:'#bababa'
	});
	
	
	 var fb = require('facebook');
	 fb.appid = 'aqui tu appId';
	 fb.permissions = ['email, user_birthday, user_hometown, user_location, publish_actions, publish_stream, publish_checkins, user_photos'];
	 // fb.forceDialogAuth = true;
	 // fb.addEventListener('login', function(e) {
	    // if (e.success) {
	        // alert('Logged In');
	    // } else if (e.error) {
	        // alert(e.error);
	    // } else if (e.cancelled) {
	        // alert("Canceled");
	    // }
	// });
	// fb.authorize();
		
		
		fb.requestWithGraphPath('me', {}, 'GET', function(e) {
		    if (e.success) {
		        //alert(e.result);
		        var json = JSON.parse(e.result);
		        
		        var nombre = Titanium.UI.createLabel({
		        		text: json.name,
		        });
		        
		        self.add(nombre);
		        
		        //alert(json)
		    } else if (e.error) {
		        alert(e.error);
		    } else {
		        alert('Unknown response');
		    }
		});
		
		// var email = Titanium.UI.createEmailDialog({
			// subject:'prueba',
			// messageBody:' test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test '
// 			
		// })
		
		
		var email = Titanium.UI.createEmailDialog({
			subject:'prueba',
			//messageBody:' test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test  test ',
			html:true,
			messageBody:'<!DOCTYPE HTML><html><body><h1>titulo</h1><img src="http://hosterblog.com/wp-content/uploads/2011/09/appcelerator.png" height=200  width=310 /></body></html>',
			// toRecipients:'test@test.com
			toRecipients:['test@test.com'],
		})
		
		var boton = Titanium.UI.createButton({
			top:30,
			height:30,
			width:150,
			title:'email',
		});
		
		
		boton.addEventListener('click', function(e){
			email.open();
		})
		
		
		
		
		self.add(boton);
		
	
	return self;
}
module.exports =  SHARED;