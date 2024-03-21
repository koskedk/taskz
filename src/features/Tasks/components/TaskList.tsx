import React from "react";
import {Task} from "../model/Task";

interface Props {
    tasks: Task[]
}

const TaskList: React.FC<Props> = ({tasks}) => {
    return (
        <div>
            <ul>
                {tasks?.map(t => (
                    <li key={t.id}>
                        <span>{t.name} Done :{`${t.isComplete}`}</span>
                    </li>
                ))}
            </ul>
            <p>Total:{tasks?.length}</p>
        </div>
    )
}

export default TaskList