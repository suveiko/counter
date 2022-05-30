import React from 'react';
import {UniversalButton} from "../UniversalButton/UniversalButton";
import s from './SettingsCounter.module.css'
import {UniversalInput} from "../UniversalInput/UniversalInput";
import {StatusType} from "../../App";

type SettingsCounterType = {
    maxValue: number
    minValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    counter: number
    setStatus: (status: StatusType) => void
    status: StatusType
    onChangeButtonHandler: () => void
}

export const SettingsCounter = ({
                                    minValue,
                                    maxValue,
                                    changeMaxValue,
                                    changeMinValue,
                                    setStatus,
                                    status,
                                    onChangeButtonHandler
                                }: SettingsCounterType) => {

    const error = maxValue <= minValue ? s.settingsError : s.settings

    if (maxValue <= minValue || minValue < 0) {
        setStatus('error')
    }

    return (
        <div className={s.desk}>
            <div className={s.settings}>
                <div className={error}>
                    <span className={s.inputName}>Min Value:</span>
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
                disabled={status !== 'set'} name='SET'
            />
        </div>
    );
};

