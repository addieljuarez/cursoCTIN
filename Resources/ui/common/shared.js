function SHARED (){
	var self = Titanium.UI.createView({
		backgroundColor:'#bababa'
	});
	
	
	 var fb = require('facebook');
	
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
		        
		        alert(json)
		    } else if (e.error) {
		        alert(e.error);
		    } else {
		        alert('Unknown response');
		    }
		});
		
		
	
	return self;
}
module.exports =  SHARED;