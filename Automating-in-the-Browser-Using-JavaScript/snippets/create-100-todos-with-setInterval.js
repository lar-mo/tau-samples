var botTodoCount = 20;

var creatorBot = setInterval(function() {
        document.querySelector("input.new-todo").value="todo "+botTodoCount;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change', {'bubbles':true}));

        botTodoCount--;

        if(botTodoCount==0){
            clearInterval(creatorBot);
        }
    }, 500);
