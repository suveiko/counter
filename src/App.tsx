import {useDispatch, useSelector} from "react-redux";

import {AppRootState} from "./state/store";
import {incrementAC, resetAC, setCounterAC, setMaxValueAC, setMinValueAC, setSettingAC} from "./state/counter-reducer";

import {BoardCount} from "./components/BoardCount/BoardCount";
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";

import './App.css';


export type StatusType = 'counter' | 'set' | 'error'

function App() {

    const minValue = useSelector<AppRootState, number>(state => state.minValue)
    const maxValue = useSelector<AppRootState, number>(state => state.maxValue)
    const status = useSelector<AppRootState, StatusType>(state => state.status)
    const counter = useSelector<AppRootState, number>(state => state.counter)
    const dispatch = useDispatch()

    const onChangeButtonHandler = () => {
        dispatch(setCounterAC())
        dispatch(resetAC(minValue))
    }

    const incButton = () => counter < maxValue && dispatch(incrementAC())
    const resetButton = () => dispatch(resetAC(minValue))

    const changeMinValue = (value: number) => {
        value > 999 ? dispatch(setMinValueAC(999)) : dispatch(setMinValueAC(value))
        dispatch(setSettingAC())
    }
    const changeMaxValue = (value: number) => {
        value > 999 ? dispatch(setMaxValueAC(999)): dispatch(setMaxValueAC(value))
        dispatch(setSettingAC())
    }

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
                counter={counter}
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

