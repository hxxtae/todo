const loginForm = document.querySelector("#login-form");
const loginButton = loginForm.querySelector(".login-button");

function onLoginSubmit(e) {
  e.preventDefault();
  const inputName = loginForm.name.value;
  const inputAge = loginForm.age.value;
  console.log(`${inputName} / ${inputAge}`);
}

loginButton.addEventListener("click", onLoginSubmit);
console.dir(loginForm);

const container = document.querySelectorAll('.container');
const containerParent = document.querySelector('.div');

containerParent.addEventListener("click", (e) => {
  const clickClass = e.target.className;
  const name = 'container';
  if (clickClass === name) {
    const text = e.target.innerText;
    console.log(text);
  }
});

const date = new Date();
const minit = date.getMinutes();
console.log(minit);

const num = "4";
let a = num.padStart(10);
console.log(a);
// 5757575754


// JSON.stringify(object);
// JavaSCript object 나 array 또는 어떤 JavaScript 코드건 간에
// 그걸 string 으로 만들어 준다.
const arr = ['a', 'b', 'c'];
const objStr = JSON.stringify(arr);
console.log(arr);
console.log(objStr);


// ---------------
// const div = document.querySelector('.tab');
// console.dir(div);
// ---------------

