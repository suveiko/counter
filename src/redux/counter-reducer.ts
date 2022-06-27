import {StatusType} from "../App";

const initialState = {
    count: 0,
    minValue: 0,
    maxValue: 5,
    status: 'counter' as StatusType
}
type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.maxValue - 1}
        case 'SET_MAX_VALUE':
            return {...state, maxValue: state.maxValue}
        case 'SET_MIN_VALUE' :
            return {...state, minValue: state.minValue}
        case 'SET_SETTING':
            return {...state, status: 'set'}
        case 'SET_ERROR':
            return {...state, status: 'error'}
        case 'SET_COUNTER':
            return {...state, status: 'counter'}
        default:
            return state
    }
}