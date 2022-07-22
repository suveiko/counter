import {useSelector} from "react-redux";

import {AppRootState} from "./state/store";

import {BoardCount} from "./components/BoardCount/BoardCount";
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";

import './App.css';


export type StatusType = 'counter' | 'set' | 'error'


function App() {

    const minValue = useSelector<AppRootState, number>(state => state.minValue)
    const maxValue = useSelector<AppRootState, number>(state => state.maxValue)
    const status = useSelector<AppRootState, StatusType>(state => state.status)

    return (
        <div className='App'>
            <BoardCount
                minValue={minValue}
                maxValue={maxValue}
                status={status}
            />
            <SettingsCounter
                maxValue={maxValue}
                minValue={minValue}
                status={status}
            />
        </div>
    )
}

export default App;

