function clickItem(item) {
    item.click();
}

function toggleAll() {
    document.querySelector('#toggle-all').click();
}

function selectItemX(x) {
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click();
}

function deleteItemX(x) {
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") button.destroy").click();
}

function clearCompleted() {
    document.querySelector("button.clear-completed").click();
}

function filterAll() {
    document.querySelector("ul.filters > li:nth-child(1) > a").click();
}

function filterActive() {
    document.querySelector("ul.filters > li:nth-child(2) > a").click();
}

function filterCompleted() {
    document.querySelector("ul.filters > li:nth-child(3) > a").click();
}

function createTodoItem(name) {
    document.querySelector("input.new-todo").value=name;
    document.querySelector("input.new-todo").dispatchEvent(new Event('change', {'bubbles':true}));
}

function amendTodoItem(pos, name) {
    document.querySelector("ul.todo-list > li:nth-child(" + pos + ") > div > label").dispatchEvent(new Event('dblclick', {"bubbles":true}));
    document.querySelector("ul.todo-list > li:nth-child(" + pos + ") .edit").value=name;
    document.querySelector("ul.todo-list > li:nth-child(" + pos + ") .edit").dispatchEvent(new Event('blur'));
}

function toggleEvenTodos() {
    var toggles = document.querySelectorAll(".toggle");
    for(var togglepos=0;togglepos < toggles.length; togglepos++) {
        if(togglepos%2==1){
    	toggles[togglepos].click();
        }
    }
}
