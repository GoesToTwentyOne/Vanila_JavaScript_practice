//document.write("<h1>Name:Md Nihad Hossain<br></h1>");
//document.write("Roll:300373 </br>");
//document.write("Reg:299590 <br>");
//document.write(typeof("Nihad "))

//variabble



//var name="MD Nihad Hossain";
//var age= 29;
//document.write(name);
//document.write(age);
//var f1="Md";
//var f2=" Nihad";
//var f3=" Hossain";
//var all=f1+f2+f3;
//document.write("this is the full value: "+all);


//var n1=20;
//var n2=30;
//document.write("the value of n1 "+n1+" the value of n2 "+n2);



//bult in function



//var n="Joy bangla joy Bangla"
//document.write("Length "+n.length);



//var x=prompt("Enter your value : ");
//var y=x.length;
//document.write("Length "+y);


//var x=prompt("Enter your value : ");
//document.write(x.charAt(0));
//var y=prompt("Enter your value 2 ")
//document.write(y.slice(2,4));

//
//var x=parseInt(prompt("Enter your value  to add data: "))
//var y=parseInt(prompt("Enter your value  to add data: "))
//var z=x+y;
//document.write(z);




//var x=parseInt(prompt("enter your value : "));
//var y=parseInt(prompt("Enter your value of a :"));
//var y=10;
//var tringleArea=(.5*x*y);
//document.write("Area of "+tringleArea);




//Relational Operator


//
//var x=20; 
//var y=30;
//document.write("x>y<br>")
//document.write(x=y)







//var x=parseInt(prompt("enter your value to check marks :"));
//if (x>=80 && x<=100)
//	document.write("A+");
//else if(x>=70 &&  x<=79)
//	document.write("A-");
//else if(x>=60 && x<=69)
//	document.write("A");
//else if(x>=50 && x<=59)
//	document.write("B");
//else if(x>=40 && x<=49)
//	document.write("C");
//else if(x>=33 && x<=39)
//	document.write("D");
//else if(x==32)
//	document.write("F");
//else
//	document.write("Not Allow This value")




//
//var x=parseInt(prompt("enter your value of 1 :"));
//var y=parseInt(prompt("Enter your value of 2 : "));
//var z=parseInt(prompt("enter your value to 3 :"));
//if(x>=y && x>=z)
//	document.write("X is large");
//else if(y>=x && y>=z)
//	document.write("Y is large");
//else
//	document.write("Z is large")






//var x=prompt("enter your value :")
//x=x.toLowerCase();
//switch (x) {
//	case "a":
//		document.write("Vowel");
//		break;
//	case "e ":
//		document.write("vowel");
//		break
//	case "i":
//		document.write("vowel");
//	case"o ":
//		document.wrrite("vowel");
//	case "u ":
//		document.write("vowel");
//	default:
//		document.write("Not vowel");
//}




//Loop 


//for(var i=1;i<=10;i++){
//	document.write(i);
//	document.write(" <br>  ");
//}




//for(var x=100;x>=1;x--){
//	document.write("<br>"+x)
//}




//var x=parseInt(prompt("enter your value to check : "))
//var sum=0;
//for(x;x<=10;x++ ){
//	sum=sum+x;
////document.write("<br>"+sum);
//}
//document.write("<br>"+sum);


//var x = 1;
//var sum=0;
//while (x <= 20) {
//	if(x%3==0 || x&5==0){
//		document.write("    "+x)
//		sum=sum+x;
//	}
//	
//	x++;
//	
//}
//document.write("<br> "+sum)



var x=parseInt(prompt("enter your value to check odd or even num sum start : "));
document.write(" started Value: "+x);
document.write(" <br>");

var y=parseInt(prompt("enter your value to check odd or even num sum end: "));
document.write(" Ended Value: "+y);
document.write(" <br>");
var sum=0;
document.write(" Value: ");
do{
	
	document.write("  "+x);
	sum=sum+x;
	x=x+2;
}


while(x<=y);
document.write(" <br> Result:"+sum);





//var x=1;
//while(x<=10){
//		if(x%2==0){
//		continue;
//	}
//	
//	document.write("   "+x);
//	x++;
//}


//
//function add( x, y){
//	var z=x+y;
//	return z;
//	
//
//	
//}
//document.write(add(10,20));
//

//
//function multiaction(x,y){
//	var add=x+y;
//	return add;
//	var sub=x-y;
//	return sub;
//	var multiplication=x*y;
//	return multiplication;
//	var devide=x/y;
//	return devide;
//}
//document.write(multiaction(4,5));
//document.write(sub(4,5));
//document.write(multiaction(4,5));
//document.write(devide(4,5));


//var arr=[10,20,100,300,500];
//for(var i=0;i<arr.length;arr++){
//	document.write("     "+arr)
//}




//var x= new Array();
//var sum=0;
//var j=0;
//for(var i=0;i<5;i++){
//	x[i]=parseInt(prompt("Enter your value : "));
//}
//
//
//for(var j=0;j<5;j++){
//	sum=sum+x[j];
//	document.write("    "+x[j]);
//}
//document.write("  <br> Results: "+sum);






//function Studentdetails(name,age,phn,cgpa){
//	this.name=name;
//	this.age=age;
//	this.phn=phn;
//	this.cgpa=cgpa;
//	
//	this.display=function(){
//		document.write("<br>  "+this.name);
//		document.write("<br>  "+this.age);
//		document.write("<br>  "+this.phn);
//		document.write("<br>  "+this.cgpa);
//		
//	}
//}
//var s1=new Studentdetails("Nihad",25,66666666,3.80);
//s1.display();
//document.write("<br>")
//var s2=new Studentdetails("Raki",5,8798798797,3.92);
//s2.display();







