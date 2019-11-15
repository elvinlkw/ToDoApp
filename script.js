$(document).ready(function(){
    var $formSubmit = $("#form-id");
    var $showbar = $("#show-input");
    var $input = $("input");
    var $command = $("button");
    var list = [];
    var listCount = 0;

    $formSubmit.submit(function(e){
        e.preventDefault();
        let background;
        let inputText = $input.val();
        list.push({
            text: inputText,
            completed: false
        });
        
        if(listCount % 2 === 0){background = "#eee";}
        else{background = "lightgray";}

        $('#todos').append(addList(inputText));
        $('.item:last-child').css(
            "background-color", `${background}`);
        $input.val("");
        listCount += 1;
        console.log(list);
    });

    $showbar.click(function(){
        $input.toggleClass("hidden");
    });

    // Handler for clicking on todo
    $("#todos").on("click", '.item', function(){
        if($(this).css("opacity") === "0.5"){
            $(this).removeClass("completed");
            for(let i = 0; i < list.length;i++){
                if($.trim($(this).text())=== list[i].text){
                    list[i].completed = false;
                    break;
                }
            }
        }else{
            $(this).addClass("completed");
            for(let i = 0; i < list.length;i++){
                if($.trim($(this).text())=== list[i].text){
                    list[i].completed = true;
                    break;
                }
            }
        }
        console.log(list);
    });

    $("#todos").on("click", '.delete', function(event){
        event.stopPropagation();
        $(this).closest('.item').remove();
    });

    // Handler for managing the delete button to appear
    $("#todos").on("mouseover", '.item', function(){
        $(this).find("img").toggleClass("hidden");
    });
    $("#todos").on("mouseout", '.item', function(){
        $(this).find("img").toggleClass("hidden");
    });

    // Handler for buttons presses
    $command.click(function(){
        if($(this).text() === "Hide Completed"){
            $(this).text("Show Completed");
            for(let i = 0; i < list.length; i++){
                if(list[i].completed === true){
                    $(`li:nth-child(${[i+1]})`).hide();
                }
            }
        }else if($(this).text() === "Show Completed"){
            $(this).text("Hide Completed");
            for(let i = 0; i < list.length; i++){
                if(list[i].completed === true){
                    $(`li:nth-child(${[i+1]})`).show();
                }
            }
        }
    });
});

function addList(todo){
    return (
        `<li class="item">
            <img src="img/bin.png" class="delete image hidden"></img>
            ${todo}
        </li>`
    );
}