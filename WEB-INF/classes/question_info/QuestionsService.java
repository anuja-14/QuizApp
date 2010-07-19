package question_info;

import java.util.ArrayList;
import java.util.List;



import org.hibernate.*;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;

import com.tombrus.javaParser.Token.Iterator;



public class QuestionsService {
	
	private SessionFactory sessionFactory ; 
	public QuestionsService()
	{
		sessionFactory =  new Configuration().configure().buildSessionFactory();
	}
	
	public QuestionsDTO getQuestion(int id)
	{
		QuestionsDTO qs =  new QuestionsDTO();
	Session s = sessionFactory.openSession();
	qs = (QuestionsDTO) s.get(QuestionsDTO.class,id);
	
	s.close();
	return qs;
	}
	
	public List search(String diff)
	{
	
		Session s = sessionFactory.openSession();
		Transaction tx = s.beginTransaction();
		Criteria crit = s.createCriteria(QuestionsDTO.class);
		crit.add(Restrictions.like("diff",diff));
		List list = (List)crit.list();
		tx.commit();
		s.close();
		return list;
	}
	
	public void add (QuestionsDTO qs)
	{
		Session s = sessionFactory.openSession();
		Transaction tx = s.beginTransaction();
		s.save(qs);
		
		tx.commit();
		s.close();
	}
	
	public void update(QuestionsDTO qs)
	{
		Session s = sessionFactory.openSession();
		Transaction tx = s.beginTransaction();
		s.update(qs);
		
		tx.commit();
		s.close();
	}
	
	public void delete(QuestionsDTO qs)
	{
		Session s = sessionFactory.openSession();
		Transaction tx = s.beginTransaction();
		s.delete(qs);
		
		tx.commit();
		s.close();
	}
	
	
}