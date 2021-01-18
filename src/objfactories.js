

 const ourTasks = (() => {
  let _ourProjects = [{projectTitle: "Default project folder",
                     
                    tasks: [{title: "Task one", 
                    description: "this task goes like this", 
                    dueDate: "2021-07-22", priority: "2", 
                    notes: "these are the notes", checklist: false},{title: "Task Two", 
                    description: "this task goes like this", 
                    dueDate: "2021-07-22", priority: "2", 
                    notes: "these are the notes", checklist: false},
                    {title: "Task three", 
                    description: "this task goes like this and this", 
                    dueDate: "2021-03-26", priority: "1", 
                    notes: "these are the notes for this other one", checklist: false}]},
                    
                    {projectTitle: "New project folder", 
                    tasks: [{title: "Task four", 
                    description: "this task goes like this", 
                    dueDate: "2021-07-22", priority: "2", 
                    notes: "these are the notes", checklist: false},
                    {title: "Task five", 
                    description: "this task goes like this and this", 
                    dueDate: "2021-03-26", priority: "1", 
                    notes: "these are the notes for this other one", checklist: false}]},
                    {projectTitle: "New project folder", 
                    tasks: [{title: "Task four", 
                    description: "this task goes like this", 
                    dueDate: "2021-07-22", priority: "2", 
                    notes: "these are the notes", checklist: false},
                    {title: "Task five", 
                    description: "this task goes like this and this", 
                    dueDate: "2021-03-26", priority: "1", 
                    notes: "these are the notes for this other one", checklist: false}]} ];
      
      function createProject(ourProjectTitle){
         _ourProjects.push({ourProjectTitle, tasks: []})
      }
      
      function newTask(title,description,dueDate,priority,notes,checklist = false,projectTitle){
         let ourTask = {title, description,dueDate,priority,notes,checklist};
         
         for(let i = 0; i < _ourProjects.length; i++){
           if(_ourProjects[i].projectTitle == projectTitle){
             _ourProjects[i].tasks.push(ourTask);
           }
           
         }
      }
      
      function getList(){
        return _ourProjects;
      }
      
      function getFolderName(){
        return _ourProjects.map(folder => folder.projectTitle);
      }

      
      function getTitle(ProjectFolderName){
        for(let r = 0; r < _ourProjects.length; r++){
          if(_ourProjects[r].projectTitle == ProjectFolderName){
            let tittleArr = _ourProjects[r].tasks.map(taskList => taskList.title);
            return tittleArr;
          }
          
        }
      }

      function getTask(ourTaskTittle, folderName){
         for(const folder of _ourProjects){
           if(folder.projectTitle == folderName){
             for(const task of folder.tasks){
               if(task.title == ourTaskTittle){
                 return task;
               }
             }
           }
         }
      }

      function getLastProjectTitle(){
        
        return _ourProjects[_ourProjects.length - 1].projectTitle;
      }
      
  

     return {
       createProject,
       newTask,
       getList,
       getTitle,
       getFolderName,
       getTask,
       getLastProjectTitle,
     };
})();

export default ourTasks;