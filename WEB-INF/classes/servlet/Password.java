package servlet;


import javax.mail.Message;

import login.*;

import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.*;
import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;

public class Password extends HttpServlet {

	private static final String SMTP_HOST_NAME = "smtp.gmail.com";
	private static final int SMTP_HOST_PORT = 465;
	private static final String SMTP_AUTH_USER = "anujaagrw@gmail.com";
	private static final String SMTP_AUTH_PWD = "latavijayarpit";
	private static String from = "anujaagrw@gmail.com";
	private static String to;
	public void doGet(HttpServletRequest request,HttpServletResponse response)
	{try
	{
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		    try
		    {
		    	String email=request.getParameter("email");
			UserService usv = new UserService();
			UserDTO us = new UserDTO();
			List list = usv.getUserName(email);
			to = email;
			Iterator iter = list.iterator();
		    if(iter.hasNext())
		    {
		    	us=(UserDTO)iter.next();
		    	String subject = "Testing SMTP-SSL";
		    	
		    	String msg = "your USERNAME IS" + us.getUsername() + "\n"+ "Your Password is "+us.getPassword();
		    	
		    	Properties props = new Properties();

		    	props.put("mail.transport.protocol", "smtps");
		    	props.put("mail.smtps.host", SMTP_HOST_NAME);
		    	props.put("mail.smtps.auth", "true");
		    	// props.put("mail.smtps.quitwait", "false");
		    	
		    	Session mailSession = Session.getDefaultInstance(props);
		    	mailSession.setDebug(true);
		    	Transport transport = mailSession.getTransport();

		    	MimeMessage message = new MimeMessage(mailSession);
		    	message.setSubject(subject);
		    	message.setContent(msg, "text/plain");
		    	message.setFrom(new InternetAddress(from));

		    	message.addRecipient(Message.RecipientType.TO, new InternetAddress(
		    			to));

		    	transport.connect(SMTP_HOST_NAME, SMTP_HOST_PORT, SMTP_AUTH_USER,
		    			SMTP_AUTH_PWD);

		    	transport.sendMessage(message, message
		    			.getRecipients(Message.RecipientType.TO));
		    	transport.close();
		    	RequestDispatcher rd = request.getRequestDispatcher("/forgot_password.jsp");
		    	rd.forward(request, response);
		    	    }
		    else
		    {
		    	request.setAttribute("error","INVLAID EMAIL-ID" );
		    	RequestDispatcher rd = request.getRequestDispatcher("/password.jsp");
		    	rd.forward(request, response);
		    }
		    	
	
		    	


			} catch (Exception e) {
				// TODO Auto-generated catch block
				request.setAttribute("error","Due to some technical problems process could not be completed ,Please try again later" );
		    	RequestDispatcher rd = request.getRequestDispatcher("/password.jsp");
		    	rd.forward(request, response);
			}
	}catch(Exception e)
	{
		
	}
	}
}