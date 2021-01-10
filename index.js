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
    $name.insertAdjacentHTML("afterend", "<p>First name cannot be empty</p>");
    $name.style.border = "solid 1px var(--Red)";
    $errorName.style.visibility = "visible";
  } else {
    $name.nextElementSibling.remove();
    $name.style.border = "";
    $errorName.style.visibility = "hidden";
  }
};
const checkLastName = () => {
  if ($lastName.value === "") {
    $lastName.insertAdjacentHTML(
      "afterend",
      "<p>Last name cannot be empty</p>"
    );
    $lastName.style.border = "solid 1px var(--Red)";
    $errorLastName.style.visibility = "visible";
  } else {
  }
};
const checkMail = () => {
  if ($mail.value === "") {
    $mail.insertAdjacentHTML(
      "afterend",
      "<p>Looks like this is not an email</p>"
    );
    $mail.style.border = "solid 1px var(--Red)";
    $errorMail.style.visibility = "visible";
  } else {
  }
};
const checkPass = () => {
  if ($password.value === "") {
    $password.insertAdjacentHTML(
      "afterend",
      "<p>Looks like this is not an email</p>"
    );
    $password.style.border = "solid 1px var(--Red)";
    $errorPass.style.visibility = "visible";
  } else {
  }
};

async function subm() {
  await checkName();
  await checkLastName();
  await checkMail();
  await checkPass();
}
