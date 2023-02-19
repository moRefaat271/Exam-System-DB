window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p305","name":"addCourse","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"ITI-Exam System DB","id":"d10"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"addCourse"},{"field":"Type","value":"Procedure"}],"script":"CREATE proc addCourse @duration int ,@name varchar(50)\r\nas\r\nbegin try \r\n\tinsert into course values(@duration, @name)\r\nend try \r\nbegin catch\r\n\tselect ' Invalid ----> you cannot add course'\r\nend catch","parameters":[{"name":"duration","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"name","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2023-01-19 22:19"};