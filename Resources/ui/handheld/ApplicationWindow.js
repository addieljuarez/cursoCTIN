
function ApplicationWindow() {
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'red',
		height:'100%',
		width:'100%',
		//layout:'horizontal',
		layout:'vertical',
	});
	
	var contendorI = Titanium.UI.createView({
		backgroundColor:'#000',
		height:100,
		width:250,
		top:20,
		//top:300,
	});
	
	var contenedorBoton = Titanium.UI.createView({
		backgroundColor:'#fff',
		height:150,
		width:250,
		top:20,
	});
	
	
	
	
	self.add(contendorI);
	self.add(contenedorBoton);
	
	
	return self;
}

module.exports = ApplicationWindow;
