import {memo} from "react";

import s from './UniversalButton.module.css'


type ButtonCounterType = {
    onClick: () => void
    disabled: boolean
    name: string
}


export const UniversalButton = memo(({onClick, disabled, name}: ButtonCounterType) => {

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
