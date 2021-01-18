

import ourTasks from "./objfactories";
let taskDisplay = document.querySelector(".details");

function renderProjects(){
let projectsDisplay = document.querySelector(".projects");

let ourlist = ourTasks.getList();


  for(let k = 0; k < ourlist.length; k++){
      let projectDiv = document.createElement("div");
      let projectName = document.createElement("button");
      let tasksDiv = document.createElement("div");
      tasksDiv.classList.add("content");
      projectName.classList.add("collapsible")
      projectName.textContent = ourlist[k].projectTitle;
      projectDiv.id = k;
      projectDiv.classList.add("projectdiv");
      projectDiv.append(projectName);
      projectDiv.append(tasksDiv);
      projectsDisplay.append(projectDiv);
  }

    let newProjectBtn = document.createElement("button");
    newProjectBtn.textContent = "+ Add Project";
    newProjectBtn.classList.add("newprojectbtn");
    projectsDisplay.append(newProjectBtn);
  

}

function renderTasksCollapsibleContainer(){
  let ourlist = ourTasks.getList();

  
 var coll = document.querySelectorAll(".collapsible");

for (let l = 0; l < coll.length; l++) {
  coll[l].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


  

}

function renderTasksTittle(){
  var coll = document.querySelectorAll(".collapsible");
  for(let p = 0; p < coll.length; p++){
    let projectFolderName = coll[p].textContent;
    let ourTitlesArr = ourTasks.getTitle(projectFolderName);
    for(let u = 0; u < ourTitlesArr.length; u++){
      let titleElem = document.createElement("h3");
      titleElem.textContent = String(ourTitlesArr[u]);
      titleElem.classList.add("pointerstyle");
      titleElem.setAttribute("data-folder", coll[p].textContent)
      coll[p].nextElementSibling.append(titleElem);
    }
    let newTaskBtn = document.createElement("button");
    newTaskBtn.textContent = "+ Add Task";
    newTaskBtn.classList.add("newtaskbtn");
    coll[p].nextElementSibling.append(newTaskBtn);
  }
}

function renderTasksDetail(ourTaskTittle,folderName){
    let ourDetailsDiv = document.querySelector(".details"); 
    let ourDetails = ourTasks.getTask(ourTaskTittle,folderName);

    let ourNewDetails = document.createElement("div");
    ourNewDetails.classList.add("details");

    let ourTitle = document.createElement("h3");
    ourTitle.textContent = "title: " + ourDetails.title;
    let ourDescription = document.createElement("h4");
    ourDescription.textContent = "Description: " + ourDetails.description;
    let ourDueDate = document.createElement("h4");
    ourDueDate.textContent = "Due Date: " + ourDetails.dueDate;
    let ourPriority = document.createElement("h4");
    ourPriority.textContent = "Priority: " + ourDetails.priority;
    let ourNotes = document.createElement("h4");
    ourNotes.textContent = "Notes: " + ourDetails.notes;
    
    ourNewDetails.append(ourTitle);
    ourNewDetails.append(ourDescription);
    ourNewDetails.append(ourDueDate);
    ourNewDetails.append(ourPriority);
    ourNewDetails.append(ourNotes);

    ourDetailsDiv.replaceWith(ourNewDetails);


}

function renderNewProject(){
   

let projectsDisplay = document.querySelector(".projects");
let newProjectBtn = document.querySelector(".newprojectbtn");

let ourProjectTitle = ourTasks.getLastProjectTitle();
 

  
      let projectDiv = document.createElement("div");
      let projectName = document.createElement("button");
      let tasksDiv = document.createElement("div");
      tasksDiv.classList.add("content");
      projectName.classList.add("collapsible")
      projectName.textContent = ourProjectTitle;
      
      projectDiv.classList.add("projectdiv");
      projectDiv.append(projectName);
      projectDiv.append(tasksDiv);
      projectsDisplay.insertBefore(newProjectBtn);
  
   
  
}




export {renderProjects, renderTasksCollapsibleContainer, renderTasksTittle, renderTasksDetail,renderNewProject};