import {Task} from "../model/Task";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../app/store";

export interface TaskState {
    tasks: Task[]
    isLoading: boolean
    error?: string | null | undefined
}

const initialState: TaskState = {
    tasks: [],
    isLoading: true,
    error: null
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
            state.isLoading=false;
        },
        completeTask: (state, action: PayloadAction<number>) => {
            const index = state.tasks.findIndex(t => t.id === action.payload);
            state.tasks[index] = {...state.tasks[index], isComplete: true};
            state.isLoading=false;
        },
        completeAllTasks: (state) => {
            state.tasks.forEach(t => t.isComplete = true)
            state.isLoading=false;
        },
        removeTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(t => t.id !== action.payload)
            state.isLoading=false;
        },
        removeAllTask: (state) => {
            state.tasks = []
            state.isLoading=false;
        },
    }
})

export const selectAllTasks = (state: RootState) => state.tasks.tasks;
export const {addTask, completeTask, completeAllTasks, removeTask, removeAllTask} = taskSlice.actions
export default taskSlice.reducer