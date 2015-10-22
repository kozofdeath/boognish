//javascript

function boogie() {
	console.log($("body").css("background-image"))
	console.log($("body").css("background-image") === 'url("http://i.imgur.com/ZijL0fc.gif")')
	//$('body').css("background-image", 'url("http://i.imgur.com/ZijL0fc.gif")');
	if ($("body").css("background-image") === 'url(http://i.imgur.com/ZijL0fc.gif)') {
		$("body").css({"background-image": 'url("http://img11.deviantart.net/5ac1/i/2010/306/d/c/jack_o_lantern_2_by_ericfreitas-d320vg3.jpg")', "background-repeat": "no-repeat"});
	}
	else {
		$("body").css({"background-image": 'url("http://i.imgur.com/ZijL0fc.gif")', "background-repeat": "repeat"})
	}

	console.log($("body").css("background-image"))
}