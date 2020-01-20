var xhr = new XMLHttpRequest(); //obj 1st run
xhr.onload = function() { //redy stste chanag

    responseObject = JSON.parse(xhr.responseText); //4
    var newContent = ''; //5
    var number = parseInt(number);
    for (var i = 0; i < responseObject.events.length; i++) {
        newContent += '<div class="event">';
        newContent += '<img src=" ' + responseObject.events[i].map + '"/>';
        newContent += 'alt="' + responseObject.events[i].location + '"/>';
        newContent += '<p><b>' + responseObject.events[i].location + '</br><br>';
        newContent += responseObject.events[i].date + '</p>';
        newContent += '</div>';
    }
    document.getElementById("content").innerHTML = newContent; //7

};
xhr.open('GET', 'data.json', true); //2
xhr.send(null);