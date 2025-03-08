// 'use strict'

const container = document.querySelector(".main-container");

const login = document.querySelector(".main-login");

const register = document.querySelector(".main-register");

const buttons = document.querySelectorAll(".transition-button");

export function transitionLogin() {
  if (window.innerWidth <= 375) {
    container.style.height = "460px";
  } else {
    container.style.height = "480px";
  }

  login.style.right = "0px";
  login.style.opacity = "1";

  register.style.left = "500px";
  register.style.opacity = "0";
}

export function transitionRegister() {
  if (window.innerWidth <= 425) {
    container.style.height = "540px";
  } else if (window.innerWidth <= 375) {
    container.style.height = "520px";
  } else {
    container.style.height = "560px";
  }

  login.style.right = "500px";
  login.style.opacity = "0";

  // login.classList.add('login-not-selected')

  register.style.left = "0px";
  register.style.opacity = "1";
}

export function transitionForm() {
  buttons.forEach((button) => {
    button.addEventListener("click", function transition() {
      if (login.style.right === "500px") {
        transitionLogin();

        // container.style.height = '535px'
        // login.style.right = '0px'
        // register.style.left = '500px'
      } else {
        transitionRegister();
        // container.style.height = '605px'
        // login.style.right = '500px'
        // // login.classList.add('login-not-selected')
        // register.style.left = '0px'
      }
    });
  });
}
