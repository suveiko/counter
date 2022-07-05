import React from "react";

import {StatusType} from "../../App";

import s from './Counter.module.css'



type CounterType = {
    counter: number
    maxValue: number
    status: StatusType
}


export const Counter = React.memo(({counter, maxValue, status}: CounterType) => {

    const counterStyle = counter === maxValue ? s.error : s.counter

    return (
        status === 'error' ?
            <div className={s.errorText}> Type correct value, please!</div>
            : status === 'set'
                ? <div className={s.setText}>Enter values and press "SET"</div>
                : <h1 className={counterStyle}>{counter}</h1>
    )
})


