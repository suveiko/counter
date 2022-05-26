import React, {useState} from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import Button from "./components/buttons/Buttons";

function App() {
    const maxValue = 15
    const minValue = 10

    const [counter, setCounter] = useState<number>(minValue)

    const incButton = () => {
        if (maxValue === counter) return
        setCounter(counter + 1)
    }
    const resetButton = () => setCounter(minValue)

    return (
        <div className="App">
            <Counter counter={counter} maxValue={maxValue}/>
            <Button
                callBackInc={incButton}
                callBackReset={resetButton}
                counter={counter}
                minValue={minValue}
                maxValue={maxValue}
            />
        </div>
    );
}

export default App;
