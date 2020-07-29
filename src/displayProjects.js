function renderProjects(projects){
    const projectArea = document.querySelector('#projects');

    for (let i = 0; i < projects.projectList.length; i++){
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-div');
        const name = document.createElement('h2');

        name.textContent = projects.projectList[i].name;

        projectDiv.appendChild(name);

        projectArea.appendChild(projectDiv);
    }

    const newBtnDiv = document.createElement('div');
    newBtnDiv.classList.add('newbtn-div');

    const newProjectBtn = document.createElement('button');
    newProjectBtn.classList.add('newproject-btn');
    newProjectBtn.setAttribute('type', 'button');
    newProjectBtn.textContent = "+ New Project";

    newBtnDiv.appendChild(newProjectBtn);
    projectArea.appendChild(newBtnDiv);
}

export default renderProjects;