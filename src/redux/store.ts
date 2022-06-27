import {createStore} from "redux";

import {counterReducer} from "./counter-reducer";


export type AppRootState = ReturnType<typeof counterReducer>
export const store = createStore(counterReducer)