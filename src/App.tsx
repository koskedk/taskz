import React from 'react';
import TaskPage from "./features/Tasks/components/TaskPage";

const App: React.FC = () => {
    return (
        <div>
            <h1>taskZ v1</h1>
            <hr/>
            <TaskPage/>
        </div>
    );
}

export default App;
