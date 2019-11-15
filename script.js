$(document).ready(function(){
    var $formSubmit = $("#form-id");
    var $showbar = $("#show-input");
    var $input = $("input");
    var $list = $(".item");
    var list = [];
    var listCount = 0;

    $formSubmit.submit(function(e){
        e.preventDefault();
        let background;
        let inputText = $input.val();
        list.text = inputText;

        if(listCount % 2 === 0){background = "#eee";}
        else{background = "lightgray";}

        $('#todos').append(addList(inputText));
        $('.item:last-child').css(
            "background-color", `${background}`);
        $input.val("");
        listCount += 1;
    });

    $showbar.click(function(){
        $input.toggleClass("hidden");
    });

    $("li").click(function(){
        if($(this).css("opacity") === "0.5"){
            $(this).removeClass("completed");
            list.completed = false;
        }else{
            $(this).addClass("completed");
            list.completed = true;
        }
    });

    $(".delete").click(function(){
        $(this).closest(".item").remove();
    });
});

function addList(todo){
    return (
        `<li class="item"><span>X</span> ${todo}</li>`
    );
}