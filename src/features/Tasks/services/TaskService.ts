import {Task} from "../model/Task";

export class TaskService {
    private tasks: Task[] = [];
    addTask = (newTask: Task) => this.tasks.push(newTask)
    getTasks = () => this.tasks
}