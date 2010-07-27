<%@ page import="question_info.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript">
function validate(frm)
{
var flag=true;
if(frm.option.value=="")
	{
	alert("Please Select One Answer ");
	flag=false;
	}	
return flag;
}

</script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Shaastra-Distro Quizzing App</title>
<meta name="keywords" content="free website templates, css templates, Metal Curve" />
<meta name="description" content="Metal Curve Template is a free layout for everyone. All free CSS templates are provided by templatemo.com" />
<link href="templatemo_style_quiz.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div id="templatemo_wrapper">

    <div id="templatemo_menu">
        <ul>
            <li><a href="#" class="current">Home</a></li>
            <li><a href="result.jsp" target="_parent">Result</a></li>
            <li><a href="password.jsp" target="_parent">Forgot Password?</a></li>
            <li><a href="new_user.jsp" target="_blank">Register Here</a></li>
            <li><a href="homepage.jsp" target="_blank">LogOut</a></li>
           
        </ul>    	
    </div> <!-- end of templatemo_menu -->
    
    <div id="templatemo_header">
    
        <div id="site_title">
        
            <h1><a href="http://www.templatemo.com/page/1" target="_parent">
               <font color="red" >Quiz-App</font> 
                <span>Linux Iq Test</span>
            </a></h1>
            
        </div> <!-- end of site_title -->
        
    </div> <!-- end of templatemo_header -->
    
    <div id="templatemo_content_wrapper">
    
    	<div id="main_service_section">
        
     		<div class="service_box float_l">
            	 
                 <div class="service_image">
                 
                 </div>
                 
                 <div class="service_text">
                      <font color=red>
  <%
String comment = (String)request.getAttribute("comment_submit");
if(!(comment==null))
{ 
%>
<%= comment%>
<%
}
%>
 <%
QuestionsDTO qs = new QuestionsDTO();
qs = (QuestionsDTO)session.getAttribute("qs");
int id=qs.getId();
%>

<table align="center">
<tr>
<td colspan=10>
</td>
<td background="qq_bod_cnter_x.jpg" width="700" height="335" bgcolor="silver">
<center>
<form method="get" action="Quiz" onsubmit="return validate(this)"><br> <br><br>
<h3>
<%= qs.getQue()%><br><br>
<INPUT TYPE="radio" NAME="option" value="a" /><%= qs.getOpt1()%><br><br>
<INPUT TYPE="radio" NAME="option" value="b" /><%= qs.getOpt2()%><br><br>
<INPUT TYPE="radio" NAME="option" value="c" /><%= qs.getOpt3()%><br><br>
<INPUT TYPE="radio" NAME="option" value="d" /><%= qs.getOpt4()%><br><br>
<input type="submit" name="submit" value="Submit"></center> 
</form></h3>
</td>
</tr>
</table>
</center> 
</font> 
                 </div>
                 
            </div>
            
            <div class="service_box float_r">
            
            	<div class="service_image">
                 </div>
                 <div class="service_text">
                     
                 </div>
            	
            </div>
        	
        </div> <!-- main_service_section -->
        
        <div class="content_section">
        
        	<div class="section_410 float_l">
            	
                
              <div class="cleaner_h20"></div>
                
                 
                 <div class="cleaner_h20"></div>
                
                
            </div>
            
            <div class="section_410 float_r">
            
            	
              <div class="cleaner_h20"></div>
                 
            </div>
            
        </div>
        
        <div class="cleaner_h20"></div>
    
    </div> <!-- end of templatemo_content_wrapper -->
    
    <div id="templatemo_footer">

       
    
        
       
        	 
    
    </div> <!-- end of footer -->

</div> <!-- end of templatemo_wrapper -->
</body>
</html>