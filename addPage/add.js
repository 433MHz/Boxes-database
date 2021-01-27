var choosedBox;


function get(){
    var object;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/count", true);
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function(){
        object = xhr.response;
        showBoxes(object.boxes);
    };

    xhr.send();
}




function showBoxes(number)
{
    var button = document.getElementById("boxesButtons");

    var html = "";

    for(var i = 0; i < number; i++){
        html = html + "<input class='boxNumberOption' id='boxNumber"+ (i+1) +"' type='button' value='"+ "Pudełko "+ (i+1) +"' onclick='chooseBox("+(i+1)+")'>";
    }

    button.innerHTML = html;
}




function sendItem()
{
    var boxNumber;
    var itemName;
    var itemDesc;
    var itemAmount;

    boxNumber = choosedBox;
    itemName = document.getElementById("itemNameText").value;
    itemDesc = document.getElementById("itemDescTextArea").value;
    itemAmount = parseInt((document.getElementById("amountText").value), 10);

    var objectToSend = {
        boxNum: 1, 
        itemName: 'Tomek', 
        itemDesc: 'bulbulator', 
        amount: 3
    };

    send(objectToSend);
    function send(objectSend){
        var object;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://192.168.0.100:8080/add");
        xhr.responseType = "json";
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        xhr.onload = function(){
            object = xhr.response;
        };
        
        xhr.send(JSON.stringify(objectSend));
        console.log(object);
    }

}


function chooseBox(number)
{
    var name = "boxNumber" + number;

    var boxes = document.getElementsByClassName("boxNumberOption");
    for(var i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor="#197a29";
    }

    var html = "<input class='boxNumberOption' type='button' value='"+ "Pudełko "+ number +"' onclick='get()'>";
    document.getElementById("boxesButtons").innerHTML = html;
    choosedBox = number;
}