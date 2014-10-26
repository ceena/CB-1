package controller;

import java.io.File;
import java.util.ArrayList;
import java.util.Iterator;

import javax.swing.DebugGraphics;

import org.codehaus.janino.JavaSourceClassLoader;

public abstract class IFObjectValidator {

	ArrayList<IFRule> al = new ArrayList<IFRule>();

	public abstract void loader();

	public clResultObjectSet evaluate(String ruleSetName, clFeed feed) {

		IFRuleSet ruleSet = loadRuleSet(ruleSetName);

		clResultObjectSet resultSet = ruleSet.evaluate(feed);
		
		return resultSet;
	}

	private IFRuleSet loadRuleSet(String ruleSetName) {
		IFRuleSet ruleSet = null;

		ClassLoader c1 = 
			new JavaSourceClassLoader(this.getClass().getClassLoader());

		try {

			ruleSet = (IFRuleSet) c1.loadClass(ruleSetName).newInstance();

		} catch (InstantiationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return ruleSet;
	}
}
