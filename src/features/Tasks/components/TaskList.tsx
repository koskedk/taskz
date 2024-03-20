import React from "react";
import {Task} from "../model/Task";

interface Props {
    tasks: Task[]
    onComplete: (id: number) => void
    onDelete: (id: number) => void
}

const TaskList: React.FC<Props> = ({tasks, onComplete, onDelete}) => {
    return (
        <div>
            <ul>
                {tasks?.map(t => (
                    <li key={t.id}>
                        <span>{t.name} Done :{`${t.isComplete}`}</span>
                        <button onClick={() => onComplete(t.id)} disabled={t.isComplete}>Done</button>
                        <button onClick={() => onDelete(t.id)} disabled={t.isComplete}> x</button>
                    </li>
                ))}
            </ul>
            <p>Total:{tasks?.length}</p>
        </div>
    )
}

export default TaskList