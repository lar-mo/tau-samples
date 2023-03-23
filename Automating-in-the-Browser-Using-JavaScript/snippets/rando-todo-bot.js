var rando = new function() {

    function getRandomInt(x){
        return Math.floor(Math.random()*x);
    }

    function getRandomItemIndex(){
        max = document.querySelectorAll("ul.todo-list li").length;
        if(max===0){
            console.log("no items to choose from");
            return 0;
        }
        x = getRandomInt(max)+1;
        return x;
    }

    // toggleAll
    this.toggleAll = function() {
        console.log("toggle all");
        autoTodo.toggleAll();
    }

    // selectRandomItem
    this.selectRandomItem = function() {
        x = getRandomItemIndex();
        if(x>0){
            console.log("select item "+x);
            autoTodo.selectItemX(x);
        }
    }

    // deleteRandomItem
    this.deleteRandomItem = function() {
      x = getRandomItemIndex();
      if(x>0){
          console.log("delete item "+x);
          autoTodo.deleteItemX(x);
      }
    }

    // clearCompleted
    this.clearCompleted = function() {
        console.log("clear completed");
        autoTodo.clearCompleted();
    }

    // filterAll
    this.filterAll = function() {
        console.log("filter all");
        autoTodo.filterAll();
    }

    // filterActive
    this.filterActive = function() {
        console.log("filter active");
        autoTodo.filterActive();
    }

    // filterCompleted
    this.filterCompleted = function() {
        console.log("filter completed");
        autoTodo.filterCompleted();
    }

    // createRandomTodoItem
    this.createRandomTodoItem = function() {
        console.log("create a todo");
        autoTodo.createTodoItem("random todo " + Date.now());
    }

    // amendRandomTodo
    this.amendRandomTodo = function() {
        x = getRandomItemIndex();
        if(x>0) {
            console.log("amend todo " + x);
            autoTodo.amendTodoItem(x, "amended random todo " + Date.now());
        }
    }
}
