package servlet;
import java.io.IOException;


import login.*;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;

import question_info.QuestionsDTO;

public class Quiz extends HttpServlet
{

	public void doGet(HttpServletRequest request,HttpServletResponse response)
	{	try
	{
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
		response.setContentType("text/html");
		QuestionsDTO  qs = new QuestionsDTO();
		QuestionsDTO  qs_check = new QuestionsDTO();
		qs =(QuestionsDTO)session.getAttribute("qs");
		try
		{
			out.println("flag2");
			ArrayList question_list =new ArrayList();
			ArrayList id_list= new ArrayList();	
			question_list = (ArrayList)session.getAttribute("list");
			id_list = (ArrayList)session.getAttribute("id_list");
			int id = qs.getId();
			Iterator iter = question_list.iterator();
			out.println("flag2");
			while(iter.hasNext())
			{
				
				 qs_check = (QuestionsDTO)iter.next();
				int check_id=qs_check.getId();
				if(check_id==id)
				{
					if(iter.hasNext())
					{
					qs_check=(QuestionsDTO)iter.next();
					int id_add=qs_check.getId();
					Integer id_ob = new Integer(id_add);
					id_list.add(id_ob);
					out.println("flag3");
					session.setAttribute("id_list",id_list);
					session.setAttribute("qs",qs_check);
					out.println("flag4");
					RequestDispatcher rd = request.getRequestDispatcher("/quiz.jsp");
					rd.forward(request,response);
					}
					else
					{
						RequestDispatcher rd = request.getRequestDispatcher("/result.jsp");
						rd.forward(request,response);
					}
			
				}
				
			}
		}
		catch(Exception e)
		{
				out.println(e.getMessage());
				out.println("hello");
			
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