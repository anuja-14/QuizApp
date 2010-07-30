<%@ page import="question_info.*,login.*,java.util.*" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<b><u><big><center> <font color=blue> <br><br>Admin-Interface</font></center></b></u></big> 
<p align=right> <font color=red> Click On The Id To Modify A Question </font></p> 
<p align=right ><font color=blue> <li><a href="logout" target="_blank">LogOut</a></li></font></p> 
</head>
<body background=images.jpeg>
<h2><font color=blue> Beginners </font></h2> 
<form action="admin" method="post"> 
<table border="1"> 
<tr>
<th> </th> 
    <th>Id</th>
    <th>Question</th>
    <th>Option A</th>
    <th>OPtion B</th>
    <th>Option C</th>
    <th>OPtion D</th>
    <th>Level</th>
    <th>Answer</th>
    <th>Comments</th>
  </tr>
<%

int i;
	QuestionsService qsv = new QuestionsService();
	ArrayList beginners = (ArrayList) qsv.search("1");
	for (i=0;i<beginners.size();i++)
	{
			QuestionsDTO qs = (QuestionsDTO) beginners.get(i);
			%>
<tr>
<td>	
	<input type="checkbox" name="ids" value=<%=qs.getId()%> >
		</td>
	<td>	
	<a href="modify.jsp?id=<%=qs.getId()%>"><%=qs.getId()%></a>
		</td>
		<td>
	<%=qs.getQue()%>
		</td>
		<td>
		<%=qs.getOpt1()%>
		</td>
		<td>
		<%=qs.getOpt2()%>
		</td>
		<td>
		<%=qs.getOpt3()%> 
		</td>
		<td>
		<%=qs.getOpt4()%>
		</td>
		<td>
		<%=qs.getDiff()%> 
		</td>
		<td>
		<%=qs.getAns()%> 
		</td>
		<td>
		<%=qs.getComments()%> 
		</td>
		</tr>
		<% 
	}
	
	%>
	</table> 
	<br>
	<a href="modify.jsp?diff=1"><input type=button value=Add name=add ></a> 
<input type=submit value=Delete name=delete><br><br>
</form> 

<h2><font color=blue> Mediocre</font></h2> 
<br>
<form action="admin" method="post"> 
<table border="1"> 
<tr>
<th> </th> 
    <th>Id</th>
    <th>Question</th>
    <th>Option A</th>
    <th>OPtion B</th>
    <th>Option C</th>
    <th>OPtion D</th>
    <th>Level</th>
    <th>Answer</th>
    <th>Comments</th>
  </tr>
<%


	ArrayList mediocre = (ArrayList) qsv.search("2");
	for (i=0;i<mediocre.size();i++)
	{
			QuestionsDTO qs = (QuestionsDTO) mediocre.get(i);
			%>
<tr>
<td>	
	<input type="checkbox" name="ids" value=<%=qs.getId()%> >
		</td>
	<td>	
	<a href="modify.jsp?id=<%=qs.getId()%>"><%=qs.getId()%></a>
		</td>
		<td>
	<%=qs.getQue()%>
		</td>
		<td>
		<%=qs.getOpt1()%>
		</td>
		<td>
		<%=qs.getOpt2()%>
		</td>
		<td>
		<%=qs.getOpt3()%> 
		</td>
		<td>
		<%=qs.getOpt4()%>
		</td>
		<td>
		<%=qs.getDiff()%> 
		</td>
		<td>
		<%=qs.getAns()%> 
		</td>
		<td>
		<%=qs.getComments()%> 
		</td>
		</tr>
		<% 
	}
	
	%>
	</table> 
	<br>

	<a href="modify.jsp?diff=2"><input type=button value=Add name=add ></a> 
<input type=submit value=Delete name=delete><br><br>
</form> 

<h2><font color=blue>Champion</font></h2> 
<br>
<form action="admin" method="post"> 
<table border="1"> 
<tr>
<th> </th> 
    <th>Id</th>
    <th>Question</th>
    <th>Option A</th>
    <th>OPtion B</th>
    <th>Option C</th>
    <th>OPtion D</th>
    <th>Level</th>
    <th>Answer</th>
    <th>Comments</th>
  </tr>
<%


	ArrayList champion = (ArrayList) qsv.search("3");
	for (i=0;i<champion.size();i++)
	{
			QuestionsDTO qs = (QuestionsDTO) champion.get(i);
			%>
<tr>
<td>	
	<input type="checkbox" name="ids" value=<%=qs.getId()%> >
		</td>
	<td>	
	<a href="modify.jsp?id=<%=qs.getId()%>"><%=qs.getId()%></a>
		</td>
		<td>
	<%=qs.getQue()%>
		</td>
		<td>
		<%=qs.getOpt1()%>
		</td>
		<td>
		<%=qs.getOpt2()%>
		</td>
		<td>
		<%=qs.getOpt3()%> 
		</td>
		<td>
		<%=qs.getOpt4()%>
		</td>
		<td>
		<%=qs.getDiff()%> 
		</td>
		<td>
		<%=qs.getAns()%> 
		</td>
		<td>
		<%=qs.getComments()%> 
		</td>
		</tr>
		<% 
	}
	
	%>
	</table> 
	<br>

	<a href="modify.jsp?diff=3"><input type=button value=Add name=add ></a> 
<input type=submit value=Delete name=delete><br><br>
</form> 

</body>
</html>