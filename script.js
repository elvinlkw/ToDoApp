var formSubmit = document.querySelector("#form-id");

formSubmit.addEventListener("submit", function(e){
    e.preventDefault();
    var inputText = document.querySelector("input").value;

    var todo = document.createElement("li");
    todo.textContent = inputText;
    document.querySelector("ul").append(todo);
    document.querySelector("input").value = "";
});