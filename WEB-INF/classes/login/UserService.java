package login;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.*;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;


public class UserService {
	
	private SessionFactory sessionFactory ; 
	public UserService()
	{
		sessionFactory =  new Configuration().configure().buildSessionFactory();
	}
	
	public List getUserName(String emailid)
	{
		Session s = sessionFactory.openSession();
		List list ;
		
		Criteria crit =s.createCriteria(UserDTO.class);
		crit.add(Restrictions.like("email", emailid));
		list=crit.list();
		s.close();
		return list;
	}
	public UserDTO getUserInfo(String username)
	{
		UserDTO qs =  new UserDTO();
	Session s = sessionFactory.openSession();
	qs = (UserDTO) s.get(UserDTO.class,username);
	
	s.close();
	return qs;
	}
	
	
	
	public void add (UserDTO qs)
	{
		Session s = sessionFactory.openSession();
		Transaction tx = s.beginTransaction();
		s.save(qs);
		
		tx.commit();
		s.close();
	}
	
	public void update(UserDTO qs)
	{
		Session s = sessionFactory.openSession();
		Transaction tx = s.beginTransaction();
		s.update(qs);
		
		tx.commit();
		s.close();
	}
	
	public void delete(UserDTO qs)
	{
		Session s = sessionFactory.openSession();
		Transaction tx = s.beginTransaction();
		s.delete(qs);
		
		tx.commit();
		s.close();
	}
	
	
}