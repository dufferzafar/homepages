// $('[data-role="dropdown"]').each(function () { 
$('.DDTitle').each(function () { 
	$(this).on('click', function(e)	{
		$(".sidebar-dropdown-menu").slideUp('fast');
		// $(".DDTitle").children("i").remove();
	
		$m = $(this).parents('[data-role="dropdown"]').children(".sidebar-dropdown-menu");
		if ($m.css('display') == "block") 
		{
			$m.slideUp('fast');
		} 
		else 
		{
			// $(this).prepend('<i class="icon-arrow-right"></i>')
			$m.slideDown('fast');
		};
	});
});