$(document).ready(function(){

	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#oculmos").hide(1000);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#oculmos").show(1000);
	});

	$("#principal").fadeOut(1000, function(){
		$("#principal").css({'top':300, 'left':200});
		$("#principal").fadeIn(4000);
	});

});
