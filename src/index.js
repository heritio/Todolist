

import {initialLoadForm, initialProjectForm , initialLoadInterface} from "./initialload";
import ourTasks from "./objfactories";
import {renderProjects, renderTasksTittle, renderTasksCollapsibleContainer,renderTasksDetail, renderNewProject} from "./render";



initialProjectForm();
initialLoadForm();
initialLoadInterface();
renderProjects();
renderTasksCollapsibleContainer();
renderTasksTittle();

let projectFolders = document.querySelector("#projects");
let newProjectBtn = document.querySelector(".newprojectbtn");
let cancelBtnProject = document.querySelector(".cancelbtnproject");
let submitBtnProject = document.querySelector(".submitbtnproject");
let projectInputField = document.querySelector(".projectnamefield");
let projectForm = document.querySelector(".projectform");


projectFolders.addEventListener("click", function(e) {
  if(!e.target.classList.contains("pointerstyle")){
      return;
  }
  renderTasksDetail(e.target.textContent, e.target.getAttribute("data-folder"));
});

newProjectBtn.addEventListener("click", () => {
    projectForm.classList.add("spawn");
})
cancelBtnProject.addEventListener("click", () => {
    projectInputField.value = "";
    projectForm.classList.remove("spawn");
})
submitBtnProject.addEventListener("click", () => {
    if(projectInputField.value == ""){
        return;
    }
   let ourProjectTitle = projectInputField.value;
   ourTasks.createProject(ourProjectTitle);
   projectForm.classList.remove("spawn");
   renderNewProject();
});






