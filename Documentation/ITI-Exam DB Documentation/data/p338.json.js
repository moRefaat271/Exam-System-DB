window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p338","name":"getQuestionChoices","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"ITI-Exam System DB","id":"d10"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"getQuestionChoices"},{"field":"Type","value":"Procedure"}],"script":"create proc getQuestionChoices @id  int = null\r\nas\r\nif @id is null\r\n\tselect * from question_choices\r\nelse\r\nbegin\r\nif @id is not null and @id in (select q_id from question_choices where Q_id=@id) \r\n\tselect * from question_choices where Q_id=@id\r\nelse\r\n\tselect 'no question aswers with the inserted id'\r\nend","parameters":[{"name":"id","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2023-01-19 22:19"};