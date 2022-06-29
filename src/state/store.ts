import {createStore} from "redux";

import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localStorage";


export type AppRootState = ReturnType<typeof counterReducer>

const persistedState = loadState();
export const store = createStore(
    counterReducer,
    persistedState);
store.subscribe(() => saveState(store.getState()));