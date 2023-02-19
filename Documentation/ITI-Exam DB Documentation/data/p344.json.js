window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p344","name":"getTopic","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"ITI-Exam System DB","id":"d10"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"getTopic"},{"field":"Type","value":"Procedure"}],"script":"CREATE proc getTopic @id int = null\r\nas \r\nif @id is null\r\n\tselect * from Topic\r\nelse \r\n\tbegin \r\n\t\tif exists(select topic_id from Topic  where topic_id = @id)\r\n\t\t\tselect * from topic where topic_id = @id\r\n\t\telse\r\n\t\t\tselect 'topic does not exist'\r\n\tend","parameters":[{"name":"id","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2023-01-19 22:19"};