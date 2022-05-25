import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    counter: number
    callBackInc: () => void
    callBackReset: () => void
}

function Button({counter, callBackInc, callBackReset}: ButtonType) {

    const incButtonStyle = `${counter === 5 ? s.disabled : s.button}`
    const resetButtonStyle = `${counter === 0 ? s.disabled : s.button}`

    return (
        <div className={s.container}>
            <button className={incButtonStyle} onClick={callBackInc} disabled={counter === 5}>inc</button>
            <button className={resetButtonStyle} onClick={callBackReset} disabled={counter === 0}>reset</button>
        </div>
    )
}

export default Button