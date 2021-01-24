var buttonsSelect1 = 1;
var buttonsSelect2 = 1;
var buttonsSelect3 = 1;


function buttons1(button){
    switch(button){
        case 1:
            buttonsSelect1 = 1;
            break;

        case 2:
            buttonsSelect1 = 2;
            break;

        case 3:
            buttonsSelect1 = 3;
            break;

        default:
    }
    switchButtons();
}


function buttons2(button){
    switch(button){
        case 1:
            buttonsSelect2 = 1;
            break;
        
        case 2:
            buttonsSelect2 = 2;
            break;

        case 3:
            buttonsSelect2 = 3;
            break;

        case 4:
            buttonsSelect2 = 4;
            break;

        case 5:
            buttonsSelect2 = 5;
            break;

        case 6:
            buttonsSelect2 = 6;
            break;

        case 7:
            buttonsSelect2 = 7;
            break;

        default:
    }
    switchButtons();
}

function buttons3(){
    var button = document.getElementById("button_3_1");

    if(buttonsSelect3 == 1){
        button.value = "Malejąco";
        buttonsSelect3 = 2;
    }
    else if(buttonsSelect3 == 2){
        button.value = "Rosnąco";
        buttonsSelect3 = 1;
    }
    else{}
    switchButtons();
}


function switchButtons(){
    var buttons = ["button_1_1","button_1_2","button_1_3","button_2_1","button_2_2","button_2_3","button_2_4","button_2_5","button_2_6","button_2_7"];
    buttons.forEach(iterator);

    function iterator(value){
        document.getElementById(value).className = "buttons1";
    }

    var buttonsSelect1_1 = "button_1_" + buttonsSelect1;
    var buttonsSelect2_1 = "button_2_" + buttonsSelect2;

    var buttonsSelect = [buttonsSelect1_1, buttonsSelect2_1];
    buttonsSelect.forEach(iterator2);

    function iterator2(value){
        document.getElementById(value).className = "buttons2"
    }


    console.log(buttonsSelect1);
    console.log(buttonsSelect2);
    console.log(buttonsSelect3);
}


window.onload = switchButtons();