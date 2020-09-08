function transform(line) {
    var values = line.split(',');
    
    var obj = new Object();
    obj.Project_ID = values[0];
    obj.Resource_Item_Name = values[1];
    obj.Resource_Quantity = values[2];
    obj.Resource_Unit_Price = values[3];
    var jsonString = JSON.stringify(obj);
    
    return jsonString;
    }