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
         item.id = n;
         btn.id = n;
         btn.className = 'doc';
         btn.type = 'button';
         btn.value = 'Delete';
         btn.setAttribute('onclick','DeleteTask(this)');
         item.innerHTML = InputRecord;
         element.appendChild(item);
         item.appendChild(btn);
         document.getElementById("place").value = "";
         n = ++n;
     }
         
    
}
