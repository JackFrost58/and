var view = (function () {

    
    var RollItem =["Knife", "Rifle", "Pistol", "Shotgun"];
    var elements = [];
    var left = 0;
    var size = 0;
    var stop;
    var timer;
    
    var btnOK;
    var btnRoll;
    var btnStop;
    
    function initView(){
        initControls();
        initListeners();
    };
    
    function initControls(){
         btnRoll = document.getElementById(btnRollID);
         btnOK = document.getElementById(btnOKID);
         ItemField = document.getElementById(ItemFieldID);
         NumberField = document.getElementById(NumberFieldID);
         btnStop = document.getElementById(btnStopID); 
        Fieldbtns = document.getElementById(FieldbtnsID);
         Fieldslider = document.getElementById(FieldsliderID);
    }

    function initListeners(){
       btnOK.addEventListener( clickEvent, function() {
        statusRoll();
        CreateArr();
        CreateRoll();
        elements = [];
      } );
    btnRoll.addEventListener(clickEvent, function(){
        Animate();
        AutoStop(15000);
    })
    btnStop.addEventListener(clickEvent,function(){AutoStop(4000);}
    )

   }

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

return { initView: initView};
})();