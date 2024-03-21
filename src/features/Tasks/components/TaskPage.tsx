import React from "react";
import TaskList from "./TaskList";
import {useGetAllTasksQuery} from "../state/taskSlice";

const TaskPage: React.FC = () => {
    const {data, isLoading, error} = useGetAllTasksQuery()

    if (isLoading)
        return (<div>Loading...</div>)

    return (
        <div>
            <p>My Tasks</p>
            <TaskList tasks={data!}/>
        </div>)
}

export default TaskPage