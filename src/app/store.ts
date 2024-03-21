import {configureStore} from "@reduxjs/toolkit/react";
import {setupListeners} from "@reduxjs/toolkit/query/react";
import {taskApi} from "../features/Tasks/state/taskSlice";

export const store = configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(taskApi.middleware),
});

setupListeners(store.dispatch)