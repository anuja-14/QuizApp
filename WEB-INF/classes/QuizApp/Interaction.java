package QuizApp;

import java.io.ObjectInputStream.GetField;

import org.hibernate.Criteria;


public class Interaction {
	
	public static void main(String args[]) throws Exception
	{		
		QuestionsDTO qs = new QuestionsDTO(1,"q","d","b","c","d",2);
		QuestionsService qsv = new QuestionsService ();
		qsv.add(qs);
		System.out.println(qs.getOpt1());
		
}
}
