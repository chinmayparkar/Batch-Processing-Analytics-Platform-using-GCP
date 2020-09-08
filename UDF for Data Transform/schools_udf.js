function transform(line) {
    var values = line.split(',');
    
    var obj = new Object();
    obj.School_ID = values[0];
    obj.School_Name = values[1];
    obj.School_Metro_Type = values[2];
    obj.School_Percentage_Free_Lunch = values[3];
    obj.School_State = values[4];
    obj.School_Zip = values[5];
    obj.School_City = values[6];
    obj.School_County = values[7];
    obj.School_District = values[8];
    var jsonString = JSON.stringify(obj);
    
    return jsonString;
    }