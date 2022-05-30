import React, {useState} from 'react';
import './App.css';
import {BoardCount} from "./components/boardcount/BoardCount";
import {SettingsCounter} from "./SettingsCounter";

function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [counter, setCounter] = useState(minValue)


    const incButton = () => {
        if (maxValue === counter) return
        setCounter(counter + 1)
    }
    const resetButton = () => setCounter(minValue)

    const changeMaxValue = () => {
        setMaxValue(maxValue + 1)
    }

    const changeMinValue = () => {
        if (minValue === maxValue) return
        setMinValue(minValue + 1)
    }

    return (
        <div className='App'>
            <div className="btn">
                <BoardCount
                    counter={counter}
                    callBackInc={incButton}
                    callBackReset={resetButton}
                    minValue={minValue}
                    maxValue={maxValue}
                />
            </div>
            <div className="btn">
                <SettingsCounter
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
