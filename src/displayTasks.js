function renderTasks(project){
    const taskArea = document.querySelector('#task');
    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.name;

    taskArea.innerHTML = '';

    taskArea.appendChild(projectTitle);

    for (let i = 0; i < project.taskList.length; i++){
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-div');
        const taskInfo = document.createElement('p');
        taskInfo.classList.add('task-info');
        const taskDate = document.createElement('p');
        taskDate.classList.add('task-date');
        const line = document.createElement('hr');

        const label = document.createElement('label');
        label.classList.add('check-container');

        const check = document.createElement('input');
        check.classList.add('check');
        check.setAttribute('type', 'checkbox');

        const checkCustom = document.createElement('span');
        checkCustom.classList.add('check-custom');
        taskInfo.textContent = `${project.taskList[i].title}: 
            ${project.taskList[i].description}`;

        taskDate.textContent = `${project.taskList[i].dueDate} Priority: 
            ${project.taskList[i].priority}`;

        label.appendChild(check);
        label.appendChild(checkCustom);
        taskDiv.appendChild(label);
        taskDiv.appendChild(taskInfo);
        taskDiv.appendChild(taskDate);
        taskArea.appendChild(taskDiv);
        taskArea.appendChild(line);
    }

    const newBtnDiv = document.createElement('div');
    newBtnDiv.classList.add('newbtn-div');

    const newTaskBtn = document.createElement('button');
    newTaskBtn.classList.add('newtask-btn');
    newTaskBtn.setAttribute('type', 'button');
    newTaskBtn.textContent = "+ New Task";

    newBtnDiv.appendChild(newTaskBtn);
    taskArea.appendChild(newBtnDiv);
}

export default renderTasks;