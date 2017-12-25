var fs = require('js');
var newColor = process.argv[2];
//获取背景颜色
fs.readFile('./style.css',function(err,data){
	if(err){
		throw err;
	}
	console.log(data.toString());
})
