import {useDispatch} from "react-redux";

import {setErrorAC} from "../../state/counter-reducer";
import {StatusType} from "../../App";
import {UniversalButton} from "../UniversalButton/UniversalButton";
import {UniversalInput} from "../UniversalInput/UniversalInput";

import s from './SettingsCounter.module.css'
import React from "react";


type SettingsCounterType = {
    maxValue: number
    minValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    counter: number
    status: StatusType
    onChangeButtonHandler: () => void
}

export const SettingsCounter = React.memo(({
                                    minValue, maxValue, changeMaxValue,
                                    changeMinValue, status, onChangeButtonHandler
                                }: SettingsCounterType) => {

    const dispatch = useDispatch()

    const error = maxValue <= minValue ? s.settingsError : s.settings;

    (maxValue <= minValue || minValue < 0) && dispatch(setErrorAC())

    return (

        <div className={s.container}>
            <div className={s.settings}>
                <div className={error}>
                    <span className={s.inputName}>Start Value:</span>
                    <UniversalInput
                        value={minValue}
                        changeValue={changeMinValue}
                        error={status === 'error'}
                    />
                </div>
            </div>

            <div className={s.settings}>
                <div className={error}>
                    <span className={s.inputName}>Max Value:</span>
                    <UniversalInput
                        value={maxValue}
                        changeValue={changeMaxValue}
                        error={status === 'error'}
                    />
                </div>
            </div>

            <UniversalButton
                onClick={onChangeButtonHandler}
                disabled={status !== 'set'}
                name='SET'
            />

        </div>
    )
})

