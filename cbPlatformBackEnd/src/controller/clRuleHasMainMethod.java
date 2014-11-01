package controller;

public class clRuleHasMainMethod extends IFRule{

	public clRuleHasMainMethod(){
		int id = 1002;
		String desc = "Checks if the class has a main method";
		
		this.setAttributes(id, desc);
	}
	@Override
	public clResultObject checkRule(clFeed feed) {
		// TODO Auto-generated method stub
		return new clResultObject(0, 0, " implement clRuleHasMainMethod checkRule");
	}

}
