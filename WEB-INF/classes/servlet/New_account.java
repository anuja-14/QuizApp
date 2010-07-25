package servlet;

import java.io.IOException;


import login.*;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;

public class New_account extends HttpServlet
{

	public void doGet(HttpServletRequest request,HttpServletResponse response)
	{	try
	{
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		try
		{
		
			 String username=request.getParameter("username");
			 String password=request.getParameter("password");
			String email =request.getParameter("email");
			 String firstName=request.getParameter("firstName");
			String lastName= request.getParameter("lastName");
			String contactNumber=request.getParameter("contactNumber");
			UserDTO us = new UserDTO(username,password,email,firstName,lastName,contactNumber);
			UserService usv = new UserService();
			usv.add(us);
	    	RequestDispatcher rd = request.getRequestDispatcher("/New_account.jsp");
	    	rd.forward(request, response);
		}
		catch(Exception e)
		{
			request.setAttribute("error","Username Already Exists , please choose a Different Username" );
	    	RequestDispatcher rd = request.getRequestDispatcher("/new_user.jsp");
	    	rd.forward(request, response);
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