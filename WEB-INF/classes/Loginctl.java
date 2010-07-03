	import java.io.IOException;	
	import java.io.PrintWriter;
	import login.*;
	import javax.servlet.http.HttpServlet;
	import javax.servlet.http.HttpServletRequest;
	import javax.servlet.http.HttpServletResponse;	
	import javax.servlet.ServletException;

public class Loginctl extends HttpServlet
	{

	public void doGet(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException
	{	
		UserDTO qs=new UserDTO();
		UserService qsv=new UserService();
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String username =request.getParameter("username");
		String first_name = request.getParameter("first_name");
		out.println(username);
	try
	{

		qs=qsv.getUserInfo(username);
		out.println(qs.getPassword());
		}catch(Exception e)
		{
		out.println(e.getMessage());
		};
        out.println("<HTML>");
        out.println("  <HEAD><TITLE>A Servlet</TITLE></HEAD>");
        out.println("  <BODY>");
        out.print("  Hello World hey");
        out.println("  </BODY>");
        out.println("</HTML>");
        out.flush();
        out.close();
		
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
	    throws ServletException, IOException {
	doPost(request, response);
	}
	
	

	}
