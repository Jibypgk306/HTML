var counter = 0;

function adduser() {
    var input1 = document.getElementById('fname').value;
    var input2 = document.getElementById('date').value;
    var input3 = document.getElementById('email').value;

    var html = '<div class="row" id="data' + counter + '"style="margin-bottom:15px;">' +
        '<div class="col-md-3 col-sm-6 col-xs-5">' +
        '<input type="text" class="form-control" value="' + input1 + '"disabled>' +
        '</div>' +
        '<div class="col-md-3 col-sm-6 col-xs-5">' +
        '<input type="text" class="form-control" value="' + input2 + '"disabled>' +
        '</div> <br>' +
        '<div class="col-md-3 col-sm-6 col-xs-5">' +
        '<input type="text" class="form-control" value="' + input3 + '"disabled>' +
        '<div class="col-md-3 col-sm-6 col-xs-5">' +
        '<button type="button" class="btn btn-success"><a href="signin.html">Submit</a></button>' +

        '</div>' +
        '</div>'
    document.getElementById('userList').insertAdjacentHTML('beforeend', html);
    counter++;
}