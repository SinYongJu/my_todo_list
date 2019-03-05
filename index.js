'use strict'
const TODOTHING = 'TODOTHING';
const timeElem = document.querySelector('.currtime');
const listTodo = document.querySelector('.list_todo');
const todoInputElem = document.querySelector('.inp_todo');
const todoInputButtonElem = document.querySelector('.btn_todo');     
let dateTime;
let TODOITEM = [];

// todo list input
function deleteTodo(idx){
  TODOITEM = TODOITEM.filter(item => item.itemUid != idx)
  console.log('deleltTodo',TODOITEM)
  saveTodo(TODOITEM);
}

function loadTodo(){
  // localStorage.removeItem('TODOTHING');
  const getlocalStorageItems = JSON.parse(localStorage.getItem(TODOTHING)) || [];
  TODOITEM = getlocalStorageItems;
  
  if(TODOITEM.length > 0){
    TODOITEM.forEach((item,index) => {
      createTodoListItem(item.itemUid,item.itemTimeLine,item.todoVal);
    });
  }
}

function saveTodo(TODOITEM){
  
  // TODOITEM.forEach((item,index)=>{item.itemUid = index+1})
  console.log(TODOITEM)
  
  localStorage.setItem(TODOTHING ,JSON.stringify(TODOITEM));

}

function findclosestTagByTagName(el,tagName){
  
  while(el.localName != tagName){
    el = el.parentNode
  }  
  // console.log(el)
  return el
}

function deleteTodoItem(event){
  let removeItem = findclosestTagByTagName(event.target,'li'); 
  console.log('deleteTodoItem',TODOITEM)
  deleteTodo(parseInt(removeItem.className))
  listTodo.removeChild(removeItem);

}

function createTodoListItem(uid,time,value){
  let li = document.createElement('li');
  li.className = uid;
  li.innerHTML =`<strong>${time}</strong><p>${value}</p>
  <div class="btn_comm"><button type="button">수정</button><button type="button" class="btn_delete">삭제</button></div>`;
  li.querySelector('.btn_delete').addEventListener('click',deleteTodoItem)
  listTodo.appendChild(li);
}

function createNewTodoListItem(){
  let todoVal = todoInputElem.value;
  let year = dateTime.getFullYear();
  let month = dateTime.getMonth();
  let date = dateTime.getDate();
  let hour = dateTime.getHours();
  let minute = dateTime.getMinutes();
  let itemTimeLine = `${year}/${month}/${date} | ${hour} : ${minute <10 ? '0'+minute : minute}`;
  let itemUid = TODOITEM.length + 1;
  createTodoListItem(itemUid, itemTimeLine, todoVal);
  let saveObj = {itemUid,itemTimeLine, todoVal}
  
  TODOITEM.push(saveObj)
  saveTodo(TODOITEM)
  todoInputElem.value = '';
}

function toDolist(){
  loadTodo();
  todoInputButtonElem.addEventListener('click',()=>{

    if(todoInputElem.value.length > 0){
      console.log(todoInputElem.value)
      createNewTodoListItem()
    }
  })
  todoInputElem.addEventListener('keypress',(e)=>{
    if(todoInputElem.value != ''){
      if(e.keyCode == 13)createNewTodoListItem();
    }
  })
}

// 시간
function refTime(){
  dateTime = new Date(Date.now());
  return dateTime
}

function getCurrentTime(){
  refTime()
  let hour = dateTime.getHours()
  let minute = dateTime.getMinutes()
  let second = dateTime.getSeconds()

  timeElem.innerHTML = `${hour} : ${minute <10 ? '0'+minute : minute}  : ${second <10 ? '0'+second : second}`;
}

function currentTime(){
  getCurrentTime()
  setInterval(getCurrentTime,1000)
}

function init(){
  
 currentTime();
 toDolist();

}


init();