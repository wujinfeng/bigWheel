;(function($){
	var wrap;
	function goUp(){
		var first = wrap.find('li:first-child');
		//first.css('height',0);
		wrap.append(first);
		//first.animate({height:undefined},500);
	}
	var timeid = setInterval(goUp,1000);
	$.fn.autolist = function(){
		wrap = $(this).eq(0);
	}
})(Zepto);