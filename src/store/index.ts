import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceNews from "./sliceNews";

export const rootReducer = combineReducers({
    sliceNews
})

export const reducerToolkit = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type ReducerToolkitState = ReturnType<typeof reducerToolkit>
export type AppDispatch = ReducerToolkitState['dispatch']
