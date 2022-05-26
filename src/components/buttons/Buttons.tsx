import React from 'react';
import s from './Button.module.css'
import {ButtonCounter} from "./buttonCounter/ButtonCounter";

type ButtonType = {
    counter: number
    callBackInc: () => void
    callBackReset: () => void
    minValue: number
    maxValue: number
}

function Button({counter, callBackInc, callBackReset, minValue, maxValue}: ButtonType) {

    const incButtonStyle = `${counter === maxValue ? s.disabled : s.button}`
    const resetButtonStyle = `${counter === minValue ? s.disabled : s.button}`

    const disabledIncButton = counter === maxValue
    const disabledResetButton = counter === minValue

    return (
        <div className={s.container}>
            <ButtonCounter
                className={incButtonStyle}
                onClick={callBackInc}
                disabled={disabledIncButton}
                name='inc'
            />
            <ButtonCounter
                className={resetButtonStyle}
                onClick={callBackReset}
                disabled={disabledResetButton}
                name='reset'
            />
        </div>
    )
}

export default Button