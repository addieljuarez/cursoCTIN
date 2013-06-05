function JSON1 (){
	var self = Titanium.UI.createView({
		backgroundColor:'red',
	});
	
	var table = Titanium.UI.createTableView({
		top:0,
		bottom:40,
		backgroundColor:'#c0c0c0'
	});
	
	//-----------------------------------------------------------------------------
	
	var url = 'https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=twitterapi&count=5'
	var tableData = [];
	
	var xhr = Titanium.Network.createHTTPClient({
		onload:function(){
			var json = JSON.parse(this.responseText);
			//alert(this.responseText)
			
			for (var i = 0; i<json.length; i++){
				var interno = json[i];
				//alert(interno)
				
				var row = Titanium.UI.createTableViewRow({
					//height:40,
					width:'100%',
					height:Titanium.UI.SIZE,
					layout:'vertical',
				});
				
				var imagen = Titanium.UI.createImageView({
					top:0,
					height:50,
					width:50,
					image:interno.user.profile_image_url,
				});
				
				var label = Titanium.UI.createLabel({
					text:interno.text,
					left:5,
					color:'#000',
					top:5,
				})
				
				row.add(imagen);
				row.add(label);
				tableData.push(row);
				table.setData(tableData);
				self.add(table);
			}
			
			
			
		},
		onerror:function(){
			alert('no se conecto');
		},
		timeout:5000
	});
	
	xhr.open('GET', url);
	xhr.send()
	
	
	//---------------------------------------------------------------------------------------
	
	
	return self;
}
module.exports = JSON1;