function transform(line) {
var values = line.split(',');

var obj = new Object();
obj.Donor_ID = values[0];
obj.Donor_City = values[1];
obj.Donor_State = values[2];
obj.Donor_Is_Teacher = values[3];
obj.Donor_Zip = values[4];
var jsonString = JSON.stringify(obj);

return jsonString;
}