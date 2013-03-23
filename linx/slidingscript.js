
function slideleft(){
	
	var slidingleft = document.getElementById("apDiv31");
//alert(slidingleft.style.left);
if( parseInt(slidingleft.style.left) >=0){
	
	//alert(slidingleft.style.left);
	}
	if(0 >= parseInt(slidingleft.style.left) && parseInt(slidingleft.style.left) >=-250){
		//alert(slidingleft.style.left);
		slideleft3();
		}
	if(-250 > parseInt(slidingleft.style.left)){
		//alert(slidingleft.style.left);
	slideleft2();
		}
}
	
function slideleft2(){
var slidingDiv = document.getElementById("apDiv31");

if (parseInt(slidingDiv.style.left) < -250)
	{
slidingDiv.style.left = (parseInt(slidingDiv.style.left) +10) + "px";
		setTimeout(slideleft2, 30);
	}

		
}

function slideleft3(){
var slidingDiv = document.getElementById("apDiv31");

if (parseInt(slidingDiv.style.left) < 0)
	{
slidingDiv.style.left = (parseInt(slidingDiv.style.left) +10) + "px";
		setTimeout(slideleft3, 30);
	}

		
}
	
	
	
	
	
function slideIt(){
	var slidingDiva = document.getElementById("apDiv31");
	if(parseInt(slidingDiva.style.left)>-248 && -248 < parseInt(slidingDiva.style.left)){
 	
	slideIt3();
	}
	if (-248 > parseInt(slidingDiva.style.left)){
		slideIt4();
		//alert("htfhd");
		}
	}

function slideIt3()
{
	var slidingDiv = document.getElementById("apDiv31");
	var stopPosition = -248;
	var stopPosition2 = -496;
if (parseInt(slidingDiv.style.left) > stopPosition && stopPosition < parseInt(slidingDiv.style.left) )
	{
slidingDiv.style.left = (parseInt(slidingDiv.style.left) -10) + "px";
		setTimeout(slideIt3, 30);
	}
	
}

function slideIt4()
{
	var slidingDiv = document.getElementById("apDiv31");
	var stopPosition = -238;
	var stopPosition2 = -496;
	var stops = "go";
	
if (parseInt(slidingDiv.style.left) > stopPosition2 && stopPosition >= parseInt(slidingDiv.style.left) )
	{
slidingDiv.style.left = (parseInt(slidingDiv.style.left) -10) + "px";
		setTimeout(slideIt4, 30);
	}
	
}
