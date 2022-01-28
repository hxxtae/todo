import { requireRule, textNotSpace, textMinimumLength } from './constants/contacts.js';
import render from './render.js';
import template from './login-template.js';
import { userNameKey } from './constants/base.js';

const loginForm = document.querySelector('.todo-user .join');
const inputDiv = loginForm.querySelector('.todo-user-join');

let active = false;
const validateRule = [];
validateRule.push(requireRule);
validateRule.push(textNotSpace);
validateRule.push(textMinimumLength(3));

const userInfo = {
  userid: ''
}

function onSubmit(e) {
  e.preventDefault();
  
  if (active) {
    console.log("submit");
    localStorage.setItem(userNameKey, `${userInfo.userid}`);
    render();
  } else {
    console.log('false');
  }
}

export function loginFormSubmit() {
  loginForm.addEventListener('submit', onSubmit);
}

function onChange(e) {
  const value = e.target.value;
  const validate = validateRule.filter(item => item.rule.test(value) !== item.match);
  const isValid = validate[0] ? validate[0] : null;

  if (isValid === null) {
    active = true;
    userInfo.userid = value;
  } else {
    active = false;
  }

  const message = isValid ? isValid.message : '';
  const newElement = template(message, value);
  const newdiv = document.createElement('div');
  newdiv.innerHTML = newElement;
  inputDiv.innerHTML = newdiv.innerHTML; // (A)
}

export function loginFormChange() {
  loginForm.addEventListener('change', onChange);
}

// [주의할 점] ★★★
// (A)
// 해당 태그 요소를 다시 그려줄 때
// 가능한 form 의 button은 빼고 그려준다.
// -> render 호출 시 input에 대한 이벤트 재할당이 필요하지
//    button에 대한 이벤트는 불필요 (불필요한 요소에 이벤트 재할당)
// -> template 에서 form 버튼은 지운다.

// ---------------
// const div = document.querySelector('.tab');
// console.dir(div);
// ---------------
