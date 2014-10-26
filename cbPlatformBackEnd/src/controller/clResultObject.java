package controller;

public class clResultObject {
	private int resultScore 	= 0;
	private int mandtFlg    	= 0; //0 = false; 1 = true
	private String resultLog	= null;
	
	public clResultObject( int score, int flg, String log){
		resultScore = score;
		mandtFlg    = flg;
		resultLog   = log;
	}
	
	public int getScore(){
		return resultScore;
	}
	
	public int getFlg(){
		return mandtFlg;
	}
	
	public String getLog(){
		return resultLog;
	}
}
