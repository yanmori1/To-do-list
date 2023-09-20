var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    // Add strikethrough functionality when clicking the list item
    li.addEventListener("click", crossOut);

    // Add a delete button
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    deleteButton.addEventListener("click", deleteListItem);

    li.appendChild(deleteButton);

    ul.appendChild(li);

    // Reset the text input field
    input.value = "";
}

//START STRIKETHROUGH
// because it's in the function, it only adds it for new items
function crossOut(event) {
    event.target.classList.toggle("done");
}

// ADD CLASS DELETE (DISPLAY: NONE)
function deleteListItem(event) {
    event.target.parentElement.remove();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
