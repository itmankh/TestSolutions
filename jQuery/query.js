$('ul').on('click', "span", function(event){
	  $(this).parent().fadeOut(function(){
	  	event.stopPropagation();
	  	$(this).remove();
	  });
	})

$('ul').on('click', "li", function(){
		if($(this).css('color') === 'rgb(128, 128, 128)'){
				$(this).css({
			textDecoration: 'none',
	    color: 'black'
		});
	}
	else{
      $(this).css({
			    textDecoration: 'line-through',
	        color: 'grey'
		});
	}
});

$('input').on('keypress', function(event){
	var li = $('<li class="list-item"> ' + $("input").val() + '<span><i class="fa-solid fa-xmark"></i></span></li>');
	if (event.which === 13){
		$('ul').append(li);
		$("input").val("");
	}
})

$("h2 span").click(function(){
	$('input').fadeToggle(700);
})