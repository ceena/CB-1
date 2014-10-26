package controller;

public abstract class IFRule {
	int ID      = 0;
	String desc = null;
	
	public void setAttributes(int id, String desc){
		this.ID = id;
		this.desc = desc;
	}
	public abstract clResultObject checkRule(clFeed feed);
}
