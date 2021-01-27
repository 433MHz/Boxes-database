var object;



function get(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/getAll", true);
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function(){
        object = xhr.response;
        show();
    };

    xhr.send();

}


function show(){
    var htmlTR1 = "<tr>";
    var htmlTR2 = "</tr>";
    var htmlTD1 = "<td>";
    var htmlTD2 = "</td>";
    var htmlTH1 = "<th>";
    var htmlTH2 = "</th>";

    var htmlAll = "";
    htmlAll = htmlAll + "<table>";

    var names = ['ID','Nazwa','Opis','Kategoria','Ilość','Nazwa pudełka','Opis pudełka'];

    htmlAll = htmlAll + "<tr>";
    for(var i = 0; i < names.length; i++){
        htmlAll = htmlAll + "<th>";
        htmlAll = htmlAll + names[i];
        htmlAll = htmlAll + "</th>";
    }
    htmlAll = htmlAll + "</tr>";

    object.forEach(iterateObjects);

    function iterateObjects(object){
        var objectContent = [object.id, object.name, object.description, object.category, object.amount, object.boxName, object.boxDescription]
        htmlAll = htmlAll + "<tr>";
        for(var i = 0; i < objectContent.length; i++){
            htmlAll = htmlAll + "<td>";
            htmlAll = htmlAll + objectContent[i];
            htmlAll = htmlAll + "</td>";
        }
        htmlAll = htmlAll + "</tr>";
    }

    htmlAll = htmlAll + "</table>";

    console.log(object[0]);
    document.getElementById("centralContainer").innerHTML = htmlAll;
}


window.onload = get;
