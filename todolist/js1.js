function DeleteTask(e){
   var elem = document.getElementById(e.id);
return elem.parentNode.removeChild(elem)
}

var n = 0;
function NewRecord() {
  var InputRecord = document.getElementById("place").value;
    if(InputRecord === '') {alert('Введите задачу')}
     else {
        var element =  document.getElementById('list');
        var item = document.createElement('li');
        var btn = document.createElement('input');
        var checkbox = document.createElement('input');
         checkbox.id = n;
         checkbox.type = 'checkbox';
         checkbox.setAttribute('onclick','TaskComp(this)');
         item.id =n;
         btn.id = n;
         btn.className = 'doc';
         btn.type = 'button';
         btn.value = 'Delete';
         btn.setAttribute('onclick','DeleteTask(this)');
         item.innerHTML = InputRecord;
         element.appendChild(item);
         item.appendChild(btn);
         item.appendChild(checkbox);
         document.getElementById("place").value = "";
         n = ++n;
     }   
    }

function TaskComp (box) {
    if(box.checked){
        document.getElementById(box.id).style.textDecoration = "line-through";
    }
    else
    {
        document.getElementById(box.id).style.textDecoration = "none";
        }  
}
