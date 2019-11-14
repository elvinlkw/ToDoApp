var formSubmit = document.querySelector("#form-id");
var showbar = document.querySelector("#show-input");
var input = document.querySelector("input");
var list = [];
var listCount = 0;

formSubmit.addEventListener("submit", function(e){
    e.preventDefault();
    list.push(input.value);
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