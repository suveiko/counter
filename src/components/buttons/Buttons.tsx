import React from 'react';
import s from './Buttons.module.css'
import {UniversalButton} from "./buttonCounter/universalButton/UniversalButton";

type ButtonType = {
    counter: number
    callBackInc: () => void
    callBackReset: () => void
    minValue: number
    maxValue: number
}

function Buttons({counter, callBackInc, callBackReset, minValue, maxValue}: ButtonType) {

    const incButtonStyle = `${counter === maxValue ? s.disabled : s.button}`
    const resetButtonStyle = `${counter === minValue ? s.disabled : s.button}`

    const disabledIncButton = counter === maxValue
    const disabledResetButton = counter === minValue

    return (
        <div className={s.container}>

            <UniversalButton
                className={incButtonStyle}
                onClick={callBackInc}
                disabled={disabledIncButton}
                name='inc'
            />
            <UniversalButton
                className={resetButtonStyle}
                onClick={callBackReset}
                disabled={disabledResetButton}
                name='reset'
            />
        </div>
    )
}

export default Buttons