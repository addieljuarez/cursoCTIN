function MAPA (){
	var self = Titanium.UI.createView({
		backgroundColor:'#000',
	});
	
	var mapa = Titanium.Map.createView({
		borderRadius:8,
		height:300,
		width:250,
		top:20,
		mapType:Titanium.Map.STANDARD_TYPE,
		region:{latitude:37.785834, longitude:-122.406417,latitudeDelta:0.02, longitudeDelta:0.02},
	});
	
	
	self.add(mapa);
	return self;
}
module.exports = MAPA;