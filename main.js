
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
                    console.debug("Type of 'openFriday':\t" + typeof(item.openFriday) + "\nvalue\t" + item.openFriday);
                    return $('<tr/>')
                        .append('<th>' + item.name + '</th>')
                        .append('<td>' + item.nameInHebrew + '</td>')
                        .append('<td>' + item.openFriday?"Yes":item.openFriday==null?"Unknown":"No" + '</td>');
                    
                    
                }))
            .appendTo('body');
        
    });
}

$(document).ready(function(){
    buildTableOfBanks();
});
