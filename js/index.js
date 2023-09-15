const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const todoList = document.querySelector("#todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  alert('onLogin');
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  
  enableTodo(username);
}

function enableTodo(username) {
  // id, clas 속성이 함께 적용되는 경우 id의 css가 우선으로 적용되므로 
  // 직접 tag의 style을 변경해야 적용이 됨.
  loginForm.style.display = 'none';
  console.log('remove hidden class');
  todoList.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log('savedUsername : ' + savedUsername);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  enableTodo(savedUsername);
}
