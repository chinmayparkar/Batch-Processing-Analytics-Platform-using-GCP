function transform(line) {
    var values = line.split(',');
    
    var obj = new Object();
    obj.Teacher_ID = values[0];
    obj.Teacher_Prefix = values[1];
    obj.Teacher_First_Project_Posted_Date = values[2];
    var jsonString = JSON.stringify(obj);
    
    return jsonString;
    }