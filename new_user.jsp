<html>
<head>
<font color="red"><p align=right>* fields are mandatory</p><br/><br/></font>
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
	if(frm.email.value=="")
	{
	alert("Email-id CAN NOT BE NULL");
	flag=false;
	}	
if(frm.repassword.value=="")
	{
	alert("repassword CAN NOT BE NULL");
	flag=false;
	}	
	if(!(frm.password.value==frm.repassword.value))
	{
	alert("Passwords do not match");
	flag=false;
	}	
return flag;
}
</script>
</head>
<body>
<font color=red>
<%
if(!(request.getAttribute("error")==null))
{
%>
<%= request.getAttribute("error")%><br><br>
<%
}
%></font>
<form method="get" action="New_account" onsubmit="return validate(this)">
First Name<input type="text" name="firstName" ><br /><br />
Last Name<input type="text" name="lastName" ><br /><br />
*Email-ID<input type="text" name="email" ><br /><br />
*UserName<input type="text" name="username" ><br /><br />
*Password<input type="password" name="password" ><br /><br />
*Re-password<input type="password" name="repassword" ><br /><br />
ContactNumber<input type="text" name="contactNumber" ><br /><br />
<input type=submit value=Submit name=submit>
</form>
</body>
</html>
