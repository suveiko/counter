import React, {useEffect, useState} from 'react';
import './App.css';
import {BoardCount} from "./components/BoardCount/BoardCount";
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";

export  type StatusType = 'counter' | 'set' | 'error'

function App() {
    const minValueKey = 'minValue'
    const maxValueKey = 'maxValue'

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [counter, setCounter] = useState(minValue)
    const [status, setStatus] = useState<StatusType>('counter')


    // const incButton = () => {
    //     if (maxValue === Counter) return
    //     setCounter(Counter + 1)
    // }
    // const resetButton = () => setCounter(minValue)
    //
    // const changeMaxValue = () => {
    //     setMaxValue(maxValue + 1)
    // }
    //
    // const changeMinValue = () => {
    //     if (minValue === maxValue) return
    //     setMinValue(minValue + 1)
    // }
    useEffect(() => {
        let minValueAsString = localStorage.getItem(minValueKey)
        minValueAsString && setMinValue(JSON.parse(minValueAsString))

        let maxValueAsString = localStorage.getItem(maxValueKey)
        maxValueAsString && setMaxValue(JSON.parse(maxValueAsString))
    }, [])

    useEffect(() => {
        localStorage.setItem(minValueKey, JSON.stringify(minValue))
        localStorage.setItem(maxValueKey, JSON.stringify(maxValue))
        localStorage.setItem('status', JSON.stringify(status))
    }, [minValue, maxValue, status])


    const incButton = () => counter < maxValue && setCounter(counter + 1)
    const resetButton = () => setCounter(minValue)

    const changeMinValue = (value: number) => {
        setMinValue(value)
        setStatus('set')
    }
    const changeMaxValue = (value: number) => {
        setMaxValue(value)
        setStatus('set')
    }

    return (
        <div className='App'>
            <div className="desk">
                <BoardCount
                    counter={counter}
                    callBackInc={incButton}
                    callBackReset={resetButton}
                    minValue={minValue}
                    maxValue={maxValue}
                    status={status}
                />
            </div>
            <div className="desk">
                <SettingsCounter
                    counter={counter}
                    maxValue={maxValue}
                    minValue={minValue}
                    changeMaxValue={changeMaxValue}
                    changeMinValue={changeMinValue}
                    // setStatus={setStatus}
                    // status={status}
                />
            </div>
        </div>
    );
}

export default App;
