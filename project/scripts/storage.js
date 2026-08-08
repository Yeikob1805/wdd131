const STORAGE_KEY="tasklyTasks";

function saveTasks(tasks){

    localStorage.setItem(STORAGE_KEY,JSON.stringify(tasks));

}

function loadTasks(){

    const savedTasks=localStorage.getItem(STORAGE_KEY);

    if(!savedTasks){
        return [];
    }

    return JSON.parse(savedTasks);

}

function clearTasks(){

    localStorage.removeItem(STORAGE_KEY);

}