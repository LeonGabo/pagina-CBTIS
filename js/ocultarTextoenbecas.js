$(document).ready(function(){

	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#textol").hide(1000);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#textol").show(1000);
	});

	$("#general1").fadeOut(1000, function(){
		$("#general1").css({'top':300, 'left':200});
		$("#general1").fadeIn(4000);
	});
});