window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p350","name":"QuestionVsStudentAns","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"ITI-Exam System DB","id":"d10"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"QuestionVsStudentAns"},{"field":"Type","value":"Procedure"}],"script":"CREATE proc QuestionVsStudentAns @exam_id int, @st_id int \r\nas\r\nselect t.Exam_id,q.Q_content, q.type, q.Q_correct_answer, t.std_answer \r\nfrom Take_exam t, question q\r\nwhere t.Q_id = q.Q_id and t.Exam_id = @exam_id and t.st_id = @st_id","parameters":[{"name":"exam_id","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"st_id","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2023-01-19 22:19"};