function add() {
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the valueifs into row cell's


    name = document.getElementById("number").value;
    var xhr = new XMLHttpRequest(); //obj 1st run
    xhr.onload = function() { //redy stste chanag

        responseObject = JSON.parse(xhr.responseText); //4
        var newContent = ''; //5
        for (var i = 0; i < responseObject.events.length; i++) {
            if (name == i) {
                newContent += '<div class="event"><center>';
                newContent += '<b>NAME:' + responseObject.events[i].Name + '<br><br>';
                newContent += '<b>COURCE:' + responseObject.events[i].Cource + '<br>';
                newContent += '<p><b>PERCENTAGE:' + responseObject.events[i].Percentage + '</br><br>';
                newContent += 'HAVE A NICE DAY!!! </div>';
            }
            document.getElementById("content").innerHTML = newContent; //7
        }
    };
    xhr.open('GET', 'data.json', true); //2
    xhr.send(null);
}

function reset(elementID) {
    document.getElementById(elementID).innerHTML = "";
}