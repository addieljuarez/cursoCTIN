function Main (){
	var self = Titanium.UI.createWindow({
		backgroundColor:'blue',
		
	});
	
	var WebView = require('ui/common/webView');
	var Imagen = require('ui/common/imagen');
	 
	var boton1 = Titanium.UI.createButton({
		title:'webView',
		top:10,
		width:150,
		height:30,
	});
	
	var boton2 = Titanium.UI.createButton({
		title:'imagen',
		top:50,
		width:150,
		height:30,
	});
	
	var boton3 = Titanium.UI.createButton({
		title:'JSON',
		top:90,
		width:150,
		height:30,
	});
	
	var boton4 = Titanium.UI.createButton({
		//title:'webView',
		top:130,
		width:150,
		height:30,
	});
	
	self.add(boton1);
	self.add(boton2);
	self.add(boton3);
	self.add(boton4);
	
	boton1.addEventListener('click', function(){
		var webView = new WebView();
		self.add(webView);
		
		Titanium.App.addEventListener('cerrarWebView', function(){
			self.remove(webView);
		});
	});
	
	
	boton2.addEventListener('click', function(){
		var imagen = new Imagen();
		self.add(imagen);
	});
	
	
	return self;
}
module.exports = Main;