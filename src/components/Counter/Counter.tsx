import React from 'react';
import s from './Counter.module.css'
import {StatusType} from "../../App";

type CounterType = {
    counter: number
    maxValue: number
    status: StatusType
}

function Counter({counter, maxValue, status}: CounterType) {

    const counterStyle = counter === maxValue ? s.error : s.counter

    return (
        status === 'error' ?
            <div className={s.errorText}> Type correct value!</div>
            : status === 'set'
                ? <div className={s.setText}>Enter values and press "SET"</div>
                : <h1 className={counterStyle}>{counter}</h1>
    )
}

export default Counter

// status === 'error' ?
//     <div className={style.errorText}>
//         Incorrect value!
//     </div> :
//     status === 'set' ?
//         <div className={style.setText}>
//             Enter values and press "SET"
//         </div> :
//         <div className={value === maxValue ? style.redText : style.classicText}>
//             {value}
//         </div>