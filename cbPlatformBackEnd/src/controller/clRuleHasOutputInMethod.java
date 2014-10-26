package controller;

public class clRuleHasOutputInMethod extends IFRule {

	public clRuleHasOutputInMethod (){
		int id = 1003;
		String desc = "Checks if there is an output statement in a method";
		
		this.setAttributes(id, desc);
	}
	
	@Override
	public clResultObject checkRule(clFeed feed) {
		// TODO Auto-generated method stub
		return null;
	}

}
