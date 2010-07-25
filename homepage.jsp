<html>
<head>
<script type="text/javascript">
function validate(frm)
{
var flag=true;
if(frm.username.value=="")
	{
	alert("USERID CAN NOT BE NULL");
	flag=false;
	}	
if(frm.password.value=="")
	{
	alert("PASSWORD CAN NOT BE NULL");
	flag=false;
	}
return flag;
}

</script>


</head>
<body bgcolor="0099FF">
<p align=right><a href="password.jsp">forgot password??</a><br/><br/>
<p align=right><a href="openid">use gmail or yahooid to login</a>
 <p align=right><a href="new_user.jsp">New User ??</a>
</p>
<center> <%
String error = (String)request.getAttribute("err");
if(!(error==null))
{ 
%>
<%= error%>
<%
}
%><table >
<tr>
<td bgcolor="silver">
<br><br><br>
<form method="get" action="loginctl" onsubmit="return validate(this)">
UserName<input type="text" name="username" ><br /><br />
Password<input type="password" name="password"><br /><br />
<center><input type="submit" value="LOGIN"></center>

</form>
</td> 
</tr> 
</table>
<marquee><img src="buygreen-linux-penguin.jpg"></marquee>
</body>
</html>
<!--if(!(frm.password.value.equals(frm.re_password.value)))
{
alert("PASSWORDS DO NOT MATCH");
flag=false;
}

Retype Password <input type="password" name="re_password"><br><br> -->