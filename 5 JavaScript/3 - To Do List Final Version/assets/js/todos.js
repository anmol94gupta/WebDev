// Check Off Specific Todos By Clicking
$(".adding").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$(".adding").on("click", "span", function(event){
	$(this).parent().fadeOut(1000,function(){
		//--To Remove
		//$(this).remove();

		//--To Move to completed
	var done = $(this).text();	
	console.log(done);
	$(".done").append("<li><span><i class='fa fa-check'></i></span> " + done + "</li>")
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$(".adding").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});