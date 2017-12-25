var fs = require('fs');
fs.readFile('./b.js',function(err,data){
	if(err){
		console.log(err);
	}
	console.log(data);
})
