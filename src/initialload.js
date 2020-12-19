
function initialLoad(){
    let content = document.getElementById("content");
    let projects = document.createElement("div");
    let todoItems = document.createElement("div");
    projects.id = "projects";
    todoItems.id = "items";
    let newProject = document.createElement("button");
    let newTask = document.createElement("button");
    newProject.id = "newproject";
    newTask.id = "newtask";
    newProject.textContent = "New Project";
    newTask.textContent = "New Task";
    projects.append(newProject);
    todoItems.append(newTask);
    content.append(projects);
    content.append(todoItems);
}

export default initialLoad;