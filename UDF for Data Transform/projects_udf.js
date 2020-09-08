function transform(line) {
    var values = line.split(',');
    
    var obj = new Object();
    obj.Project_ID = values[0];
    obj.School_ID = values[1];
    obj.Teacher_ID = values[2];
    obj.Project_Type = values[3];
    obj.Project_Title = values[4];
    obj.Project_Essay = values[5];
    obj.Project_Short_Description = values[6];
    obj.Project_Need_Statement = values[7];
    obj.Project_Subject_Category_Tree = values[8];
    obj.Project_Subject_Subcategory_Tree = values[9];
    obj.Project_Grade_Level_Category = values[10];
    obj.Project_Resource_Category = values[11];
    obj.Project_Cost = values[12];
    obj.Project_Posted_Date = values[13];
    obj.Project_Expiration_Date = values[14];
    obj.Project_Current_Status = values[15];
    var jsonString = JSON.stringify(obj);
    
    return jsonString;
    }