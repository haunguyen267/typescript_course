let phonenumber:string = "0123456789"
let regex:any = /^0{1}[0-9]{9}$/

if (phonenumber.match(regex)) {
  console.log("Valid phone number");
} else {
  console.log("InValid phone number");
}
