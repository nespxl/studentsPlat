import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceNews from "./sliceNews";
import sliceChatInput from "./sliceChatInput";
import sliceJob from "./sliceJob";

export const rootReducer = combineReducers({
    sliceNews,
    sliceChatInput,
    sliceJob
})

export const reducerToolkit = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type ReducerToolkitState = ReturnType<typeof reducerToolkit>
export type AppDispatch = ReducerToolkitState['dispatch']
