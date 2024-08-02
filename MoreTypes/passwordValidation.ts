const password:string = "Pass@123"
const regex:any = /(?=.*[A-Z])\w{4,10}/

if (password.match(regex)) {
  console.log("Valid password");
} else {
  console.log("InValid password");
}
