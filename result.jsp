<%@ page import="question_info.*" %>
<html>
<head>
<script type="text/javascript" src="menu.js"></script>
<style type="text/css">
html, body {
height: 100%;
margin: 0;
padding: 0;
}
</style>
</head>
<body background="linux_xp.jpg">
<div style="padding:0;height:90%;"> 
  <script language="JavaScript" vqptag="doc_level_settings" is_vqp_html=1 
  vqp_datafile0="menu.js" vqp_uid0=859470>
  cdd__codebase = "";cdd__codebase859470 = "";</script>
  <script language="JavaScript" src="menu.js"></script>
  <script vqptag="placement" vqp_menuid="859470" language="JavaScript">
  create_menu(859470)
  </script>
  <center>
  
  <%
String qs_answered = (String)session.getAttribute("qs_attempted");
String corr_answered = (String)session.getAttribute("correct_ans");
%>
<font color="red">
<table>
<tr>
<td colspan="2">
</td>
<td>
<font color=red><h1> You Have Answered <%= corr_answered%> Question Correctly Out of <%=qs_answered%> </h1></b></font>

</td>
</tr>
</table>
</font>
</body>
</html>
 