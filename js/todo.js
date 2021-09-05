const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

console.log(toDoForm);
console.log(toDoList);

// JSON.stringify() : JavaScript object나 array 또는 어떤 JavaScript 코드건 간에 문자열(String)으로 만들어줌

// JSON.parse() : string으로 된 것을 JavaScript가 알 수 있는 array객체로 변환
//  JSON.parse(localStorage.getItem('todos'))
//  >>> ["a", "b", "c"]

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


// 삭제 버튼 (event를 받아)
// event 생성 시 속성값들 생성됨
// target 속성 : HTML Element 에 속성들이 있어 부모태그를 선택해 삭제할 수 있음
// x 버튼을 누르면 삭제 되도록 !

function deleteToDo(event) {
    const li = event.target.parentElement // 버튼 눌렀을 때 삭제할 li태그

    li.remove();

    // li태그의 id를 얻어서 삭제할 것!
    // console.log(li.id);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));

    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement('li');     // li 태그 생성
    li.id = newToDo.id; // li태그의 id값 생성!! newToDo.id로 !!
    const span = document.createElement('span'); // span 태그 생성
    span.innerText = newToDo.text+ "   ";
    const button = document.createElement('button');
    button.innerText = 'X';

    button.addEventListener('click', deleteToDo);

    li.appendChild(span);  // li안에 span태그 넣기
    li.appendChild(button);
    
    toDoList.append(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    
    // object로 저장!! 
    // Date.now()로 id값을 생성
    const newToDoObj = { 
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);



// 저장된 todos
const savedToDos = localStorage.getItem(TODOS_KEY);


// array화todos
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    
    // parsedToDos.forEach((item) => console.log('this is the turn of', item)); // 밑에 function 만들어서 실행한 것과 같음
    //// foreach function
    // item!! 어떤 item에 되는지 알수 있음
    // function sayHello(item){
    //     console.log('this is turn of ', item);
    parsedToDos.forEach(paintToDo);
}




