let tasks = []
const inputEl = document.getElementById("input-el")
const addBtn = document.getElementById("add-btn")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("del-btn")

let tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))
if (tasksFromLocalStorage) {
    tasks = tasksFromLocalStorage
    render(tasks)
}

addBtn.addEventListener("click", function() {
    tasks.push(inputEl.value)
    
    inputEl.value = ""

    render(tasks)

    localStorage.setItem("tasks", JSON.stringify(tasks))
})


function render(taskList) {
    let listItems = ""
    for (let i = 0; i < taskList.length; i++) {
        // if (inputEl.value === "") {
        //     alert("You must write something!")
        // }
        // else{
        //     listItems += "<li>" + taskList[i] + "</li>"
        //     console.log(listItems)
        // }
        listItems += "<li>" + taskList[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}




ulEl.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
}, false);

delBtn.addEventListener("click", function() {
    ulEl.innerHTML = ""
    localStorage.clear()
})