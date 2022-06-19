package com.propertyfille;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class Configuration_reader {
	
	public static Properties p = new Properties();
	
public Configuration_reader() throws IOException {
	File fi = new File("C:\\Users\\vijay\\OneDrive\\Desktop\\selinium\\Amazon\\src\\test\\java\\com\\propertyfille\\configuration.properties");

	FileInputStream fis = new FileInputStream(fi);
	
	 p = new Properties();
	 
	 p.load(fis);
}
public String getbrowser() {
	String browser = p.getProperty("browser");
	System.out.println(browser);
	return browser;
}
public String geturl() {
	String url = p.getProperty("url");
	System.out.println(url);
	return url;
}	
}


