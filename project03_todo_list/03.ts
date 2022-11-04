/* This function will keep adding stuff to your todo list
and then alert your full list when you complete it.
*/

function ToDo() {
    var todo:string[] = []
    while (true) {
        var name = prompt("Please enter your task to be done. (leave cell empty to stop)");
        if (name !== null) {
            todo.push(name);
        } else {
            alert(`Your todo list is : ${todo}`);
            break;
        }
    }
    return todo;
}



var todoList = ToDo()