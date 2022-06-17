package com.page_object_manager.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import com.pom.org.Addto_Cart_Page;
import com.pom.org.Fashion_Button;
import com.pom.org.Sarees;
import com.pom.org.Select_Sarees;

public class Object_Manager {
	
public WebDriver driver;
	
	private Addto_Cart_Page ac;



	private Fashion_Button fb;
	
	private Sarees saree;
	
	private Select_Sarees ss;
	
	public Object_Manager(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver, this);
	}
	
	public Addto_Cart_Page getAc() {
		ac = new Addto_Cart_Page(driver);
		return ac;
	}

	public Fashion_Button getFb() {
		fb = new Fashion_Button(driver);
		return fb;
	}

	public Sarees getSaree() {
		saree = new Sarees(driver);
		return saree;
	}

	public Select_Sarees getSs() {
		ss = new Select_Sarees(driver);
		return ss;
	}

}
