package com.propertyfille;

import java.io.IOException;

public class File_Reader_manager {
	
	
	public File_Reader_manager() {
		// TODO Auto-generated constructor stub
	}
	public static File_Reader_manager gerinstance() {
		
		File_Reader_manager fr = new File_Reader_manager();
		return fr;
		
	}
	
	public Configuration_reader getinstanceCR() throws IOException {
		
		Configuration_reader cr = new Configuration_reader();
		return cr;
		
	}

}
