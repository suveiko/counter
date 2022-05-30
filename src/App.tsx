import React, {useEffect, useState} from 'react';
import './App.css';
import {BoardCount} from "./components/BoardCount/BoardCount";
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";

export type StatusType = 'counter' | 'set' | 'error'

function App() {

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [counter, setCounter] = useState(minValue)
    const [status, setStatus] = useState<StatusType>('set')

    useEffect(() => {
        const minValueAsString = localStorage.getItem('minValue')
        minValueAsString && setMinValue(JSON.parse(minValueAsString))

        const maxValueAsString = localStorage.getItem('maxValue')
        maxValueAsString && setMaxValue(JSON.parse(maxValueAsString))
    }, [])

    const onChangeButtonHandler = () => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('status', JSON.stringify('counter'))
        setStatus('counter')
        setCounter(minValue)
    }

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
                setStatus={setStatus}
                status={status}
                onChangeButtonHandler={onChangeButtonHandler}
            />
        </div>
    );
}

export default App;
