function MAPA (){
	var self = Titanium.UI.createView({
		backgroundColor:'#000',
	});
	var boton  = Titanium.UI.createButton({
		height:20,
		width:20,
		title:'Hi',
	});
	 
	var punto = Titanium.Map.createAnnotation({
		latitude:37.785834,
		longitude:-122.406417,
		//pincolor:Titanium.Map.ANNOTATION_PURPLE,
		animate:true,
		title:'CTIN',
		subtitle:'hola',
		leftButton:Titanium.UI.iPhone.SystemButton.INFO_LIGHT,
		image:'/pin.png',
	});
	
	var mapa = Titanium.Map.createView({
		borderRadius:8,
		height:300,
		width:250,
		top:20,
		mapType:Titanium.Map.STANDARD_TYPE,
		//region:{latitude:37.785834, longitude:-122.406417,latitudeDelta:0.02, longitudeDelta:0.02},
		//region:{latitudeDelta:0.02, longitudeDelta:0.02},
		annotations:[punto],
	});
	
	var lat;
	var lon;
	
	Titanium.Geolocation.getCurrentPosition(function(e){
		lat = e.coords.latitude;
		lon = e.coords.longitude;
		mapa.region = {latitude:lat, longitude:lon, latitudeDelta:0.02, longitudeDelta:0.02}
	});
	
	
	
	self.add(mapa);
	return self;
}
module.exports = MAPA;