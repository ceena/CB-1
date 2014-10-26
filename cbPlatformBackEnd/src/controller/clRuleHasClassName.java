package controller;

public class clRuleHasClassName extends IFRule {

	public clRuleHasClassName(){
		String id = "HasClassName";
		String desc = "Checks if the class has a class name";
		
		this.setAttributes(id, desc);
	}
	@Override
	public clResultObject checkRule(clFeed feed) {
		// TODO Auto-generated method stub
		return null;
	}

}
