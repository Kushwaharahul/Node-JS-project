var myCallback = function(data) {
  console.log('got data: '+data);
  for(i=0;i<10;i++){
    console.log(i*5); 
  }
  
};

var fn = function(callback) {
     callback('Data from Callback-9999');
	 console.log("callback is called");
};

fn(myCallback);
console.log("callback is called");
