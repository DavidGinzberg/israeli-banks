
function renderTable(table){
    $("#tableContainer").html(table);
}

function constructTable(data){
    var headerRow = $("<tr/>")
            .append("<th>Name</th>")
            .append("<th>Hebrew Name</th>")
            .append("<th>Open Fridays?</th>");
    return $("<table/>").append(headerRow)
        .append(
            $.map(data, function(item, index){
                return $('<tr/>')
                    .append('<th>' + item.name + '</th>')
                    .append('<td>' + item.nameInHebrew + '</td>')
                    .append('<td>' + (item.openFriday==null?"Unknown":item.openFriday?"Yes":"No") + '</td>');

            }));
}

/*Build the table of banks based on the JSON data in banks.js*/
function buildTableOfBanks(){
    $.getJSON("banks.json", function(result){ renderTable(constructTable(result))});
}


$(document).ready(function(){
    buildTableOfBanks();
});
