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
}

export default renderProjects;