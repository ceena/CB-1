package controller;

public class clRuleHasClassName extends IFRule {

	public clRuleHasClassName(){
		int id = 1001;
		String desc = "Checks if the class has a class name";
		
		this.setAttributes(id, desc);
	}
	@Override
	public clResultObject checkRule(clFeed feed) {
		// TODO Auto-generated method stub
		return null;
	}

}
