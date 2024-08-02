var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var email = "hautruong@gmail.com";
if (regex.test(email)) {
    console.log("Email is valid");
}
else {
    console.log("Email is invalid");
}
