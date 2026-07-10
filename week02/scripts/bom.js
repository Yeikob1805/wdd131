const button = document.querySelector("button");
const input = document.querySelector("#favchap");
const list = document.querySelector("ul");


button.addEventListener("click", function(){
    
    if (input.value.trim() !== "" ){
        const li = document.createElement("li");
        const deleteButton = document.createElement("button")
        li.textContent = input.value;

        deleteButton.textContent = "❌";

        li.append(deleteButton);

        list.append(li);

        deleteButton.addEventListener("click", function(){
            li.remove();
        })

        input.value = "";
        input.focus()
    }
    
})