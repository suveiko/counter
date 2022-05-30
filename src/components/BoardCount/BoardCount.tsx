import React from 'react';
import Counter from "../Counter/Counter";
import s from './BoardCount.module.css'
import {StatusType} from "../../App";
import {UniversalButton} from "../UniversalButton/UniversalButton";

type BoardCountType = {
    counter: number
    callBackInc: () => void
    callBackReset: () => void
    minValue: number
    maxValue: number
    status: StatusType
}

export const BoardCount = ({counter, callBackInc, callBackReset, minValue, maxValue, status}: BoardCountType) => {
    return (
        <div>
            <div>
                {status === 'error'
                    ? <div>Incorrect value!</div>
                    : status === 'set'
                        ? <div>Enter values and press "SET"</div>
                        : <Counter counter={counter} maxValue={maxValue}/>}
            </div>
            <div className={s.container}>
                <UniversalButton onClick={callBackInc} disabled={counter === maxValue} name={'inc'}/>
                <UniversalButton onClick={callBackReset} disabled={counter === minValue} name={'reset'}/>
            </div>
        </div>
    );
};
