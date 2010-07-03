package servlet;
import java.io.IOException;
import QuizApp.*;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;

public class Loginctl extends HttpServlet
{

	public void doGet(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException
	{
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String first_name = request.getParameter("first_name");
        out.println("<HTML>");
        out.println("  <HEAD><TITLE>A Servlet</TITLE></HEAD>");
        out.println("  <BODY>");
        out.print("  Hello World ");
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
