$(document).ready(function(){
    var $formSubmit = $("#form-id");
    var $showbar = $("#show-input");
    var $input = $("input");
    var list = [];
    var listCount = 0;

    $formSubmit.submit(function(e){
        e.preventDefault();
        let background;
        let inputText = $input.val();
        list.push(inputText);

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
});

function addList(todo){
    return (
        `<li class="item">${todo}</li>`
    );
}