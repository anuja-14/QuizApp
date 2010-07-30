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
	
	public void prepareDatabase()
	{
		Session s = sessionFactory.openSession();
		Transaction tx = s.beginTransaction();
		QuestionsDTO qs1= new QuestionsDTO(1,"The Linux kernel was invented by","1","Linus Pauling.","Linus Torvalds","Linus Thorwalds","Linus Van Pelt","b","While Thorwalds can be pronounced Torvalds, it's not the wayour Linux founder spells it. Linus Pauling was a physicist, and LinusVan Pelt carries a blanky.");
		QuestionsDTO qs2= new QuestionsDTO(2,"Which of the following is not a Linux distro?","1","Debian","Yellow Devil","Yellow Dog","opt4=Devil-Linux","b","At least there's no Yellow Devil distro yet, until one of yousmarties goes and creates one tonight just to prove us wrong. Geek");
		QuestionsDTO qs3= new QuestionsDTO(3,"What is a Linux ISO?","2","An Independent System Organizer for compiling Linux apps","A particular isolated section of Linux code","A downloadable file containing a CD-ROM disc image of Linux","An Incredibly Stupid Operator of Linux","c","Yes, yes, an ISO isn't particular to Linux but a Linux ISO is.Read carefully. Doesn't it just make you burn?");
		QuestionsDTO qs4= new QuestionsDTO(4,"What animal represents Linux?","2","Bob the Mandrake","Tux the Penguin","George the Wombat","Bill the evil bat of greed","b","Tux the Penguin.Although we feel a mandrake plant named Bob would be a great mascotfor a certain distro. A plant can too be a mascot. Kingdomist.");
		QuestionsDTO qs5= new QuestionsDTO(5,"What is GNU/Linux?","3","The official name of the complete Linux OS according to Richard Stallman","A combination of a free software kernel with Linux apps","A fancy way of identifying new distros","A distro of Linux meant for wildebeests","c","The official name of the complete Linux OS according toRichard Stallman.And don't mess with Mr. Stallman on this, he means it.");
		QuestionsDTO qs6= new QuestionsDTO(6,"Which of the following is not a Linux GUI?","3","Xfree86","KDE","Motif","Gnome","a","Xfree86 is an opensource implementation of the X Window System, not a GUI itself.Although you'll probably need a little X to get GUI.");
				
		s.save(qs1);
		s.save(qs2);
		s.save(qs3);
		s.save(qs4);
		s.save(qs5);
		s.save(qs6);
		tx.commit();
		s.close();
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