const stopVideo = () => {
	$('#sample_video').trigger('pause');
	$('#normativa_video').trigger('pause');	  
}
// videoControls();

const playVideo = () => {
	$('#sample_video').trigger('play'); 
}
// videoControls();

const dataPicker = () => {
	var dateClass='.datechk';
	$(document).ready(function ()
	{
	  if (document.querySelector(dateClass).type !== 'date')
	  {
		var oCSS = document.createElement('link');
		oCSS.type='text/css'; oCSS.rel='stylesheet';
		oCSS.href='//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css';
		oCSS.onload=function()
		{
		  var oJS = document.createElement('script');
		  oJS.type='text/javascript';
		  oJS.src='//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js';
		  oJS.onload=function()
		  {
			$(dateClass).datepicker();
		  }
		  document.body.appendChild(oJS);
		}
		document.body.appendChild(oCSS);
	  }
	});
	$.datepicker.regional['es'] = {
		closeText: 'Cerrar',
		prevText: '< Ant',
		nextText: 'Sig >',
		currentText: 'Hoy',
		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
		dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
		dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['es']);
}
// dataPicker();