function renderTasks(project){
    const taskArea = document.querySelector('#task');
    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.name;

    taskArea.appendChild(projectTitle);

    for (let i = 0; i < project.taskList.length; i++){
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-div');
        const taskInfo = document.createElement('p');
        taskInfo.classList.add('task-info');
        const line = document.createElement('hr');

        const label = document.createElement('label');
        label.classList.add('check-container');

        const check = document.createElement("input");
        check.classList.add('check');
        check.setAttribute("type", "checkbox");

        check.addEventListener('click', () => {
            taskInfo.classList.add('strike');
            checkCustom.setAttribute('style', 'background-color: #009BFF');
        });

        const checkCustom = document.createElement("span");
        checkCustom.classList.add('check-custom');
        taskInfo.textContent = `${project.taskList[i].title}: ${project.taskList[i].description}`;

        label.appendChild(check);
        label.appendChild(checkCustom);
        taskDiv.appendChild(label);
        taskDiv.appendChild(taskInfo);
        taskArea.appendChild(taskDiv);
        taskArea.appendChild(line);
    }

}

export default renderTasks;