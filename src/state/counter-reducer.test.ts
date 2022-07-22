import {counterReducer, increment, initialState, reset} from "./counter-reducer";

import {StatusType} from "../App";


test('counter should increment + 1', () => {

    const startState: typeof initialState = {
        counter: 0,
        minValue: 0,
        maxValue: 5,
        status: 'set' as StatusType
    }

    const newState = counterReducer(startState, increment())

    expect(newState.counter).toBe(1)
})

test('counter should reset to minValue', () => {

    const startState: typeof initialState = {
        counter: 0,
        minValue: 3,
        maxValue: 5,
        status: 'set' as StatusType
    }

    const newState = counterReducer(startState, reset(startState.minValue))

    expect(newState.minValue).toBe(3)
})