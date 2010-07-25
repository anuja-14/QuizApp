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
		int flag=1;
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
		response.setContentType("text/html");
		QuestionsDTO  qs = new QuestionsDTO();
		QuestionsDTO  qs_check = new QuestionsDTO();
		ArrayList id_list= new ArrayList();
		id_list = (ArrayList)session.getAttribute("id_list");
		Iterator iter1=id_list.iterator();
		qs =(QuestionsDTO)session.getAttribute("qs");
			String req_ans=request.getParameter("option");
			if(req_ans.equals(qs.getAns()))
			{
				request.setAttribute("comment_submit","Congo!!Your Answer Was Right");
				while(iter1.hasNext())
				{
					Integer curr_id = (Integer) iter1.next();
					int in_curr_id =curr_id;
					if(in_curr_id==qs.getId())
					{
						flag=0;
						break;
					}
				}
				if(flag==1)
				{
					id_list.add(qs.getId());
					session.setAttribute("id_list",id_list);
				String qs_attempted=(String) session.getAttribute("qs_attempted");
				String correct_ans=(String) session.getAttribute("correct_ans");
				int qs_att = Integer.parseInt(qs_attempted);
				qs_att++;
				int  corr_ans = Integer.parseInt(correct_ans);
				corr_ans++;
				session.setAttribute("qs_attempted",qs_att+"");
				session.setAttribute("correct_ans",corr_ans+"");
				}
				
			}
			else
			{
				String comment_submit="Sorry,Correct Answer was "+qs.getAns();
				request.setAttribute("comment_submit",comment_submit);
				while(iter1.hasNext())
				{
					 Integer curr_id = (Integer) iter1.next();
					int in_curr_id =curr_id;
					if(in_curr_id==qs.getId())
					{
						flag=0;
						break;
					}
				}
				if(flag==1)
				{
					id_list.add(qs.getId());
					session.setAttribute("id_list",id_list);
				String qs_attempted=(String) session.getAttribute("qs_attempted");
				int qs_att = Integer.parseInt(qs_attempted);
				qs_att++;
				session.setAttribute("qs_attempted",qs_att+"");
				
				
				}
			}
		try
		{
			ArrayList question_list =new ArrayList();
			
			question_list = (ArrayList)session.getAttribute("list");
			int id = qs.getId();
			Iterator iter = question_list.iterator();
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
					session.setAttribute("id_list",id_list);
					session.setAttribute("qs",qs_check);
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
doGet(request, response);
}
	
	

}