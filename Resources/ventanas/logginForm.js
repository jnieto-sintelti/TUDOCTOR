function logginForm() {
	
	var formulario = Ti.UI.createView();
	
	var labelNombre = Ti.UI.createLabel({
		text: 'Nombre:',
		height: 50,
		width: 90,
		color: '#000',
		top: 100,
		left: 50
	});
	
	var textNombre = Ti.UI.createTextField({
		name: 'nombre',
		width: 300,
		height: 50,
		top: 100,
		left: 150
	});
	
	var labelUsuario = Ti.UI.createLabel({
		text: 'Usuario:',
		height: 50,
		width: 90,
		color: '#000',
		top: 160,
		left:50
	});
	
	var textUsuario = Ti.UI.createTextField({
		name: 'usuario',
		width: 300,
		height: 50,
		top: 160,
		left: 150
	});
	
	var labelEmail = Ti.UI.createLabel({
		text: 'e-mail:',
		height: 50,
		width: 90,
		color: '#000',
		top: 220,
		left: 50
	});
	
	var textEmail = Ti.UI.createTextField({
		name: 'email',
		width: 300,
		height: 50,
		top: 220,
		left: 150
	});
	
	var labelPassword = Ti.UI.createLabel({
		text: 'Password:',
		height: 50,
		width: 98,
		color: '#000',
		top: 280,
		left: 50
	});
	
	var textPassword = Ti.UI.createTextField({
		name: 'password',
		width: 300,
		height: 50,
		top: 280,
		left: 150
	});
	
	var labelPais = Ti.UI.createLabel({
		text: 'País:',
		height: 50,
		width: 90,
		color: '#000',
		top: 340,
		left: 50
	});
	
	var listaPaises = Ti.UI.createPicker({
  		top:340,
  		left:150,
  		heigth:20,
  		width:300
	});

	var data = 
	[	
	Ti.UI.createPickerRow({title:'México'}),
	Ti.UI.createPickerRow({title:'España'}),
	Ti.UI.createPickerRow({title:'Rusia'}),
	Ti.UI.createPickerRow({title:'Sudafrica'}),
	Ti.UI.createPickerRow({title:'Tazmania'})
	];
	
	listaPaises.add(data);
	listaPaises.selectionIndicator = true;
	
	var botonAceptar = Ti.UI.createButton({
		title: 'Registrar',
		top: 450,
		left: 200,
		height:50
	});
	
	botonAceptar.addEventListener('click',function(e){
		
	});
	
	formulario.add(labelNombre);
	formulario.add(textNombre);
	formulario.add(labelUsuario);
	formulario.add(textUsuario);
	formulario.add(labelEmail);
	formulario.add(textEmail);
	formulario.add(labelPassword);
	formulario.add(textPassword);
	formulario.add(labelPais);
	formulario.add(listaPaises);
	formulario.add(botonAceptar);
	
	return formulario;
};

module.exports = logginForm;