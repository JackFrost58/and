var btnRoll = document.getElementById('Roll');
var btnOK = document.getElementById('button');
var ItemField = document.getElementById('place');
var NumberField = document.getElementById('number');
var btnStop = document.getElementById('Stop'); 
var Fieldbtns = document.getElementById('buttons');
var Fieldslider = document.getElementById('slider')
var RollItem = ["Knife", "Rifle", "Pistol", "Shotgun"];
var elements = [];
var left = 0;
var size = 0;
var stop;
var timer;

function RandomNameItem(nameArr){
    var nameItem = Math.floor(Math.random() * nameArr.length);
    return nameArr[nameItem];
}

function getnumber(){
    var number = NumberField.value;
    size = NumberField.value;
    if(number === ''){
        alert('Введите число')
    }
    else {
       NumberField.value ='';
        return number;
    }
}

function statusRoll(){
    Fieldslider.style.visibility = 'visible';
    Fieldbtns.style.visibility = 'visible';
}

function CreateArr(){
    var length = getnumber();
    for(var i = 0; i < length;i++){
        elements.push(RandomNameItem(RollItem));
    }
    return elements;
}

function CreateRoll(){
    var MasLenght = elements.length;
    for(var i = 0; i < MasLenght; i++){
        var box = document.createElement('div')
        var image = document.createElement('img');
        image.setAttribute("src","image/" + elements[i] + ".jpg" );
        box.setAttribute("class", elements[i]);
        box.appendChild(image);
        ItemField.appendChild(box);
    }
    
}

function Animate(){
    var border = -152 * (size - 2);
    left = left - 152;
    if(left < border){
           left = 152; } 
    ItemField.style.left = left + 'px'; 
    MoveSlider();       
}

function MoveSlider(){
    timer = setTimeout(Animate,200);
} 

function StopItem(){
     clearTimeout(timer);
}

function AutoStop(time){
    stop = setTimeout(StopItem,time);
}

btnOK.addEventListener( "click", function() {
    statusRoll();
    CreateArr();
    CreateRoll();
    elements = [];
  } );
btnRoll.addEventListener("click", function(){
    Animate();
    AutoStop(15000);
})
btnStop.addEventListener("click", function(){
    AutoStop(5000);
})