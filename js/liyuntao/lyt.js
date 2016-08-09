;(function () {
	img = [
	{name : '1.jpg', describe : '来一杯美酒'},
	{name : '2.jpg', describe : '环形天桥、东方明珠'},
	{name : '3.jpg', describe : '世博展览馆'},
	{name : '4.jpg', describe : '磁铁'},
	{name : '5.jpg', describe : '三楼鼎立'},
	{name : '6.jpg', describe : '仙桃西站'},
	{name : '7.jpg', describe : '乡村的天空'},
	{name : '8.jpg', describe : '小梅沙'},
	{name : '9.jpg', describe : '万圣节南瓜灯'},
	{name : '10.jpg', describe : '外滩'},
	{name : '11.jpg', describe : '申城彩虹'},
	{name : '12.jpg', describe : '呐，花花'},
	{name : '13.jpg', describe : '额。。。'},
	{name : '14.jpg', describe : '很叼'}
	]
	
	for(var i in img){
		var name = img[i].name;
		var describe = img[i].describe;
		var appendHtml = '<div class="item">' +
							'<div class="animate-box">' +
								'<a href="images/' + name + '" class="image-popup fh5co-board-img"><img src="images/' + name + '"></a>' +
							'</div>' +
							'<div class="fh5co-desc">' + describe + '</div>' +
						 '</div>'
		$("#fh5co-board").append(appendHtml);
	}


}());