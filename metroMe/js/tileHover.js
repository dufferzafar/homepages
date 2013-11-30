// Change Images On Hover

$("div .tile .image").hover(
	function() {
		img = $(this).find("img");		
		prevImage = img.attr("src").split("/");
		prevImage[2] = prevImage[2].replace(".png", "2.png");
		img.attr("src", prevImage.join("/"));
	},
	
	function() {
		img = $(this).find("img");
		prevImage = img.attr("src").split("/");
		prevImage[2] = prevImage[2].replace("2.png", ".png");
		img.attr("src", prevImage.join("/"));
	}
);