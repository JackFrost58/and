function DeleteTask(e){
   var elem = document.getElementById(e.id);
return elem.parentNode.removeChild(elem)
   
}
var n = 0;

var btnadd = document.getElementById('B_add');

btnadd.onclick = function(){
   NewRecord();
}

var ul =  document.getElementById('list');

function NewRecord() {
  var InputRecord = document.getElementById("place").value;
    if(InputRecord === '' || InputRecord.search(/\s/g) === 0 ) { 
        document.getElementById("place").value = '';
        alert('Введите задачу')}
     else {
        var task = document.createElement('li');
         task.id = n;
         task.innerHTML = InputRecord;
         ul.appendChild(task);
         task.appendChild(btnDel());
         task.appendChild(checkbox());
         document.getElementById("place").value = "";
         n = ++n;
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
    else
    {        document.getElementById(box.id).style.textDecoration = "none";
        }  
}
