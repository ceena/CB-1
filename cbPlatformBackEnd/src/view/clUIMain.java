package view;

import controller.clController;
import controller.clFeed;
import controller.clFeeder;
import controller.controllerConfig;

public class clUIMain {

	static clController controller = null;
	static clFeed feedFromUI = null;
	static int objectType = 0;
	
	public static void main(String[] args) {
		initialize();

		if(clFeeder.getInstance().getFeed().getValue() != feedFromUI.getValue()){
			clController.getInstance().evaluateFeed(controllerConfig.OBJECT_TYPE_CODE, feedFromUI);
		}
	}

	
	public static void initialize() {
		String str = new String( 
					"public class HelloWorld(){"
				  + "public static void main(String[] args){"
				  + "System.out.println(\"Hello World!\")"
				  + "}}" );
		
		
		controller = clController.getInstance();
		feedFromUI.setValue(str);
		
		
	}
}
