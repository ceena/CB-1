package controller;

public abstract class IFRule {
	String ID   = null;
	String desc = null;
	
	public void setAttributes(String id, String desc){
		this.ID = id;
		this.desc = desc;
	}
	public abstract clResultObject checkRule(clFeed feed);
}
