;(function () {
	for(var i in img){
		var name = img[i].name;
		var describe = img[i].describe;
		var appendHtml = '<div class="item">' +
							'<div class="animate-box">' +
								'<a href="http://obryln0jh.bkt.clouddn.com/' + name + '-watermark" class="image-popup fh5co-board-img"><img src="http://obryln0jh.bkt.clouddn.com/' + name + '"></a>' +
							'</div>' +
							'<div class="fh5co-desc">' + describe + '</div>' +
						 '</div>'
		$("#fh5co-board").append(appendHtml);
	}


}());