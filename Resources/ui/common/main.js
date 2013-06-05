function Main (){
	var self = Titanium.UI.createWindow({
		backgroundColor:'blue',
		
	});
	
	var boton1 = Titanium.UI.createButton({
		title:'webView',
		top:10,
		width:150,
		height:30,
	});
	
	var boton2 = Titanium.UI.createButton({
		//title:'webView',
		top:50,
		width:150,
		height:30,
	});
	
	var boton3 = Titanium.UI.createButton({
		//title:'webView',
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
	
	return self;
}
module.exports = Main;