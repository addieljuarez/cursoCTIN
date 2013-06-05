function WebView(){
	var self = Titanium.UI.createView({
		backgroundColor :'#345678',
	});
	
	// var web  = Titanium.UI.createWebView({
		// backgroundColor:'red',
		// height:250,
		// width:200,
		// url:'https://google.com'
	// });
	
	// var web  = Titanium.UI.createWebView({
		// backgroundColor:'red',
		// height:250,
		// width:200,
		// url:'/ui/common/index.html',
	// });
	
	var link = '-LmPLcnWBvs'
	
	var web  = Titanium.UI.createWebView({
		backgroundColor:'red',
		height:250,
		width:200,
		url:'http://youtube.com/embed/'+link,
	});
	
	var salir = Titanium.UI.createButton({
		bottom:50,
		height:30,
		width:150,
		title:'salir',
	})
	
	
	
	self.add(salir);
	self.add(web);
	return self;
}
module.exports = WebView;