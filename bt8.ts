let firstName: string = "do";
let lastName: string = "huy";

firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

let fullName2: string = firstName + " " + lastName;

console.log(fullName2); 
