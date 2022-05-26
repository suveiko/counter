import React from 'react';
import s from './Counter.module.css'

type CounterType = {
    counter: number
    maxValue: number
}

function Counter({counter, maxValue}: CounterType) {

    const counterStyle = counter === maxValue ? s.error : s.counter

    return (
        <h1 className={counterStyle}>{counter}</h1>
    )
}

export default Counter