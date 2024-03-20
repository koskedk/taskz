import React, {ReactEventHandler, useState} from "react";
import TaskList from "./TaskList";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {completeTask, selectAllTasks, addTask, removeTask, completeAllTasks, removeAllTask} from "../state/taskSlice";
import {Task} from "../model/Task";

const TaskPage: React.FC = () => {
    const [newTask, setNewTask] = useState('')
    const tasks = useAppSelector(selectAllTasks)
    const dispatch = useAppDispatch()
    const handleComplete = (id: number) => {
        dispatch(completeTask(id))
    }
    const handleCompleteAll = () => {
        dispatch(completeAllTasks())
    }

    const handleDelete = (id: number) => {
        dispatch(removeTask(id))
    }
    const handleDeleteAll = () => {
        dispatch(removeAllTask())
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            handleAddTask()
        }
    };

    const handleAddTask = () => {
        const task: Task = {
            id: tasks.length + 1,
            name: newTask,
            isComplete: false
        }
        dispatch(addTask(task))
        setNewTask('')
    }

    return (
        <div>
            <p>My Tasks</p>

            <input value={newTask} type="text" onChange={e => setNewTask(e.target.value)} onKeyDown={e=>handleKeyDown(e)}/>
            <button disabled={newTask.length == 0} onClick={handleAddTask}>Add Task</button>
            <TaskList tasks={tasks} onComplete={handleComplete} onDelete={handleDelete}/>
            <button disabled={tasks.length == 0} onClick={handleCompleteAll}>All Done</button>
            <button disabled={tasks.length == 0} onClick={handleDeleteAll}>Delete All</button>
        </div>)
}

export default TaskPage