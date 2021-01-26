var object;



function get(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/getAll", true);
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function(){
        object = xhr.response;
        console.log(object);
    };

    xhr.send();
}

