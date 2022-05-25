import React, {useState} from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import Button from "./components/buttons/Buttons";

function App() {

    const [counter, setCounter] = useState<number>(0)

    const incButton = () => setCounter(counter + 1)
    const resetButton = () => setCounter(0)

    return (
        <div className="App">
            <Counter counter={counter}/>
            <Button callBackInc={incButton} callBackReset={resetButton} counter={counter}/>
        </div>
    );
}

export default App;
