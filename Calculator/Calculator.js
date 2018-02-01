var operator;
function set() {
	document.getElementById('result').value="hello";
}
function one() {
	if(document.getElementById('number').value=="0")
	{
		document.getElementById('number').value="1";
	}
	else{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"1";
        }
}
function two() {
	if(document.getElementById('number').value=="0")
	{
		document.getElementById('number').value="2";
	}
	else
	{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"2";
    }
}
function three() {
	if(document.getElementById('number').value=="0")
	{
		document.getElementById('number').value="3";
	}
	else
	{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"3";
    }
}
function four() {
	if(document.getElementById('number').value=="0")
	{
		document.getElementById('number').value="4";
	}
	else
	{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"4";
}
}
function five() {
	if(document.getElementById('number').value=="0")
	{
		document.getElementById('number').value="5";
	}
	else{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"5";
    }
}
function six() {
	if(document.getElementById('number').value=="0")
	{
		document.getElementById('number').value="6";
	}
	else
	{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"6";
    }
}
function seven() {
	if(document.getElementById('number').value=="0")
	{
		document.getElementById('number').value="7";
	}
	else
	{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"7";
    }
}
function eight() {
	if(document.getElementById('number').value=="0")
	{
		document.getElementById('number').value="8";
	}
	else{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"8";
    }
}
function nine() {
	if(document.getElementById('number').value=="0")
	{
		document.getElementById('number').value="9";
	}
	else{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"9";
    }
}
function zero() {
	if(document.getElementById('number').value=="0")
	{
		document.getElementById('number').value="0";
	}
	else{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"0";
    }
}
function decimal() {
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+".";
}
function plus() {
	operator="+";
	if(document.getElementById("result").value=="0")
	{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"+";
    }
    else
    {
    	document.getElementById('number').value=document.getElementById('result').value+"+";
    }
}
function minus() {
	operator="-";
	if(document.getElementById("result").value=="0")
	{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"-";
    }
     else
    {
    	document.getElementById('number').value=document.getElementById('result').value+"-";
    }
}
function mul() {
	operator="*";
	if(document.getElementById("result").value=="0")
	{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"*";
    }
    else
    {
    	document.getElementById('number').value=document.getElementById('result').value+"*";
    }
}
function div() {
	operator="/";
	if(document.getElementById("result").value=="0")
	{
	var y=document.getElementById('number').value;
	document.getElementById('number').value=y+"/";
    }
    else
    {
    	document.getElementById('number').value=document.getElementById('result').value+"/";
    }
}
function cut() {
	//var y=document.getElementById('number').value;
	document.getElementById('number').value="0";
	document.getElementById('result').value="0";
}
function equals(){
	var y=document.getElementById('number').value;
	if(operator=="+")
	{
		var x=y.indexOf('+');
	var s1=y.slice(0,x);
	var s2=y.slice(x+1,y.length);
	document.getElementById('result').value=parseFloat(s1)+parseFloat(s2);
	}
	if(operator=="-")
	{
		var x=y.indexOf('-');
	var s1=y.slice(0,x);
	var s2=y.slice(x+1,y.length);
	document.getElementById('result').value=parseFloat(s1)-parseFloat(s2);
	}
	if(operator=="*")
	{
		var x=y.indexOf('*');
	var s1=y.slice(0,x);
	var s2=y.slice(x+1,y.length);
	document.getElementById('result').value=parseFloat(s1)*parseFloat(s2);
	}
	if(operator=="/")
	{
		var x=y.indexOf('/');
	var s1=y.slice(0,x);
	var s2=y.slice(x+1,y.length);
	document.getElementById('result').value=parseFloat(s1)/parseFloat(s2);
	}
}