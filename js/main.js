var a="";
	
let length=parseInt(prompt("enter sqaure length"));

for(i=0;i<length;i++){
	for(j=0;j<length;j++){
		if(i==0 || i==length-1 || j==0 || j==length-1){
			a+="*";
		}
		else{
			a+=" "
		}
	}
	a+="\n";
}

console.log(a);