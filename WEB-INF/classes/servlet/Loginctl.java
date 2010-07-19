package servlet;
import java.io.IOException;


import login.*;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;

public class Loginctl extends HttpServlet
{

	public void doGet(HttpServletRequest request,HttpServletResponse response)
	{	try
	{
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		try
		{
		String password = request.getParameter("password");
		String username = request.getParameter("username");
		UserDTO us = new UserDTO();
		UserService usv = new UserService();
		us=usv.getUserInfo(username);
		if(us.getPassword().equals(password))
		{
			RequestDispatcher rd = request.getRequestDispatcher("/login.jsp");
			rd.forward(request,response);
		}
		else
		{	
			String error="INVALID PASSWORD";
			request.setAttribute( "err" ,error);
			RequestDispatcher rd = request.getRequestDispatcher("/homepage.jsp");
			rd.forward(request,response);
		}
        out.println("<HTML>");
        out.println("  <HEAD></HEAD>");
        out.println("  <BODY>");
        out.print("");
        out.println("  </BODY>");
        out.println("</HTML>");
        out.flush();
        out.close();
        
		}
		catch(Exception e)
		{
			String error="INVALID USERNAME";
			request.setAttribute( "err" ,error);
			RequestDispatcher rd = request.getRequestDispatcher("/homepage.jsp");
			rd.forward(request,response);
			
		}
		
	}catch(Exception E)
	{
		
	}
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
doPost(request, response);
}
	
	

}