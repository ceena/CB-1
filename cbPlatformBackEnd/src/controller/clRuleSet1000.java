package controller;

public class clRuleSet1000 extends IFRuleSet {

	public clRuleSet1000() {
		super(2001, "Prelim Class Checks");
		super.addRules(new clRuleHasClassName(), 1002, 1, 100);
		super.addRules(new clRuleHasMainMethod() , 1003, 1, 100);
	}
	
}
