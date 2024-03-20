import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import taskReducer from "../features/Tasks/state/taskSlice";
import counterReducer from "../features/Counters/state/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        tasks: taskReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;