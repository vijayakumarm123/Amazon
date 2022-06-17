package com.amazon_stepdefinations.org;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

import com.Amazon_baseclass.Base_Class;
import com.amazon_runner_class.org.Runner_project;
import com.page_object_manager.org.Object_Manager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Step_Defination extends Base_Class {

	public static WebDriver driver = Runner_project.driver;
	public static Object_Manager pom = new Object_Manager(driver);
	
	@Given("^user launch the application$")
	public void user_launch_the_application() throws Throwable {
		getUrl("https://www.amazon.in/");
	    
	}

	@Then("^user click the fashion button it navigate to next page$")
	public void user_click_the_fashion_button_it_navigate_to_next_page() throws Throwable {
		clickonElement(pom.getFb().getFashion());
	    
	}

	@Then("^user move the curser  to women and click the saree button it will navigate to next page$")
	public void user_move_the_curser_to_women_and_click_the_saree_button_it_will_navigate_to_next_page() throws Throwable {
	   actions("moveelement", pom.getSaree().getWomen(), pom.getSaree().getSarees()); 
	}

	@Then("^user click the jute silk saree it will navigate to next page$")
	public void user_click_the_jute_silk_saree_it_will_navigate_to_next_page() throws Throwable {
		
		driver.manage().timeouts().implicitlyWait(12, TimeUnit.SECONDS);
		clickonElement(pom.getSs().getJute_Silk_Saree());
	    
	}

	@Given("^user select wine color$")
	public void user_select_wine_color() throws Throwable {
		driver.manage().timeouts().implicitlyWait(12, TimeUnit.SECONDS);
		clickonElement(pom.getAc().getWinecolour());
	   
	}

	@Then("^user to click the Add To Cart Button it will navigate to next page$")
	public void user_to_click_the_Add_To_Cart_Button_it_will_navigate_to_next_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(12, TimeUnit.SECONDS);
		clickonElement(pom.getAc().getAdd_To_Cart());
	}
}
