//check of specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) { 
    $(this).parent().fadeOut(300, function() { 
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) { 
        //grab text
        var todoText = $(this).val();
        $(this).val("");
        //new li and append to end
        $("ul").append("<li><span> <i class='fa fa-trash'></i></span>" + todoText + "</li>");
    }
});

$(".fa-pencil").click(function() { 
    $("input[type='text']").fadeToggle();
});