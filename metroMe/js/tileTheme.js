// Change The Colors of Tiles

function changeTheme(theme)
{	
	if (theme == "blueDark") {
		$("div .tile").delay(1000).css("background-color", "#2b5797");			
		$("#themePreview").css("background-color", "#2b5797");
		$("#themeName").text("blueDark");		
		$("#devLife").css("background-color", "#35876f");
	}
	else if (theme == "random") {
		randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

		$("div .tile").delay(1000).css("background-color", randomColor);		
		$("#themePreview").css("background-color", randomColor);
		$("#themeName").text(randomColor);
		$("#devLife").css("background-color", randomColor);
	}
	// alert(theme);
}

function change()
{
	// currentTheme = (currentTheme == "blueDark"	?  changeTheme("redDark") : changeTheme("blueDark"));	
	changeTheme("random");
}

function showCharms()
{	
	if (isCharmVisible)
	{
		$("div .charms").fadeOut(250)
		$("div .user-login").css("marginRight", "45px")
/*		$("div .page-region-content").width(orig)*/
		isCharmVisible = false
	}
	else
	{
		$("div .charms").fadeIn(250)
		$("div .user-login").css("marginRight", "290px")
/*		$("div .page-region-content").width(parseInt(orig) - 200)*/
		isCharmVisible = true
	}
}