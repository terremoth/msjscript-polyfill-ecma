var main = WScript.GetObject(".\\Universal_CCW.Universal_CCW_Factory");
	
	// create and wrap a new Form object
	var form = main.New_Object("form1", "System.Windows.Forms, Version=2.0.0.0, " +
         "Culture=neutral, PublicKeyToken=b77a5c561934e089", "System.Windows.Forms.Form");
	form.Set_Property_Value("Text", "A Blank Form");
	
	// create and wrap a new Textbox object, and set its Parent to the form object
	var textbox = main.New_Object("txt1", "System.Windows.Forms, Version=2.0.0.0, " +
         "Culture=neutral, PublicKeyToken=b77a5c561934e089", 
				"System.Windows.Forms.TextBox");
	textbox.Set_Property_Value("Parent", form);
	textbox.Set_Property_Value("Height", 200);
	textbox.Set_Property_Value("Width", 200);
	textbox.Set_Property_Value("Multiline", true);
	
	// cause the form object to become visible
	form.Call_Method("Show");