//document.getElementById("me").innerHTML="Nihad";
//document.getElementById("me2").innerHTML="Good Bye"
//document.getElementsByTagName("h1")[0].innerHTML="Hi";
//document.getElementsByTagName("h1")[1].innerHTML="Joy bangla";
//document.getElementsByClassName("me")[0].innerHTML="Hi";
//document.getElementsByClassName("me1")[0].innerHTML="Hello";




//var x=document.querySelector('#para2');
//var y=document.querySelector('#pic1');
//var z=document.querySelector('#pic2')
//function btn1 (){
//	x.innerHTML="Nihad Hossain";
//}
//function btn2(){
//	x.innerHTML="Joy Bangla";
//	
//}
//
//function para1(){
//	alert("HI ");
//	
//	
//}
//function imgchange1(){
//	y.src="img/IMG_0629.JPG";
//	
//}
//
//
//
//
//function imgchange2(){
//	y.src="img/IMG_0634.JPG";
}










var x=["img/IMG_0629.JPG","img/IMG_0634.JPG"]
var y=document.querySelector(img);



var count=0;

function ne(){
	count++;
	if(count>=x.length){
		count=0;
		y.src=x[count];
	}
	else{
		y.src=x[count];
	}
	
}