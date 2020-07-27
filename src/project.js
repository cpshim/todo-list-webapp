class Project{
    constructor(name){
        this.name = name;
        this.list = [];
    }

    addTask(task){
        this.list.push(task);
    }

    removeTask(index){
        this.list.splice(index, 1);
    }
}

export default Project;