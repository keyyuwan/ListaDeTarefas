const ulElement = document.querySelector("#container ul")
const buttonElement = document.querySelector("#container button")

var tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

function renderizarTarefas() {
    ulElement.innerHTML = ''

    for (let tarefa of tarefas) {
        let listElement = document.createElement("li")
        let listText = document.createTextNode(tarefa)

        let position = tarefas.indexOf(tarefa)
        buttonElement.setAttribute("onclick", 'removerTarefa(' + position + ')')

        listElement.appendChild(listText)
        ulElement.appendChild(listElement)

        listElement.setAttribute("class", "notDone")

       listElement.onclick = () => {
           if (listElement.className === "notDone") {
                listElement.style.textDecoration = 'line-through'
                listElement.style.opacity = 0.4
                listElement.className = "done"
           } else if (listElement.className === "done") {
                listElement.style.textDecoration = 'none'
                listElement.style.opacity = 1
                listElement.className = "notDone"
           }
       }
    }
}
renderizarTarefas()

function addTarefa(inputElement) {
    let listText = inputElement.value
    tarefas.push(listText)
    inputElement.value = ''

    renderizarTarefas()
    salvarNoStorage()
}

function removerTarefa(pos) {
    tarefas.splice(pos, 1)

    renderizarTarefas()
    salvarNoStorage()
}

function salvarNoStorage() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}
