package controller;

import org.codehaus.commons.compiler.CompileException;
import org.codehaus.janino.ScriptEvaluator;

public class clRuleHasClassName extends IFRule {

	public clRuleHasClassName(){
		int id = 1001;
		String desc = "Checks if the class has a class name";
		
		this.setAttributes(id, desc);
	}
	@Override
	public clResultObject checkRule(clFeed feed) {
/*		ScriptEvaluator se = new ScriptEvaluator();

		try {
			se.cook(feed.getValue());
		} catch (CompileException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		Class<? extends ScriptEvaluator> clSe =  se.getClass();
		return null;*/
		
		if(feed.isCooked){
			Class cl = feed.getCompiledFeed().loadClass("Guitar2");
			if(cl != null)
				return new clResultObject(0, 1, " Classname matched.");
			else
				return new clResultObject(0, 0, " Classname mismatch.");
		}else		
			return new clResultObject(0, 0, " Feed not cooked at clRuleHasClassName.");
	}

	
}
