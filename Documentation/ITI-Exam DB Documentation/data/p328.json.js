window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p328","name":"examAnswers","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"ITI-Exam System DB","id":"d10"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"examAnswers"},{"field":"Type","value":"Procedure"}],"script":"CREATE proc examAnswers \r\n@exam_id int, @st_name varchar(50), @q_1 varchar(50),\r\n@q_2 varchar(50),@q_3 varchar(50),@q_4 varchar(50),@q_5 varchar(50),@q_6 varchar(50),\r\n@q_7 varchar(50),@q_8 varchar(50),@q_9 varchar(50),@q_10 varchar(50)\r\nas\r\n\tbegin try\r\n\t\tdeclare @st_id int\r\n\t\tselect @st_id = st_id from student where st_fname + ' ' + st_lname =@st_name\r\n\t\t\r\n\t\tif @st_id is not null\r\n\t\tbegin \r\n\t\t\tdeclare @t table(student_answer varchar(50))\r\n\t\t\tinsert into @t values(@q_1), (@q_2), (@q_3),(@q_4), (@q_5), (@q_6),(@q_7), (@q_8), (@q_9),(@q_10)\r\n\r\n\t\t\t--select Q_id from Question where crs_id = @\r\n\t\t\t--insert into Take_exam\r\n\t\t\t--select @st_id,@exam_id,student_answer from @t\r\n\t\t\tinsert into Take_exam \r\n\t\t\tselect st_id, eq.Exam_id,eq.Q_id, null, null from Exam_Question eq, student s\r\n\t\t\twhere Exam_id = @exam_id and st_id = @st_id\r\n\r\n\r\n\t\t\tdeclare c2 cursor\r\n\t\t\tfor select t.std_answer from Take_exam t where t.Exam_id = @exam_id and t.st_id=@st_id\r\n\t\t\tfor update\r\n\t\t\t\tdeclare @std_answer_Answer varchar(50)\r\n\t\t\t\topen c2\r\n\t\t\t\tfetch c2 into @std_answer_Answer\r\n\t\t\t\twhile @@FETCH_STATUS=0\r\n\t\t\t\tbegin\r\n\t\t\t\t\tdeclare c1 cursor\r\n\t\t\t\t\tfor select student_answer from @t\r\n\t\t\t\t\tfor read only\r\n\t\t\t\t\t\tdeclare @temp_Answer varchar(50)\r\n\t\t\t\t\t\topen c1\r\n\t\t\t\t\t\tfetch c1 into @temp_Answer \r\n\t\t\t\t\t\twhile @@FETCH_STATUS=0\r\n\t\t\t\t\t\tbegin\r\n\t\t\t\t\t\t\tupdate Take_exam\r\n\t\t\t\t\t\t\tset  std_answer=@temp_Answer  from Take_exam t \r\n\t\t\t\t\t\t\twhere current of c2\r\n\t\t\t\t\t\t\tfetch c2 into @std_answer_Answer\r\n\t\t\t\t\t\t\tfetch c1 into @temp_Answer\r\n\t\t\t\t\t\tend\r\n    \r\n\t\t\t\tend\r\n\t\t\t\tclose c1\r\n\t\t\t\tdeallocate c1\r\n\t\t\tclose c2\r\n\t\t\tdeallocate c2\r\n\r\n\t\t\tselect 'Exam Answered Successfully'\r\n\t\tend\r\n\t\telse\r\n\t\t\tselect 'this student does not exist'\r\n\tend try\r\n\tbegin catch\r\n\t\tselect 'invalid exam answering.. try again'\r\n\tend catch","parameters":[{"name":"exam_id","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"st_name","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"q_1","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"q_2","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"q_3","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"q_4","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"q_5","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"q_6","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"q_7","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"q_8","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"q_9","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"q_10","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2023-01-19 22:19"};