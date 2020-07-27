import Task from "./task";
import Project from "./project";
import "./style.css";

const test = new Task("TEST", "THIS is a test", 25, "high");
const tasks = new Project("List");
tasks.addTask(test);

console.log(test);
console.log(tasks);