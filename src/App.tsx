// import {useEffect, useState} from 'react';
//
// import {BoardCount} from "./components/BoardCount/BoardCount";
// import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";
//
// import './App.css';
//
// export type StatusType = 'counter' | 'set' | 'error'
//
// function App() {
//
//     const minValueStatus = 'minValue'
//     const maxValueStatus = 'maxValue'
//
//     const [minValue, setMinValue] = useState(0)
//     const [maxValue, setMaxValue] = useState(5)
//     const [counter, setCounter] = useState(minValue)
//     const [status, setStatus] = useState<StatusType>('set')
//
//     useEffect(() => {
//         const minValueAsString = localStorage.getItem(minValueStatus)
//         minValueAsString && setMinValue(JSON.parse(minValueAsString))
//
//         const maxValueAsString = localStorage.getItem(maxValueStatus)
//         maxValueAsString && setMaxValue(JSON.parse(maxValueAsString))
//     }, [])
//
//     const onChangeButtonHandler = () => {
//         localStorage.setItem(minValueStatus, JSON.stringify(minValue))
//         localStorage.setItem(maxValueStatus, JSON.stringify(maxValue))
//         localStorage.setItem('status', JSON.stringify('counter'))
//         setStatus('counter')
//         setCounter(minValue)
//     }
//
//     const incButton = () => counter < maxValue && setCounter(counter + 1)
//     const resetButton = () => setCounter(minValue)
//
//     const changeMinValue = (value: number) => {
//         value > 999 ? setMinValue(999) : setMinValue(value)
//         setStatus('set')
//     }
//     const changeMaxValue = (value: number) => {
//         value > 999 ? setMaxValue(999) : setMaxValue(value)
//         setStatus('set')
//     }
//
//     return (
//         <div className='App'>
//             <BoardCount
//                 counter={counter}
//                 callBackInc={incButton}
//                 callBackReset={resetButton}
//                 minValue={minValue}
//                 maxValue={maxValue}
//                 status={status}
//             />
//             <SettingsCounter
//                 counter={counter}
//                 maxValue={maxValue}
//                 minValue={minValue}
//                 changeMaxValue={changeMaxValue}
//                 changeMinValue={changeMinValue}
//                 setStatus={setStatus}
//                 status={status}
//                 onChangeButtonHandler={onChangeButtonHandler}
//             />
//         </div>
//     )
// }
//
// export default App;
//

import {useState} from 'react';

import {BoardCount} from "./components/BoardCount/BoardCount";
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";

import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./redux/store";
import {incrementAC, resetAC, setCounterAC, setMaxValueAC, setMinValueAC, setSettingAC} from "./redux/counter-reducer";

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

