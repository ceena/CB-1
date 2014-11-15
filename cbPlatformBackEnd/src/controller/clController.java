package controller;

import model.clModel;

//clas controller
public final class clController {
	
public static clController instance = null;
	
	protected clController() {
		
	}

	public static clController getInstance(){
		if(instance == null){
			instance = new clController();
		}
		return instance;
	}

	public clResultObjectSet evaluateFeed(int excNo, clFeed feed) {
		
		clObjectValidator codeValidator = new clObjectValidator();
		clResultObjectSet resultObjectSet = null;
		
		//Get corresponding ruleSet from DB
		String ruleSetName = clModel.getInstance().fetchRuleSetName(excNo);
		
		resultObjectSet = codeValidator.evaluate(ruleSetName, feed);
		
		
//		resultObject = 
		return resultObjectSet;
		
		
	}

}
