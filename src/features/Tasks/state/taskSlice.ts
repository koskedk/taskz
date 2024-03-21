import {Task} from "../model/Task";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface TaskState {
    tasks: Task[]
    isLoading: boolean
    error?: string | null | undefined
}

const initialState: TaskState = {
    tasks: [],
    isLoading: false,
    error: null
}

export const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    endpoints: (builder) => ({
        getAllTasks: builder.query<Task[], void>({
            query: () => 'tasks'
        })
    })
})

export const {useGetAllTasksQuery} = taskApi