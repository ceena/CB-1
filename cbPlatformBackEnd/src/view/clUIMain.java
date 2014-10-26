package view;

import controller.clController;
import controller.clFeed;
import controller.clFeeder;
import controller.clResultObject;
import controller.clResultObjectSet;

public class clUIMain {

	static clController controller = null;
	static clFeed feedFromUI;
	static int excNo = 0;
	
	public static void main(String[] args) {
		
		initialize();
//		clFeed feed =clFeeder.getInstance().getFeed();

		if(clFeeder.getInstance().getFeed().getValue() != feedFromUI.getValue()){
			clFeeder.getInstance().getFeed().setValue(feedFromUI.getValue());
			clResultObjectSet evaluationResult = controller.evaluateFeed(excNo, feedFromUI);
		}
	}

	
	public static void initialize() {
		String str = new String( 
					"public class HelloWorld(){"
				  + "public static void main(String[] args){"
				  + "System.out.println(\"Hello World!\")"
				  + "}}" );
		
		
		controller = clController.getInstance();
		feedFromUI = new clFeed(str);
		excNo = 1001;
		
	}
}
