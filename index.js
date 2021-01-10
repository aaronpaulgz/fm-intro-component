// Inputs
let $name = document.getElementById("name");
let $lastName = document.getElementById("lastName");
let $mail = document.getElementById("mail");
let $password = document.getElementById("password");

let $errorName = document.getElementById("errorName");
let $errorLastName = document.getElementById("errorLastName");
let $errorMail = document.getElementById("errorMail");
let $errorPass = document.getElementById("errorPass");

// Button
let $btn = document.getElementById("btn");

const checkName = () => {
  if ($name.value === "") {
    $name.style.border = "solid 1px var(--Red)";
    $errorName.style.visibility = "visible";
    $errorName.nextElementSibling.style.visibility = "visible";
  } else {
    $name.style.border = "";
    $errorName.style.visibility = "hidden";
    $errorName.nextElementSibling.style = "";
  }
};
const checkLastName = () => {
  if ($lastName.value === "") {
    $lastName.style.border = "solid 1px var(--Red)";
    $errorLastName.style.visibility = "visible";
    $errorLastName.nextElementSibling.style.visibility = "visible";
  } else {
    $lastName.style.border = "";
    $errorLastName.style.visibility = "hidden";
    $errorLastName.nextElementSibling.style = "";
  }
};
const checkMail = () => {
  if ($mail.value === "") {
    $mail.style.border = "solid 1px var(--Red)";
    $errorMail.style.visibility = "visible";
    $errorMail.nextElementSibling.style.visibility = "visible";
  } else {
    $mail.style.border = "";
    $errorMail.style.visibility = "hidden";
    $errorMail.nextElementSibling.style = "";
  }
};
const checkPass = () => {
  if ($password.value === "") {
    $password.style.border = "solid 1px var(--Red)";
    $errorPass.style.visibility = "visible";
    $errorPass.nextElementSibling.style.visibility = "visible";
  } else {
    $password.style.border = "";
    $errorPass.style.visibility = "hidden";
    $errorPass.nextElementSibling.style = "";
  }
};

async function subm() {
  await checkName();
  await checkLastName();
  await checkMail();
  await checkPass();
}
