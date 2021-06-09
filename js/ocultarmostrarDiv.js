$(document).ready(function(){
	
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#ocultmost").hide(1500);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#ocultmost").show(1500);
	});

	$("#ocultmost").fadeOut(1000, function(){
		$("#ocultmost").css({'top':300, 'left':200});
		$("#ocultmost").fadeIn(3000);
	});

	$("#GENERAL").fadeOut(1000, function(){
		$("#GENERAL").css({'top':300, 'left':200});
		$("#GENERAL").fadeIn(8000);
	});
	
});