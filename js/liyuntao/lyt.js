;(function () {
	img = [
	{name : 'aliyuntao-0004.jpg', describe : '额。。。'},
	{name : 'aliyuntao-0000.jpg', describe : '万圣节南瓜灯'},
	{name : 'aliyuntao-0005.jpg', describe : '很叼'},
	{name : 'aliyuntao-0001.jpg', describe : '外滩'},
	{name : 'aliyuntao-0002.jpg', describe : '申城彩虹'},
	{name : 'aliyuntao-0003.jpg', describe : '呐，花花'},
	{name : 'aliyuntao-0006.jpg', describe : '一只小蜜蜂'},
	{name : 'aliyuntao-0007.jpg', describe : '小蛮腰'},
	{name : 'aliyuntao-0008.jpg', describe : '10&11'},
	{name : 'aliyuntao-0009.jpg', describe : '小梅沙'},
	{name : 'aliyuntao-0010.jpg', describe : '瞿同庆'},
	{name : 'aliyuntao-0011.jpg', describe : '来一杯美酒'},
	{name : 'aliyuntao-0012.jpg', describe : '世博展览馆'},
	{name : 'aliyuntao-0013.jpg', describe : '磁铁'},
	{name : 'aliyuntao-0014.jpg', describe : '三楼鼎立'},
	{name : 'aliyuntao-0015.jpg', describe : '仙桃西站'},
	{name : 'aliyuntao-0016.jpg', describe : '乡村的天空'},
	{name : 'aliyuntao-0017.jpg', describe : '环形天桥、东方明珠'},
	{name : 'aliyuntao-0018.jpg', describe : '11'},
	{name : 'aliyuntao-0019.jpg', describe : '吉他'}
	]
	
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