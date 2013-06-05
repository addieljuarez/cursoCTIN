
function ApplicationWindow() {
	
	var Main = require('ui/common/main');
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
	
	
	var contenedorRegistro =  Titanium.UI.createView({
		backgroundColor:'#000',
		top:20,
		height:150,
		width:250,
	});
	
	self.add(contenedorRegistro);
	
	
	var textField3 = Titanium.UI.createTextField({
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
	
	var textField4 = Titanium.UI.createTextField({
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
	
	var botonRegistro = Titanium.UI.createButton({
		top:90,
		height:30,
		width:150,
		title:'registrate',
	});
	
	
	contenedorRegistro.add(textField3);
	contenedorRegistro.add(textField4);
	contenedorRegistro.add(botonRegistro);
	//-----------------------------------------------------------------------
	
	var ventana2 = (function(){
		var self = Titanium.UI.createWindow({
			backgroundColor:'#fff',
		});
		
		return self;
	})()
	
	
	
	textField1.addEventListener('return', function(){
		textField2.focus();
	});
	
	textField2.addEventListener('return', function(){
		alert('bienvenido');
	});
	
	login.addEventListener('click', function(){
		
		textField2.blur();
		textField1.blur();
		//alert('bienvenido');
		var main = new Main();
		main.open();
	});
	
	registro.addEventListener('click', function(){
		textField2.blur();
		textField1.blur();
		ventana2.open()
	});
	
	self.addEventListener('click', function(){
		textField2.blur();
		textField1.blur();
	});
	
	
	textField3.addEventListener('focus', function(){
		//self.top = -150;
		
		var firstMove = Ti.UI.createAnimation({duration:500, top:-150,});
		
		self.animate(firstMove);
		
		
	});
	
	textField3.addEventListener('blur', function(){
		//self.top =0;
		var regreso = Titanium.UI.createAnimation({
			duration:500,
			top:0,
		});
		self.animate(regreso)
	})
	
	
	
	
	
	return self;
}

module.exports = ApplicationWindow;
