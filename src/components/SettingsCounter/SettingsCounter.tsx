import {useDispatch} from "react-redux";

import {reset, setCounter, setError, setMaxValue, setMinValue, setSetting} from "../../state/counter-reducer";

import {UniversalButton} from "../UniversalButton/UniversalButton";
import {UniversalInput} from "../UniversalInput/UniversalInput";
import {CounterType} from "../Counter/Counter";

import s from './SettingsCounter.module.css'


type SettingsCounterType = {
    minValue: number
} & CounterType


export const SettingsCounter = ({minValue, maxValue, status}: SettingsCounterType) => {

    const dispatch = useDispatch()

    const onChangeButtonHandler = () => {
        dispatch(setCounter())
        dispatch(reset(minValue))
    }

    const changeMinValue = (value: number) => {
        value > 999 ? dispatch(setMinValue(999)) : dispatch(setMinValue(value))
        dispatch(setSetting())
    }

    const changeMaxValue = (value: number) => {
        value > 999 ? dispatch(setMaxValue(999)) : dispatch(setMaxValue(value))
        dispatch(setSetting())
    }

    const error = maxValue <= minValue ? s.settingsError : s.settings;

    (maxValue <= minValue || minValue < 0) && dispatch(setError())

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
}

