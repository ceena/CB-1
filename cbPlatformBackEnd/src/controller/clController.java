package controller;

import controller.controllerConfig;

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

	public boolean evaluateFeed(int objectType, clFeed feed) {
		
		switch (objectType) {
		case 1:
			
			
			break;

		default:
			break;
		}
		
		return false;
		
		
	}

}
