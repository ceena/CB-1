package controller;

public class clFeed {
	String feed = null;
	public clFeed(String str){
		feed = new String(str);
	}
	
	public String getValue(){
		return feed;
	}
	
	public void setValue(String value){
		feed = value;
	}
}
