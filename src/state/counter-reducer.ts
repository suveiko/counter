import {StatusType} from "../App";


type ActionType = ReturnType<typeof increment>
    | ReturnType<typeof reset>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof setMinValue>
    | ReturnType<typeof setSetting>
    | ReturnType<typeof setError>
    | ReturnType<typeof setCounter>


export const initialState = {
    counter: 0,
    minValue: 0,
    maxValue: 5,
    status: 'set' as StatusType
}


export const counterReducer = (state: typeof initialState = initialState, action: ActionType): typeof initialState => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1}
        case 'RESET' :
            return {...state, counter: action.minValue}
        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.maxValue}
        case 'SET_MIN_VALUE' :
            return {...state, minValue: action.minValue}
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


export const increment = () => ({type: 'INCREMENT'}) as const
export const reset = (minValue: number) => ({type: 'RESET', minValue}) as const
export const setMaxValue = (maxValue: number) => ({type: 'SET_MAX_VALUE', maxValue}) as const
export const setMinValue = (minValue: number) => ({type: 'SET_MIN_VALUE', minValue}) as const
export const setSetting = () => ({type: 'SET_SETTING'}) as const
export const setError = () => ({type: 'SET_ERROR'}) as const
export const setCounter = () => ({type: 'SET_COUNTER'}) as const
