
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
		keyboardType: Ti.UI.KEYBOARD_EMAIL,
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	
	
	
	var textField2 = Titanium.UI.createTextField({
		backgroundColor:'pink',
		height:'30dp',
		width:200,
		hintText:'password',
		borderRadius:5,
		borderColor:'red',
		borderWidth:2,
		top :50,
		passwordMask:true,
		returnKeyType:Titanium.UI.RETURNKEY_DONE,
	});
	
	contendorI.add(textField1);
	contendorI.add(textField2)
	
	var login = Titanium.UI.createButton({
		top:20,
		height:30,
		width:150,
		title:'login',
	});
	
	var registro = Titanium.UI.createButton({
		top:70,
		height:30,
		width:150,
		title:'registro',
	});
	
	contenedorBoton.add(login, registro);
	
	self.add(contendorI);
	self.add(contenedorBoton);
	
	
	
	//-----------------------------------------------------------------------
	
	textField1.addEventListener('return', function(){
		textField2.focus();
	});
	
	textField2.addEventListener('return', function(){
		alert('bienvenido');
	});
	
	login.addEventListener('click', function(){
		
		textField2.blur();
		textField1.blur();
		alert('bienvenido');
	});
	
	registro.addEventListener('click', function(){
		textField2.blur();
		textField1.blur();
	});
	
	return self;
}

module.exports = ApplicationWindow;
