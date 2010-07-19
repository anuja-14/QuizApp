package servlet;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;

import question_info.QuestionsDTO;
import question_info.QuestionsService;


public class levelctl extends HttpServlet
{

	public void doGet(HttpServletRequest request,HttpServletResponse response)
	{	try
	{
		QuestionsService qsv = new QuestionsService();
		QuestionsDTO qs = new QuestionsDTO();
		String diff=null;
		String level = request.getParameter("level");
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		HttpSession session = request.getSession(true);
		RequestDispatcher rd = request.getRequestDispatcher("/quiz.jsp");
		try
		{
		if(level.equals("BEGINNERS"))
		{
		diff="1";
		}
		else if(level.equals("CHAMPION"))
		{
			diff="2";
		}
		else
		{
			diff="3";;
		}
		int id;
		ArrayList question_list =new ArrayList();
		ArrayList id_list= new ArrayList();
		question_list = (ArrayList)qsv.search(diff);
		Iterator iter=question_list.iterator();
		if(iter.hasNext())
		{
			qs=(QuestionsDTO)iter.next();
		}
		id=qs.getId();
		Integer id_ob = new Integer(id);
		session.setAttribute("list", question_list);
		id_list.add(id_ob);
		session.setAttribute("id_list",id_list);
		session.setAttribute("qs", qs);
		rd.forward(request,response);
		
		}catch(Exception e)
		{		
			out.println(e.getMessage());
			out.println("Exception");
			out.println(level);
			out.println(diff);
			out.println(qs.getOpt1());
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