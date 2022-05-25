import React from 'react';
import s from './Counter.module.css'

type CounterType = {
    counter: number
}

function Counter({counter}: CounterType) {

    const counterStyle = counter === 5 ? s.error : s.counter

    return (
        <h1 className={counterStyle}>{counter}</h1>
    )
}

export default Counter