$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#img1").hide(1000);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#img1").show(1000);
	});

	$("#general").fadeOut(1000, function(){
		$("#general").css({'top':300, 'left':200});
		$("#general").fadeIn(4000);
	});

});