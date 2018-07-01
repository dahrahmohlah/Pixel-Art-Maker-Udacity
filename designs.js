let height, width, color;

function makeGrid() {

    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
        for (let x = 0; x < height; x++) {
            $('#pixelCanvas').append('<tr></tr>');
        }
        for (let y = 0; y < width; y++) {
            $('#pixelCanvas tr').each(function () {
                $(this).append('<td></td>');
            });
        }
        
}


$(document).on("mousedown", "tr td", function () {

    color = $('#colorPicker').val();
    $(this).css('background-color', color);

    $('tr td').bind("mousemove", function () {
        color = $('#colorPicker').val();
        $(this).css('background-color', color);
    }).mouseup(function() {
        $('td').unbind('mousemove');
    });

    $('tr td').on('dblclick',function () {
        $(this).css('background-color', "#FFFFFF")
    })
});

reset = $("#pixelCanvas").html();

function remove() {
    $("#pixelCanvas").html(reset);
}