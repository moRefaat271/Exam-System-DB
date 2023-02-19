window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p335","name":"getInstructorInfo","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"ITI-Exam System DB","id":"d10"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"getInstructorInfo"},{"field":"Type","value":"Procedure"}],"script":"create proc getInstructorInfo @ins_id int\r\nas\r\nselect c.course_name , count(sc.st_id) \r\nfrom instructor i, instructor_course ic, course c, student_course sc\r\nwhere c.crs_id= sc.crs_id and i.ins_id = ic.ins_id and ic.crs_id = c.crs_id and \r\ni.ins_id = @ins_id\r\ngroup by c.course_name","parameters":[{"name":"ins_id","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2023-01-19 22:19"};