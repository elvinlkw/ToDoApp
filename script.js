var formSubmit = document.querySelector("#form-id");
var showbar = document.querySelector("#show-input");
var input = document.querySelector("input");
var list = [];
var listCount = 0;

// if(list.length === 0){
//     const message = document.createElement("h4");
//     message.textContent = "your to-do list is empty";
//     message.classList.add("message");
//     document.querySelector("#todo-container").append(message);
// }

formSubmit.addEventListener("submit", function(e){
    e.preventDefault();
    let inputText = input.value;
    let todo = document.createElement("li");
    todo.textContent = inputText;
    todo.classList.add("item");
    if(listCount % 2 === 0){todo.style.backgroundColor = "lightgray";}
    else{todo.style.backgroundColor = "#eee";}
    document.querySelector("ul").append(todo);
    document.querySelector("input").value = "";
    listCount += 1;
});

showbar.addEventListener("click", function(){
    input.classList.toggle("hidden");
});