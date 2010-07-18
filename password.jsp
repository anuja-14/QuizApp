<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>

</head>
<body>
<H1> Forgot Username </H1><br /><br /><br />
<font color=red>
<%
if(!(request.getAttribute("error")==null))
{
%>
<%= request.getAttribute("error")%><br><br>
<%
}
%></font>
Please Enter Your Username , Your new Password will be send to your E-mail id <br /><br />
<form method="get" action="password">
Email-id<input type="text" name="email" ><br /><br /
<center><input type="submit" value="LOGIN"></center>

</form>

</body>
</html>