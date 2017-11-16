var n = 0;
var btnadd = document.getElementById('B_add');
var ul =  document.getElementById('list');
var TextField = document.getElementById("place");

btnadd.onclick = function(){
   NewTask();
}

function NewTask() {
  var text = TextField.value;
    if(text === '' || text.trim() === '') { 
      TextField.value ='';
        alert('Введите задачу')}
     else {
         var task = document.createElement('li');
         task.id = ++n;
         task.innerHTML = text;
         ul.appendChild(task);
         task.appendChild(btnDel());
         task.appendChild(checkbox());
         TextField.value = ""  
        }
    }

function btnDel(){
    var btn = document.createElement('input');
         btn.id = n;
         btn.className = 'doc';
         btn.type = 'button';
         btn.value = 'Delete';
         btn.onclick = function(){
             DeleteTask(this);
         }
         return btn;
}

function checkbox(){
    var checkbox = document.createElement('input');
         checkbox.id = n;
         checkbox.type = 'checkbox';
         checkbox.onclick =function(){
             TaskComp(this);
         }
       return checkbox;
}

function TaskComp (box) {
    if(box.checked){
      document.getElementById(box.id).style.textDecoration = "line-through";
    }
    else{
       document.getElementById(box.id).style.textDecoration = "none";
        }  
}

function DeleteTask(e){
   var elem = document.getElementById(e.id);
   return elem.parentNode.removeChild(elem)
   }
