<%@ page import="question_info.*" %>
<html>
<head>
<script type="text/javascript" src="menu.js"></script>
</head>
<body background="leaf-tree-border-frame1.jpg">
<div style="padding:0;height:90%;"> 
  <script language="JavaScript" vqptag="doc_level_settings" is_vqp_html=1 
  vqp_datafile0="menu.js" vqp_uid0=859470>
  cdd__codebase = "";cdd__codebase859470 = "";</script>
  <script language="JavaScript" src="menu.js"></script>
  <script vqptag="placement" vqp_menuid="859470" language="JavaScript">
  create_menu(859470)
  </script>
  <center>
  <br /><br /><br />
 <%
QuestionsDTO qs = new QuestionsDTO();
qs = (QuestionsDTO)session.getAttribute("qs");
int id=qs.getId();
%>

<form method="get" action="Quiz"><br><br><br><br><br><br>
<%= qs.getQue()%><br><br>
<INPUT TYPE="radio" NAME="option" value=a><%= qs.getOpt1()%><br><br>
<INPUT TYPE="radio" NAME="option" value=b><%= qs.getOpt2()%><br><br>
<INPUT TYPE="radio" NAME="option" value=c><%= qs.getOpt3()%><br><br>
<INPUT TYPE="radio" NAME="option" value=d><%= qs.getOpt4()%><br><br>
<center><input type="submit" value="LOGIN"></center>
</form>
</body>
</html>