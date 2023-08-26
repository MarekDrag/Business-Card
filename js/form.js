import email from "./email.js";

const form = document.querySelector("#form");
form.action = `https://formsubmit.io/send/${email}`;
console.log(email, form);
