var phonenumber = "1123456789";
var regex = /^0{1}[0-9]{9}$/;
if (phonenumber.match(regex)) {
    console.log("Valid phone number");
}
else {
    console.log("InValid phone number");
}
