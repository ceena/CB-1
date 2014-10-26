package model;

public class clExcRuleMap {
	clExcRuleMap instance = null;
	
	//This can be replaced with a select on DB
	public static String fetchRuleSetName(int excNo){
		
		String ruleSetName = null;
		switch(excNo){
		case 1001:
			 ruleSetName = "controller.clRuleSet1001";
			 break;
		case 1002:
			 ruleSetName = "controller.clRuleSet1002";
			 break;
		}
		
		return ruleSetName;
	}
}
