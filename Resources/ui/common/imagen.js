function ImagenView(){
	var self = Titanium.UI.createView({
		backgroundColor:'#0a0a0a'
	});
	
	var imagen = Titanium.UI.createImageView({
		backgroundColor:'#fff',
		top:20,
		height:150,
		width:150,
		image:'http://hosterblog.com/wp-content/uploads/2011/09/appcelerator.png',
	});
	
	var imagen2 = Titanium.UI.createImageView({
		backgroundColor:'#fff',
		top:190,
		height:150,
		width:150,
		image:'/logo.png'
	});
	
	var salir = Titanium.UI.createButton({
		bottom:10,
		height:30,
		width:150,
		title:'cerrar',
	});
	
	var guardar = Titanium.UI.createButton({
		bottom:50,
		title:'guardar',
		height:'30',
		width:150,
	});
	
	guardar.addEventListener('click', function(){
		Titanium.Media.saveToPhotoGallery(imagen.toImage());
		alert('guardado');
	});
	
	self.add(guardar);
	self.add(salir);
	self.add(imagen);
	self.add(imagen2);
	return self;
}
module.exports = ImagenView;