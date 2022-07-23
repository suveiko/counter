import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Counter, CounterType} from "../Counter/Counter";
import {UniversalButton} from "../UniversalButton/UniversalButton";

import {AppRootState} from "../../state/store";
import {increment, reset} from "../../state/counter-reducer";

import s from './BoardCount.module.css'


type BoardCountType = {
    minValue: number
} & CounterType


export const BoardCount =({minValue, maxValue, status}: BoardCountType) => {

    const counter = useSelector<AppRootState, number>(state => state.counter)
    const dispatch = useDispatch()

    const incButton = useCallback(() => {
        counter < maxValue && dispatch(increment())
    }, [counter, maxValue, dispatch])
    const resetButton = useCallback(() => {
        dispatch(reset(minValue))
    }, [minValue, dispatch])

    return (
        <div className={s.mainContainer}>
            <Counter counter={counter} maxValue={maxValue} status={status}/>
            <div className={s.container}>
                <UniversalButton
                    onClick={incButton}
                    disabled={counter === maxValue || status === 'error' || status === 'set'}
                    name='INC'
                />
                <UniversalButton
                    onClick={resetButton}
                    disabled={counter === minValue || status === 'error' || status === 'set'}
                    name='RESET'
                />
            </div>
        </div>
    )
}
