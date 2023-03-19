const emailCheck = document.querySelector("#emailInput");
const buttonCheck = document.querySelector("#buttonCheck");
const passwordCheck = document.querySelector("#passwordInput");
const passworddCheck = document.querySelector("#passworddInput");
const emailResult = document.querySelector(".emailResult");
const passwordResult = document.querySelector(".passwordResult");
const passworddResult = document.querySelector(".passworddResult");
const passwordLength = document.querySelector(".passwordLength");

const showButton = document.querySelector("#showButton");

const emailRegExp = /^\S+@\S+\.\S+$/;
const passwordRegExp = /^(?!.*\s)(?=.*[A-Z])(?=.*\d)/;

function checkEmail() {
  if (emailRegExp.test(emailCheck.value)) {
    emailResult.innerText = "ok";
    emailResult.style.color = "green";
  } else {
    emailResult.innerText = "Вы указали не корректный адрес почты";
    emailResult.style.color = "red";
  }
}

function checkPassword() {
  if (passwordRegExp.test(passwordCheck.value)) {
    passwordResult.innerText = "ok";
    passwordResult.style.color = "green";
  } else {
    passwordResult.innerText =
      "Используйте хотябы одну заглавную букву и одну цифру";
    passwordResult.style.color = "red";
  }

  if (
    passwordCheck.value === passworddCheck.value &&
    passworddCheck.value != 0
  ) {
    passworddResult.innerText = "Пароли совпадают";
    passworddResult.style.color = "green";
  } else {
    passworddResult.innerText = "Пароли не совпадают";
    passworddResult.style.color = "red";
  }

  if (passwordCheck.value.length < 8) {
    passwordLength.innerText =
      "Пароль должен содержать минимум 8 символов, одну заглавню букву и одну цифру!";
    passwordLength.style.color = "red";
  } else {
    passwordLength.innerText = " ";
  }
  if (passwordCheck.value.length === 0) {
    passworddResult.innerText = " ";
  }
}

buttonCheck.addEventListener("click", () => {
  checkEmail();
  checkPassword();
});

passwordCheck.addEventListener("input", () => {
  checkPassword();
});

showButton.addEventListener("click", () => {
  if ((passwordCheck.type === "password", passworddCheck.type === "password")) {
    passwordCheck.type = "text";
    passworddCheck.type = "text";
    showButton.textContent = "Скрыть пароль";
  } else {
    passwordCheck.type = "password";
    passworddCheck.type = "password";
    showButton.textContent = "Показать пароль";
  }
});

let centerX = 400;
let centerY = 100;
let radius = 270;
let angle = 0;

function fly() {
  let x = centerX + Math.cos(angle) * radius;
  let y = centerY + Math.sin(angle) * radius;

  document.getElementById("flyBox").style.left = x + "px";
  document.getElementById("flyBox").style.top = y + "px";

  angle += 0.01;

  requestAnimationFrame(fly);
}

setTimeout(fly, 3000);



const timerSet = document.getElementById("timedown");

let time = 60;
function timeSet() {
  if (time === 0) {
    clearTimeout(timerId);
    timerSet.innerHTML = "Время вышло";
  } else {
    timerSet.innerHTML = "Осталось времени: " + time + " секунд";
    time--;
  }
}
const timerId = setInterval(timeSet, 1000);
