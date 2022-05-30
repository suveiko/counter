import React from 'react';
import {UniversalButton} from "./components/buttons/buttonCounter/universalButton/UniversalButton";
import s from './components/buttons/Buttons.module.css'

type SettingsCounter = {
    maxValue: number
    minValue: number
    changeMaxValue: () => void
    changeMinValue: () => void
}

export const SettingsCounter = ({minValue, maxValue, changeMaxValue, changeMinValue}: SettingsCounter) => {
    return (
        <div>
            <div>
                <span style={{color:'white'}}>Min Value:</span>
                <input type="number" value={minValue} onChange={changeMinValue}/>
            </div>
            <div>
                <span style={{color:'white'}}>Max Value:</span>
                <input type="number" value={maxValue} onChange={changeMaxValue}/>
            </div>

            <UniversalButton className={s.button} onClick={()=>{}} disabled={false} name='set'/>
        </div>
    );
};
