var choosedBox;

function showBoxes()
{
    var button = document.getElementById("boxesButtons");

    var html = "";

    for(var i = 0; i < 10; i++){
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
    itemAmount = document.getElementById("amountText").value;

    
}


function chooseBox(number)
{
    var name = "boxNumber" + number;

    var boxes = document.getElementsByClassName("boxNumberOption");
    for(var i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor="#197a29";
    }

    var html = "<input class='boxNumberOption' type='button' value='"+ "Pudełko "+ number +"' onclick='showBoxes()'>";
    var choosedBox = document.getElementById("boxesButtons").innerHTML = html;
    choosedBox = number;
}