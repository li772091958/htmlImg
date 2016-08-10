AV.initialize('PsLiU3e6sAFkoOnaBRS1BThk-gzGzoHsz', 'WQ2jeDbbVWlEnAJ3iWymS4Px');
var TestObject = AV.Object.extend('Liyuntao_log');
var testObject = new TestObject();
var date = new Date();
var cip = returnCitySN.cip;
var cname = returnCitySN.cname;
var href = window.location.href;
testObject.save({
	date : date,
	cip : cip,
	cname : cname,
	href : href
},{
	success: function(object) {
		console.log("%c这个世界上，涛哥最帅。","color:red;font-size:35px;font-family: 'STXingkai';");
		console.log("%c恭喜你发现了这个秘密，赶快与大家分享这个秘密吧！","color:red;font-size:26px;font-family: 'STKaiti';");
		console.log('欢迎访问李云涛的个人网站！');
	}
});
