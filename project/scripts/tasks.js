const taskForm = document.querySelector("#taskForm");
const title = document.querySelector("#title");
const category = document.querySelector("#category");
const priority = document.querySelector("#priority");
const dueDate = document.querySelector("#dueDate");

const tasksContainer = document.querySelector("#tasksContainer");

const totalTasks = document.querySelector("#totalTasks");
const pendingTasks = document.querySelector("#pendingTasks");
const completedTasks = document.querySelector("#completedTasks");
const progress = document.querySelector("#progress");

let tasks = loadTasks();

taskForm.addEventListener("submit", addTask);

tasksContainer.addEventListener("click",event=>{

    const id=Number(event.target.dataset.id);

    if(event.target.classList.contains("delete-btn")){
        deleteTask(id);
    }

    if(event.target.classList.contains("complete-btn")){
        toggleTask(id);
    }

});

function addTask(event){
    event.preventDefault();

    const task = {
        id:Date.now(),
        title:title.value,
        category:category.value,
        priority:priority.value,
        dueDate:dueDate.value,
        completed:false
    };

    tasks.push(task);

    saveTasks(tasks);
    renderTasks();
    updateDashboard();

    taskForm.reset();
}

function renderTasks(){

    tasksContainer.innerHTML="";

    tasks.forEach(task=>{

        const card=document.createElement("article");
        card.classList.add("card");

        card.innerHTML=`
            <h3>${task.title}</h3>
            <p><strong>Category:</strong> ${task.category}</p>
            <p><strong>Priority:</strong> ${task.priority}</p>
            <p><strong>Due:</strong> ${task.dueDate || "No date"}</p>

            <button class="complete-btn" data-id="${task.id}">
                ${task.completed ? "Completed" : "Complete"}
            </button>

            <button class="delete-btn" data-id="${task.id}">
                Delete
            </button>
        `;

        tasksContainer.append(card);

    });

}

function deleteTask(id){

    tasks=tasks.filter(task=>task.id!==id);

    saveTasks(tasks);
    renderTasks();
    updateDashboard();

}

function toggleTask(id){

    const task=tasks.find(task=>task.id===id);

    if(task){
        task.completed=!task.completed;
    }

    saveTasks(tasks);
    renderTasks();
    updateDashboard();

}

function updateDashboard(){

    totalTasks.textContent=tasks.length;

    const completed=tasks.filter(task=>task.completed).length;

    completedTasks.textContent=completed;

    pendingTasks.textContent=tasks.length-completed;

    progress.textContent=tasks.length===0
        ? "0%"
        : `${Math.round((completed/tasks.length)*100)}%`;

}

renderTasks();
updateDashboard();