import React, {useEffect, useState} from 'react';
import './App.css';
import {BoardCount} from "./components/boardcount/BoardCount";
import {SettingsCounter} from "./SettingsCounter";

function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [counter, setCounter] = useState(minValue)
    const [status, setStatus] = useState('counter')


    // const incButton = () => {
    //     if (maxValue === counter) return
    //     setCounter(counter + 1)
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
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setMinValue(newStartValue)
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [minValue, maxValue])


    const incButton = () => counter < maxValue && setCounter(counter + 1)
    const resetButton = () => setCounter(minValue)

    const changeMinValue = (value: number) => setMinValue(value)
    const changeMaxValue = (value: number) => setMaxValue(value)

    return (
        <div className='App'>
            <div className="desk">
                <BoardCount
                    counter={counter}
                    callBackInc={incButton}
                    callBackReset={resetButton}
                    minValue={minValue}
                    maxValue={maxValue}
                />
            </div>
            <div className="desk">
                <SettingsCounter
                    counter={counter}
                    maxValue={maxValue}
                    minValue={minValue}
                    changeMaxValue={changeMaxValue}
                    changeMinValue={changeMinValue}
                />
            </div>
        </div>
    );
}

export default App;
