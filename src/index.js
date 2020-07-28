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
project.addTask(test);
project.addTask(test2);
project.addTask(test3);
projectList.addProject(project);
projectList.addProject(project2);


console.log(test);
console.log(project.taskList);
console.log(project.taskList[1].title);
console.log(projectList.projectList[0].name);

renderTasks(project);
renderProjects(projectList);
