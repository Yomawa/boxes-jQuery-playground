console.log("hello world");

//this is the same as the bottom one just shorter
/*$(document).ready(function(){

});*/
//ready for DOM manipulation
/*$(function(){
	$( "#secretBox" ).css("background-color","white");
	$( "<p>Secret Box</p>" ).appendTo( "#secretBox" );

	$("#row1 div").attr("class","box boxType3");
	$("#row4 div:last").hide();
	$(".boxType1").css("background-color","white");

	
	$("#row2 div").slice(0,2).removeClass();//()remove all classes
	$(".box").not("#secretBox").css("width","2px");
	});*/

	/*$("#row2 div: ea(1) ea(2)").removeClass("style");*/
	





$(function(){

	$("#container").click(function(e) {
  console.log("Your mouse position is (" + e.pageX + ", " + e.pageY + ")!");
});

	
	$(".boxType1").append("<h1> <a href='http://www.galvanize.com/'>Galvanize</h1>");
	
	$(".boxType1").click(function(e){
	alert(" won't leave the page after the alert!");
	e.preventDefault();
	});

	$(".box").click(function(e){
		$(".box").prepend($('<img src="dog.jpeg" height="130px" width="128px">'));
		`
		$(".box").off("click")($('<img src="dog.jpeg" height="130px" width="128px">'));
	});
	



});