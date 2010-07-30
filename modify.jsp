<%@ page import="question_info.*,java.util.*" %>
<html>
<head>
<b><u><big><center> <font color=blue> <br><br><br><br><br><br><br>Database Modification</font></center></b></u></big> 

</head>
<center>
<br><br><br><br>
<body background="images.jpeg">
<% 
QuestionsDTO qs = new QuestionsDTO();
String id = (String)request.getParameter("id");
String diff= (String)request.getParameter("diff");
if(!(id==null))
{ 
int id_int = Integer.parseInt(id);
QuestionsService qsv = new QuestionsService();	
		qs=qsv.getQuestion(id_int);
		if(diff==null)
{
diff=qs.getDiff();
}

		}
%>
<form method="get" action="add_modify" />
<input type=hidden name="id" value=<%= qs.getId() %>><br><br>
Question<textarea name="que" rows="3" cols="50"><%= qs.getQue() %></textarea> <br><br>
Option1<textarea name="opt1" rows="3" cols="50"><%= qs.getOpt1() %></textarea> <br><br>
Option2<textarea name="opt2" rows="3" cols="50"><%= qs.getOpt2() %></textarea> <br><br>
Option3<textarea name="opt3" rows="3" cols="50"><%= qs.getOpt3() %></textarea> <br><br>
Option4<textarea name="opt4" rows="3" cols="50"><%= qs.getOpt4() %></textarea> <br><br>
Answer<textarea name="ans" rows="3" cols="30"><%= qs.getAns() %></textarea> <font color=red>a,b,c or d</font> <br><br>
Level<input type=text name="diff" value=<%= diff %>><br><br>
Comments<textarea name="comments" rows="3" cols="50"><%= qs.getComments() %></textarea> <br><br>
<input type=submit value=Add name=operation>
<input type=submit value=Modify name=operation><br><br>
</form>    
</center>
</body>
</html>
