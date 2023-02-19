window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p339","name":"getStudent","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"ITI-Exam System DB","id":"d10"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"getStudent"},{"field":"Type","value":"Procedure"}],"script":"CREATE proc getStudent @id int = null\r\nas \r\nif @id is null\r\n\tselect * from student\r\nelse \r\n\tbegin\r\n\tif exists(select st_id from student  where st_id = @id)\r\n\t\t\tselect * from student where st_id = @id\r\n\telse\r\n\t\tselect 'student does not exist'\r\n\tend","parameters":[{"name":"id","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2023-01-19 22:19"};