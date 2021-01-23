function showBoxes()
{
    var button = document.getElementById("boxesButtons");

    var html = "";
    for(var i = 0; i < 10; i++){
        html = html + "<input class='boxNumberOption' id='boxNumberFirst' type='button' value='csgf' onclick='showBoxes()'>";
    }
    console.log(html);

    button.innerHTML = html;
}