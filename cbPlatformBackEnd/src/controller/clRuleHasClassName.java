package controller;

import org.codehaus.commons.compiler.CompileException;
import org.codehaus.commons.compiler.jdk.ScriptEvaluator;

public class clRuleHasClassName extends IFRule {

	public clRuleHasClassName(){
		int id = 1001;
		String desc = "Checks if the class has a class name";
		
		this.setAttributes(id, desc);
	}
	@Override
	public clResultObject checkRule(clFeed feed) {
		ScriptEvaluator se = new ScriptEvaluator();

		try {
			se.cook(feed.getValue());
		} catch (CompileException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		Class<? extends ScriptEvaluator> clSe =  se.getClass();
		return null;
		
		
	}

	
}
