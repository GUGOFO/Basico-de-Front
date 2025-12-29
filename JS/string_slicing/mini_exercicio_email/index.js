const email = "gugofo@gmail.com";

let usarname = email.slice(0,email.indexOf("@"));
let extensão = email.slice(email.indexOf("@") + 1);

console.log(usarname);
console.log(extensão);