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
        <div className={s.desk}>
            <Counter counter={counter} maxValue={maxValue} status={status}/>
            <div className={s.container}>
                <UniversalButton
                    onClick={callBackInc}
                    disabled={counter === maxValue || status === 'error' || status === 'set'}
                    name={'inc'}
                />
                <UniversalButton
                    onClick={callBackReset}
                    disabled={counter === minValue || status === 'error' || status === 'set'}
                    name={'reset'}
                />
            </div>
        </div>
    );
};
