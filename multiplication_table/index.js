var temp = "";
for(var i = 1; i <= 9; i++){
	for(var j = 1; j <= 9; j++){
    	if(j <= i){
        	temp = temp + i + "*" + j + "=" + (i*j);
            if(j<i){
            	temp = temp + " ";
            }else{
            	temp = temp + "\n";
            }
        }
    }
    console.log(temp);
    temp = "";
}