import React from 'react';
import {UniversalButton} from "./components/buttons/buttonCounter/universalButton/UniversalButton";
import s from './components/buttons/Buttons.module.css'

type SettingsCounter = {
    maxValue: number
    minValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    counter: number
}

export const SettingsCounter = ({minValue, maxValue, changeMaxValue, changeMinValue}: SettingsCounter) => {
    return (
        <div>
            <div>
                <span style={{color:'white'}}>Min Value:</span>
                <input type="number" value={minValue} onChange={(e) => changeMinValue(+e.currentTarget.value)}/>
            </div>
            <div>
                <span style={{color:'white'}}>Max Value:</span>
                <input type="number" value={maxValue} onChange={(e)=>changeMaxValue(+e.currentTarget.value)}/>
            </div>

            <UniversalButton className={s.button} onClick={()=>{}} disabled={false} name='set'/>
        </div>
    );
};
