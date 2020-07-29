import Task from "./task";
import Project from "./project";
import "./displayTasks"
import "./style.css";
import renderTasks from "./displayTasks";
import renderProjects from "./displayProjects";
import ProjectList from "./projectList";

const test = new Task("Reminder", "Finish up testing and show demo", 25, "high");
const test2 = new Task("Help", "Call for help", 1, "low");
const test3 = new Task("Pick up", "Pick up groceries", 30, "high");
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
}

setEventListeners();

const newTaskForm = document.querySelector('.task-form');
const closeBtn = document.querySelector('#close');
const taskSubmitBtn = document.querySelector('#task-submit');

closeBtn.addEventListener('click', () => {
    newTaskForm.setAttribute('style', 'display: none');
});

taskSubmitBtn.addEventListener('click', () => {
    let title = document.getElementById('title').value;
    let desc = document.getElementById('description').value;
    let newTask = new Task(title, desc, 4, "hgih");
    currentProject.addTask(newTask);
    renderTasks(currentProject);
    newTaskForm.setAttribute('style', 'display: none');
    setEventListeners();
});