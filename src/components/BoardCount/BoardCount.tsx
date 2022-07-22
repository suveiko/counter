import {memo} from "react";

import {Counter, CounterType} from "../Counter/Counter";
import {UniversalButton} from "../UniversalButton/UniversalButton";

import s from './BoardCount.module.css'


type BoardCountType = {
    callBackInc: () => void
    callBackReset: () => void
    minValue: number
} & CounterType


export const BoardCount = memo(({
                                    counter, callBackInc,
                                    callBackReset, minValue,
                                    maxValue, status
                                }: BoardCountType) => {

    return (
        <div className={s.mainContainer}>
            <Counter counter={counter} maxValue={maxValue} status={status}/>
            <div className={s.container}>
                <UniversalButton
                    onClick={callBackInc}
                    disabled={counter === maxValue || status === 'error' || status === 'set'}
                    name='INC'
                />
                <UniversalButton
                    onClick={callBackReset}
                    disabled={counter === minValue || status === 'error' || status === 'set'}
                    name='RESET'
                />
            </div>
        </div>
    )
})
