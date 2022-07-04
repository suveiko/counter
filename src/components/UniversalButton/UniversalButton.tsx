import s from './UniversalButton.module.css'
import React from "react";


type ButtonCounterType = {
    onClick: () => void
    disabled: boolean
    name: string
}

export const UniversalButton = React.memo(({onClick, disabled, name}: ButtonCounterType) => {

    return (
        <button
            className={s.button}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    )
})
