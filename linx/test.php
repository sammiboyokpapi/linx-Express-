<html>
<head>
<title></title>
<script language="javascript">
fields = "";
function runn(value){
	if (value == 'lagos')  {
document.getElementById('sam').innerHTML = "Places in Lagos <input type='button' id='dan' onclick='reset()' value='Reset fields' /> <select><option value='ajah'>Ajah</option></select> ";
	}	
	}



</script>
<style type="text/css">
#sam {
	position: absolute;
	width: 200px;
	height: 115px;
	z-index: 1;
	left: 84px;
	top: 175px;
}
</style>
</head>
<body>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<form name="form" action="form.php" method="post">
Title: <input type="text" name="title" />
<br />Name: <input type="text" name="name" />
<br />Copy: <input type="text" name="copy" />

<select name="sel" id="sel">
 
  <option value="all">all</option>
 <option value="abia"  onClick="runn('abia')">Abia</option>
 <option value="lagos"  onClick="runn('lagos')">Lagos</option>
 
</select>
<br /><input type="button" onClick="addInput()" name="add" value="Add erase button" />


<div id="text">

</div>
</form>
<div id="sam">


<div class="fb-like" data-href="https://www.facebook.com/trustmestore" data-send="true" data-width="100" data-show-faces="true"></div></div>
</body>
</html>