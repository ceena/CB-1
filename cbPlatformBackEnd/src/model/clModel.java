package model;

public class clModel {

public static clModel instance = null;
	
	protected clModel() {
		
	}

	public static clModel getInstance(){
		if(instance == null){
			instance = new clModel();
		}
		return instance;
	}
	
	public String fetchRuleSetName(int excNo){
		
		return clExcRuleMap.fetchRuleSetName(excNo);
	}
}
