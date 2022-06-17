package com.amazon_runner_class.org;



import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.Amazon_baseclass.Base_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(features="src\\test\\java\\com\\amazon\\feature",
	glue="com.amazon_stepdefinations.org",
	monochrome = true,
	dryRun = false,
	strict = true,
	plugin = {"html:Repot/Html_Report",
			"pretty",
			"json:Report/json_Report.json",
			"com.cucumber.listener.ExtentCucumberFormatter:Extent_Folder/Extend_Report.html"
	}
	)
	public class Runner_project {

		public static WebDriver driver;
		
		@BeforeClass
		public static void setUp()   {
			
		driver = Base_Class.getBrowser("chrome");
		
		}
		@AfterClass
		public static void tearDown() {
			
			Base_Class.close();
			
	
		}
	}


