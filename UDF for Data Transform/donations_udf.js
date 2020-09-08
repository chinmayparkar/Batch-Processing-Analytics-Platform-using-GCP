function transform(line) {
    var values = line.split(',');
    
    var obj = new Object();
    obj.Project_ID = values[0];
    obj.Donation_ID = values[1];
    obj.Donor_ID = values[2];
    obj.Donation_Included_Optional_Donation = values[3];
    obj.Donation_Amount = values[4];
    obj.Donor_Cart_Sequence = values[5];
    obj.Donation_Received_Date = values[6];
    var jsonString = JSON.stringify(obj);
    
    return jsonString;
    }