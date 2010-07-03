package QuizApp;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Random;


public class QuestionsDTO {
		private int id ;
		private String que=null;
		private String opt1=null;
		private String opt2=null;
		private String opt3=null;
		private String opt4=null;
		private int diff=0;
		
	 public QuestionsDTO() {
			// TODO Auto-generated constructor stub
		}

		public QuestionsDTO(int id,String que,String opt1,String opt2,String opt3,String opt4,int diff)
		{
			this.id=id;
			this.que=que;
			this.opt1=opt1;
			this.opt2=opt2;
			this.opt3=opt3;
			this.opt4=opt4;
			this.diff=diff;
		}



		public String getQue() {
			return que;
		}



		public void setQue(String que) {
			this.que = que;
		}



		public String getOpt1() {
			return opt1;
		}



		public void setOpt1(String opt1) {
			this.opt1 = opt1;
		}



		public String getOpt2() {
			return opt2;
		}



		public void setOpt2(String opt2) {
			this.opt2 = opt2;
		}



		public String getOpt3() {
			return opt3;
		}



		public void setOpt3(String opt3) {
			this.opt3 = opt3;
		}



		public String getOpt4() {
			return opt4;
		}



		public void setOpt4(String opt4) {
			this.opt4 = opt4;
		}





		public int getId() {
			return id;
		}



		public void setId(int id) {
			this.id = id;
		}



		public int getDiff() {
			return diff;
		}



		public void setDiff(int diff) {
			this.diff = diff;
		}

}