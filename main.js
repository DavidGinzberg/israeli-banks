
/*Build the table of banks based on the JSON data in banks.js*/
function buildTableOfBanks(){
    $.getJSON("banks.json", function(result){
        var headerRow = $("<tr/>")
                            .append("<th>Name</th>")
                            .append("<th>Hebrew Name</th>")
                            .append("<th>Open Fridays?</th>");
        $("<table/>").append(headerRow)
            .append(
                $.map(result, function(item, index){
                    return $('<tr/>')
                        .append('<th>' + item.name + '</th>')
                        .append('<td>' + item.nameInHebrew + '</td>')
                        .append('<td>' + item.openFriday==null?"Unknown":item.openFriday?"Yes":"No" + '</td>');
                    
                    
                }))
            .appendTo('body');
        
    });
}

$(document).ready(function(){
    buildTableOfBanks();
});
