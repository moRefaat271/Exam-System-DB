window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p325","name":"deleteStudentCourse","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"ITI-Exam System DB","id":"d10"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"deleteStudentCourse"},{"field":"Type","value":"Procedure"}],"script":"-- Delete\r\ncreate proc deleteStudentCourse @stu_id int   \r\nas\r\nif(\texists(select st_id from [dbo].[student_course] where st_id=@stu_id))\r\n\tdelete from  [dbo].[student_course] where st_id = @stu_id\r\nelse\r\n\tselect 'Invalid ----> student does not exist'","parameters":[{"name":"stu_id","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2023-01-19 22:19"};