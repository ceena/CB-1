package controller;

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

	public clResultObject evaluateFeed(int excNo, clFeed feed) {
		clResultObject resultObject = null;
		
		//Get corresponding ruleSet from DB
		
		
		
//		resultObject = 
		return resultObject;
		
		
	}

}
