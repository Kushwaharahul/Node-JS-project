/* Hello, World! program in node.js */
var myfunction=function(){
   console.log(global.companyname);
    console.log(process.execPath);   
    console.log(process.pid); 
}
console.log("Hello, World!");
global.companyname="KLFS services";
myfunction();


