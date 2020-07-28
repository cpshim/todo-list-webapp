function renderProjects(projects){
    const projectArea = document.querySelector('#projects');

    for (let i = 0; i < projects.projectList.length; i++){
        const name = document.createElement('h1');

        name.textContent = projects.projectList[i].name;

        projectArea.appendChild(name);
    }
}

export default renderProjects;