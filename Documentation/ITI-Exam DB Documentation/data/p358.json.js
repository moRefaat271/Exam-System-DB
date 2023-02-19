window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p358","name":"updateStudent","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"ITI-Exam System DB","id":"d10"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"updateStudent"},{"field":"Type","value":"Procedure"}],"script":"--update\r\nCREATE proc updateStudent \r\n@id int , @first_name varchar(50)=NULL, @last_name varchar(50) = NULL,\r\n@address varchar(50)=NULL, @age int=NULL, @dept_id int =NULL\r\nas\r\nbegin try\r\n\tif exists(select st_id from student where st_id=@id)\r\n\tbegin\r\n\t\tif @first_name is not null\r\n\t\t\tupdate student set st_fname = @first_name where st_id=@id\r\n\t\tif @last_name is not null\r\n\t\t\tupdate student set st_lname = @last_name where st_id=@id\r\n\t\tif @address is not null\r\n\t\t\tupdate student set adress = @address where st_id=@id\r\n\t\tif @age is not null\r\n\t\t\tupdate student set age = @age where st_id=@id\r\n\t\tif @dept_id is not null\r\n\t\t\tupdate student set dept_id = @dept_id where st_id=@id\r\n\tend\r\n\telse \r\n\t\tselect 'student does not exist'\r\nend try\r\nbegin catch\r\n\tselect 'department does not exist'\r\nend catch","parameters":[{"name":"id","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"first_name","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"last_name","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"address","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"age","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"dept_id","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2023-01-19 22:19"};