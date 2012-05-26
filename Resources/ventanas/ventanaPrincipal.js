function ventanaAplicacion(){

var Menu = require('ventanas/Menu'),
LogginForm = require('ventanas/logginForm');

var self = Ti.UI.createWindow({
		title:'Tu Doctor.com',
		exitOnClose:true,
		navBarHidden:false,
		backgroundColor:'#ffffff'
});

var menu = new Menu();

self.add(menu);

menu.addEventListener('itemSelected', function(e) {
		//create detail view container
		var logginForm = new LogginForm();
		var detailContainerWindow = Ti.UI.createWindow({
			title:'Registro',
			navBarHidden:false,
			backgroundColor:'#ffffff'
		});
		detailContainerWindow.add(logginForm);
		detailContainerWindow.open();
	});
	
	return self;
};

module.exports = ventanaAplicacion;