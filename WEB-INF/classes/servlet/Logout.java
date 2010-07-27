package servlet;
import java.io.IOException;


import login.*;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;

import question_info.QuestionsService;

public class Logout extends HttpServlet
{

	public void doGet(HttpServletRequest request,HttpServletResponse response)
	{	try
	{
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		HttpSession session = request.getSession(true);
		session.invalidate();
		RequestDispatcher rd = request.getRequestDispatcher("/homepage.jsp");
		rd.forward(request,response);
		
	}catch(Exception E)
	{
		
	}
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
doPost(request, response);
}
	
	

}