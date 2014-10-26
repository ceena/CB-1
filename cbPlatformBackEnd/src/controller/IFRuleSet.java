package controller;

import java.util.ArrayList;
import java.util.Iterator;

public abstract class IFRuleSet {
	int ID 		   = 0;
	String desc    = null;

	ArrayList<clRuleAtt> alRules = new ArrayList<clRuleAtt>();
	
	public IFRuleSet(int id, String desc){
		this.ID = id;
		this.desc = desc;
	}
	
	public void  addRules(IFRule clRule, int sucR, int mandtR, int scoreR){
		
	}
		
	
	
	public clResultObjectSet evaluate(clFeed feed){
		
		clResultObjectSet resultSet = new clResultObjectSet();
		Iterator<clRuleAtt> iterator = alRules.iterator();
		
		while(iterator.hasNext()){
			clResultObject result = iterator.next().getClRule().checkRule(feed);
			resultSet.addResultObject(result);
		}
	
		return resultSet;
	}
}
