import {useDispatch, useSelector} from "react-redux";

import {AppRootState} from "./state/store";
import {incrementAC, resetAC, setCounterAC, setMaxValueAC, setMinValueAC, setSettingAC} from "./state/counter-reducer";

import {BoardCount} from "./components/BoardCount/BoardCount";
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";

import './App.css';
import {useCallback} from "react";


export type StatusType = 'counter' | 'set' | 'error'


function App() {

    const minValue = useSelector<AppRootState, number>(state => state.minValue)
    const maxValue = useSelector<AppRootState, number>(state => state.maxValue)
    const status = useSelector<AppRootState, StatusType>(state => state.status)
    const counter = useSelector<AppRootState, number>(state => state.counter)
    const dispatch = useDispatch()

    const onChangeButtonHandler = useCallback(() => {
        dispatch(setCounterAC())
        dispatch(resetAC(minValue))
    },[minValue,dispatch])

    const incButton = useCallback(() => {
        counter < maxValue && dispatch(incrementAC())
    },[counter,maxValue,dispatch])
    const resetButton = useCallback(() => {
        dispatch(resetAC(minValue))
    },[minValue,dispatch])

    const changeMinValue = useCallback((value: number) => {
        value > 999 ? dispatch(setMinValueAC(999)) : dispatch(setMinValueAC(value))
        dispatch(setSettingAC())
    },[dispatch])
    const changeMaxValue = useCallback((value: number) => {
        value > 999 ? dispatch(setMaxValueAC(999)): dispatch(setMaxValueAC(value))
        dispatch(setSettingAC())
    },[dispatch])

    return (
        <div className='App'>
            <BoardCount
                counter={counter}
                callBackInc={incButton}
                callBackReset={resetButton}
                minValue={minValue}
                maxValue={maxValue}
                status={status}
            />
            <SettingsCounter
                maxValue={maxValue}
                minValue={minValue}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
                status={status}
                onChangeButtonHandler={onChangeButtonHandler}
            />
        </div>
    )
}

export default App;

