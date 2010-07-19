<%@ page isErrorPage="true" import="java.io.*" %>
<html>
<head>
</head>
<body>
<font color="red"><%=exception.getMessage()%> <br></font><br><br>
<form action="admin.jsp" method="get">
<input type=submit value=BACK TO ADMIN></form>
<%

out.println("<!--");
StringWriter sw = new StringWriter();
PrintWriter pw = new PrintWriter(sw);
exception.printStackTrace(pw);
out.print(sw);
sw.close();
pw.close();
out.print("-->");
%>
</body>
</html>
