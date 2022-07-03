const form = document.forms["myform"]
const input = form["task"]
const ul = document.getElementById("task-list")


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const val = input.value

    if (val !== "") {
        const newli = document.createElement("li")
        newli.innerHTML = val + "<i onclick =\"deletetask(this)\" class=\"fas fa-times\" style=\"float:right;\"></i>"
        ul.appendChild(newli)
    }

})

function deletetask(element) {
    
    element.parentElement.style.textDecoration="Line-through"
    element.parentElement.remove()
}

