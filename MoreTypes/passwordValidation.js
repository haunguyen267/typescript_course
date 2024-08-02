var password = "Pass@123";
var regex = /(?=.*[A-Z])\w{4,10}/;
if (password.match(regex)) {
    console.log("Valid password");
}
else {
    console.log("InValid password");
}
