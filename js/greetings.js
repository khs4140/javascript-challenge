const loginform = document.querySelector('#login-form');
const loginInput = document.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';

function onLoginBtnSubmit(event) {
    event.preventDefault(); // 기본동작 막기!!
    loginform.classList.add('hidden');

    const username = loginInput.value;
    greeting.classList.toggle(HIDDEN_CLASSNAME);

    // localstorage!!!!
    // 저장 localStorage.setItem('key', 'value');
    // 출력 localStorage.getItem('key');
    // 삭제 localStorage.removeItem('key');
    localStorage.setItem('username', username);
    // string + string => ` ~~~ $(변수) ` 
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    
    
}

loginform.addEventListener('submit', onLoginBtnSubmit)