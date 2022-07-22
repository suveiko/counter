import {StatusType} from "../App";


type ActionType = ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setSettingAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setCounterAC>


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

export const incrementAC = () => ({type: 'INCREMENT'}) as const
export const resetAC = (minValue: number) => ({type: 'RESET', minValue}) as const
export const setMaxValueAC = (maxValue: number) => ({type: 'SET_MAX_VALUE', maxValue}) as const
export const setMinValueAC = (minValue: number) => ({type: 'SET_MIN_VALUE', minValue}) as const
export const setSettingAC = () => ({type: 'SET_SETTING'}) as const
export const setErrorAC = () => ({type: 'SET_ERROR'}) as const
export const setCounterAC = () => ({type: 'SET_COUNTER'}) as const
