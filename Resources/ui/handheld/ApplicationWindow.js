
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
	
	
	
	var textField1 = Titanium.UI.createTextField({
		backgroundColor:'pink',
		height:30,
		width:200,
		hintText:'nombre',
		borderRadius:5,
		borderColor:'red',
		borderWidth:2,
		top:5,
	});
	
	var textField2 = Titanium.UI.createTextField({
		backgroundColor:'pink',
		height:30,
		width:200,
		hintText:'password',
		borderRadius:5,
		borderColor:'red',
		borderWidth:2,
		top :50,
		passwordMask:true,
	});
	
	contendorI.add(textField1, textField2);
	
	self.add(contendorI);
	self.add(contenedorBoton);
	
	
	return self;
}

module.exports = ApplicationWindow;
