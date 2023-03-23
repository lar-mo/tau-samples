// two blocks of code

// function createTodoItem(name) {
//     document.querySelector("input.new-todo").value=name;
//     document.querySelector("input.new-todo").dispatchEvent(new Event('change', {'bubbles':true}));
// }
//
// for(x=1; x<=100; x++) {
//     setTimeout(createTodoItem, x*100, "todo "+x)
// }


// single block of code

for(x=1; x<=100; x++) {
    setTimeout(function(name) {
        document.querySelector("input.new-todo").value=name;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change', {'bubbles':true}));
    }, x*100, "todo "+x)
}

// bookmarklet

// javascript: (function() {
//     for (x = 1; x <= 100; x++) {
//         setTimeout(function(name) {
//             document.querySelector("input.new-todo").value = name;
//             document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
//                 'bubbles': true
//             }));
//         }, x * 100, "todo " + x)
//     }
// }
// )()
