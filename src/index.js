import Task from "./task";
import Project from "./project";
import "./displayTasks"
import "./style.css";
import renderTasks from "./displayTasks";
import renderProjects from "./displayProjects";
import ProjectList from "./projectList";
import Litepicker from 'litepicker';

const test = new Task("Reminder", "Finish up testing and show demo", "Jul 09, 2020", "High");
const test2 = new Task("Help", "Call for help", "Aug 17, 2020", "Low");
const test3 = new Task("Reminder", "Pick up groceries", "Jul 27, 2020", "High");
const project = new Project("My Project");
const project2 = new Project("My Project 2");
const projectList = new ProjectList();
let currentProject = project;
project.addTask(test);
project.addTask(test2);
project.addTask(test3);
projectList.addProject(project);
projectList.addProject(project2);

renderTasks(project);
renderProjects(projectList);

function setEventListeners(){
    const checkboxes = document.getElementsByClassName('check');
    const customCheckboxes = document.getElementsByClassName('check-custom');
    const taskInfo = document.getElementsByClassName('task-info');

    for (let i = 0; i < checkboxes.length; i++){
        checkboxes[i].addEventListener('click', () => {
            taskInfo[i].classList.add('strike');
            customCheckboxes[i].setAttribute('style', 'background-color: #009BFF');
        });     
    }

    const newTaskBtn = document.querySelector('.newtask-btn');
    const newTaskForm = document.querySelector('.task-form');

    newTaskBtn.addEventListener('click', () => {
        newTaskForm.setAttribute('style', 'display: block');
    });

    const projectTabs = document.getElementsByClassName('project-div');

    for (let i = 0; i < projectTabs.length; i++){
        projectTabs[i].addEventListener('click', () => {
            renderTasks(projectList.projectList[i]);
            currentProject = projectList.projectList[i];
            setEventListeners();
        });     
    }

    const newProjectBtn = document.querySelector('.newproject-btn');
    const newProjectForm = document.querySelector('.project-form');

    newProjectBtn.addEventListener('click', () => {
        newProjectForm.setAttribute('style', 'display: block');
    });
}

setEventListeners();

const newTaskForm = document.querySelector('.task-form');
const newProjectForm = document.querySelector('.project-form');
const closeTaskBtn = document.querySelector('#task-close');
const closeProjectBtn = document.querySelector('#project-close');
const taskSubmitBtn = document.querySelector('#task-submit');
const projectSubmitBtn = document.querySelector('#project-submit');

closeTaskBtn.addEventListener('click', () => {
    newTaskForm.setAttribute('style', 'display: none');
});

closeProjectBtn.addEventListener('click', () => {
    newProjectForm.setAttribute('style', 'display: none');
});

taskSubmitBtn.addEventListener('click', () => {
    let title = document.getElementById('title').value;
    let desc = document.getElementById('description').value;
    let date = document.getElementById('datepicker').value;
    let priority = null;
    if (document.getElementById('high').checked) {
        priority = "High";
    }
    else if(document.getElementById('low').checked) {
        priority = "Low";
    }
    console.log(date);
    let newTask = new Task(title, desc, date, priority);
    console.log(newTask);
    currentProject.addTask(newTask);
    renderTasks(currentProject);
    newTaskForm.setAttribute('style', 'display: none');
    setEventListeners();
});

projectSubmitBtn.addEventListener('click', () => {
    let title = document.getElementById('project-title').value;
    let newProject = new Project(title);
    projectList.addProject(newProject);
    renderProjects(projectList);
    newProjectForm.setAttribute('style', 'display: none');
    setEventListeners();
});

var picker = new Litepicker({
    element: document.getElementById('datepicker'),
    format: 'MMM DD, YYYY',
});