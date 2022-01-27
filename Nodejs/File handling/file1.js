var fs=require('fs');
fs.stat('./demo.txt',function(err,stats){
	if(err){
		console.log(err);
		return;
	}
	console.log('File Size in bytes : %d',stats.size);
	console.log('File created on : %s',stats.ctime);
	console.log('Is File ? : %s',stats.isFile());
	
});