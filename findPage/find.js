var buttonsSelect1;
var buttonsSelect2;
var buttonsSelect3;


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

function buttons3(button){
    if(button === 1){
        buttonsSelect3 = 2;
    } 
    else if(button === 2){
        buttonsSelect3 = 1;
    }
    else{}

    switchButtons();
}


function switchButtons(){
    var buttons = ["button_1_1","button_1_2","button_1_3","button_2_1","button_2_2","button_2_3","button_2_4","button_2_5","button_2_6","button_2_7","button_3_1"];
    buttons.forEach(iterator);

    function iterator(value){
        document.getElementById(value).classList.add('buttons1');
        document.getElementById(value).classList.remove('buttons2');
    }

    var buttonsSelect1_1 = "button_1_" + buttonsSelect1;
    var buttonsSelect2_1 = "button_2_" + buttonsSelect2;
    var buttonsSelect3_1 = "button_3_" + buttonsSelect3;

    var buttonsSelect = [buttonsSelect1_1, buttonsSelect2_1, buttonsSelect3_1];
    buttonsSelect.forEach(iterator2);

    function iterator2(value){
        document.getElementById(value).classList.remove("buttons1");
        document.getElementById(value).classList.add("buttons2");
    }
}